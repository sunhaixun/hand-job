define(['backbone-min','js/model/groupName'],function(Backbone, Groups){

	var GroupList = Backbone.Collection.extend({
		url: '/api/data/groupName',
		model : Groups
	});

	var a = new Groups({
	    id : 'K7odYJzYq'
	});
	a.save();
	return 	GroupList;
})