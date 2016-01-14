define(['jquery'],function($){
	//add
	/*$.ajax({
		url:'/api/contact/groupName',
		type:'put',
		dataType : 'json',
		data : {groupName:'我靠'},
		success:function(data){
			console.log(data);
		}
	})*/
	//remove
	// $.ajax({
	// 	url:'/api/contact/groupName/PXV5AvJWp',
	// 	type:'delete',
	// 	dataType : 'json',
	// 	success:function(data){
	// 		console.log(data);
	// 	}
	// })
	//update
	$.ajax({
		url:'/api/contact/groupName/QAVXQvG2L',
		type:'post',
		dataType : 'json',
		data:{groupName:'你麻痹',groupId:'QAVXQvG2L'},
		success:function(data){
			console.log(data);
		}
	})

	//groupList
})