$(document).ready(function()
{
	var $tb = $('#tbd');
	
	$('#search').on('click',function(){

		var $finddata = $('#movietitle').val();
		
		$tb.empty();
		$.ajax({
			url:'http://www.omdbapi.com/?s='+$finddata,
			type:'GET',
			
			datatype:'json',

			success:function(data){


				 $.each(data.Search,function(i,movie)
				{


					$tb.append('<tr>'+'<td>'+"<img src="+movie.Poster+' alt="Image not visible" class="img-responsive">"'+'</td>'+'<td>'+movie.Title+'</td>'+'<td>'+movie.Type+'</td>'+'<td>'+movie.Year+'</td>'+'<td>'+movie.imdbID+'</td>'+'</tr>');

				});
		
				},
				error: function()
				{
					alert('No movies found');
				}



			});
	});
});