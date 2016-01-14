;(function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // Node, CommonJS之类的
            module.exports = factory(require('jquery'));
        } else {
            // 浏览器全局变量(root 即 window)
            root.returnExports = factory(root.jQuery);
        }
    }(this, function ($) {
        var height = $(window).height();
		var width = $(window).width();
		var requestAnimationFrame = window.requestAnimationFrame
	            || window.mozRequestAnimationFrame
	            || window.webkitRequestAnimationFrame
	            || window.msRequestAnimationFrame
	            || window.oRequestAnimationFrame
	            || function(callback) {setTimeout(callback, 17)};
		var createCanvas = function(){
			
			var canvas = $('<canvas>');
			$(document.body).append(canvas);
			$(canvas).css({
				position:'absolute',
				top:0,
				left:0,
				zIndex:0
			});
			$(canvas).attr('id', 'bubbles');

			$(canvas).attr('width', width);
			$(canvas).attr('height', height);
		};

		createCanvas();

		var canvas = document.getElementById('bubbles');
		var ctx = canvas.getContext('2d');

		

		var until = {
			randomRange : function(min, max){
				return Math.floor(Math.random() * (max - min + 1) + min);
			},
			randomFloat2 : function(min,max){
				return Number((Math.random() * (max - min) + min).toFixed(1));
			}
		}


		var Bubble = function(options){
			
			var defOpt = {
				size : 80,
		 		vSpeedY : [-0.2,-0.4,-0.6,-0.8],
		 		vSpeedX : [0.2,-0.2,0.8,0,-0.8,0.4,-0.4]
			}
			var self = this;
			self.options = $.extend(defOpt, options, true);
			self.size = self.options.size;
			self.live = 'pending';
			self.createCanvas();
			self.init();
		};

		

		Bubble.prototype.init = function(){
			var self = this;
			self.reset();
			
			self.draw();
			//self.move(options);
		};
		
		Bubble.prototype.move = function(){
			ctx.drawImage(this.cacheCanvas , this.x - this.size, this.y - this.size);
		}

		



		Bubble.prototype.die = function(){
			var self = this;
			var time = until.randomRange(300, 3000);
			self.live = 'die';
			setTimeout(function(){
				self.reset();
			},time)
		};

		Bubble.prototype.createCanvas = function(){
			var self = this;
			self.cacheCanvas = document.createElement("canvas");
	        self.cacheCtx = self.cacheCanvas.getContext("2d");
	        self.cacheCanvas.width = 2*self.size;
	        self.cacheCanvas.height = 2*self.size;
		}

		Bubble.prototype.draw = function(){
			var self = this;
			self.color = 'rgba(255,255,255,' +self.opacity+')';
			self.cacheCtx = null;
			self.createCanvas();
			self.cacheCtx.fillStyle=self.color;
			self.cacheCtx.beginPath();
			self.cacheCtx.arc(self.size,self.size,self.size,0,Math.PI*2,true);
			self.cacheCtx.fill();
		};

		Bubble.prototype.reset = function(){
			var self = this;
			self.live = 'live';
			self._setCrood();
			self._setOpacity();
			
		};

		Bubble.prototype._setCrood = function(){
			var self = this;
			self.x = until.randomRange(0,width);
			self.y = until.randomRange(400,height);
			self.vSpeedX = self.options.vSpeedX[until.randomRange(0,6)];
			self.vSpeedY = self.options.vSpeedY[until.randomRange(0,3)];
		}

		Bubble.prototype._setOpacity = function(){
			var self = this;
			self.opacity = 0;
			self.color = 'rgba(255,255,255,' +self.opacity+')';
		}

		Bubble.prototype.getArcBound = function(){
			var self = this;
			
			var minX = 0 - self.size;
			var maxX = width + self.size;
			var maxY = 0 - self.size;
			return self.x <= minX || self.x >= maxX || self.y <= maxY;
		}
		
		var Screens = function(){
			var self = this;
			self.width = width;
			self.height = height;
			self.bubbles = [];
		}
		Screens.prototype.add = function(obj){
			var self = this;
			self.bubbles.push(obj)
		}

		Screens.prototype.anim = function(){
			var self = this;
			var i,
			len = self.bubbles.length;
			
			function move(){

				ctx.clearRect(0,0,self.width, self.height);
				var my_gradient=ctx.createLinearGradient(0,0,0,height);
				my_gradient.addColorStop(0,"#2ca308");
				my_gradient.addColorStop(1,"#00ab5c");
				ctx.fillStyle=my_gradient;
				ctx.fillRect(0,0,width,height);

				for(i = 0;i < len; i++) {
					var bubble = self.bubbles[i];
					
					if (bubble.getArcBound()){
						if(bubble.live == 'live'){
							bubble.die();
						}
						
						continue;
					}
					bubble.x += bubble.vSpeedX;
					bubble.y += bubble.vSpeedY;
					if(bubble.opacity <= .2){
						bubble.opacity += .002;
						bubble.draw();
					}
					
					
					bubble.move();
				}
				
				requestAnimationFrame(move);
			}
			move();
		}
		BU = Bubble;
		SC = Screens;

		$.fn.canvasBubbles = function(opt){
			opt = opt || {};
			var defaultOptions = {
				size : [80, 100, 120, 140, 160]
			}
			var options = $.extend(defaultOptions,opt);
			var screens = new SC();
			defaultOptions.size.forEach(function(i){
				console.log(i);
				var bubble = new BU({
					size : i
				});
				screens.add(bubble);
			})

			screens.anim();
		}

		
}));