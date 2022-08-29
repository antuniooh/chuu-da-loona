
var url = "https://static.wikia.nocookie.net/612bcfe1-419d-4a33-8215-dd3edd450d1d";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].src = url;
	}
}

window.setInterval(replace, 3000);
