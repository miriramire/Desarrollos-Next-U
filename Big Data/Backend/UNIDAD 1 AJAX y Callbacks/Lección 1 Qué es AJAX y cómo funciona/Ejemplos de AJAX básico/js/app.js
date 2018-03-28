var HtmlNode = document.getElementById('datos');

$.ajax({
	url: 'http://api.tvmaze.com/shows',
	type: 'GET',
	data: {},
	success: function(data){
		data.forEach(function(val, i){
			HtmlNode.innerHTML = HtmlNode.innerHTML + '<li>' + val.name + '</li>';
		});
	}
});