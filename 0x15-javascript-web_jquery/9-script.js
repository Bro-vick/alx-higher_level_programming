const endpoint = "https://fourtonfish.com/hellosalut/?lang=fr"

$.get(endpoint, data => {
	$('DIV#hello').text(Data.hello);
});
