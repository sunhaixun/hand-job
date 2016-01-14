requirejs(['jquery','js/collection/grouplist'],function   (jquery,GroupList) {
    
	var groups = new GroupList();  
	groups.fetch({  
	    success: function(collection, resp) {  
	        // 同步成功后在控制台输出集合中的模型列表  
	        console.dir(resp);  
	    }  
	});  
    
});

