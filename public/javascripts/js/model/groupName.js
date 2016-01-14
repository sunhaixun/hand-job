define(['backbone-min'],function(Backbone){
	/*urlroot 会拼接id 到url上*/
	var Groups = Backbone.Model.extend({
		urlRoot : '/api/data/groupName',
		defaults : {  
	        groupName : 'unknown', 
	        groupId : '' 
	    } 
	});

	return 	Groups;
	
})