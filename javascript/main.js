///Sample js for to traverse list of search results once the backend API is exposed
$(function(){
	$.ajax({
		type:'GET',
		url:'../searchlist', //api 
		success:function(tagsearchlist){
			$.each(tagsearchlist, function(i, tagsearchitem){
				$tagsearchlist.append('<li>year: '+tagsearchitem.year + ', name: ' + tagsearchitem.name + '</li>' );

			});
		},
		error: function(){
			alert('Error loading tagsearchlist');
		}
	});
});