function initial(){
	var templates = ['243496', 'C34447', '4F8365', '5D6299', 'ba9a6b'],
		id = Math.floor(Math.random() * templates.length);

	document.getElementsByClassName('main').item(0).style.backgroundColor = "#" + templates[id];
	document.getElementById('image').src = templates[id] + '.jpg';

	var q = document.getElementsByClassName('main').item(0);

	q.style.left = window.innerWidth/2 - q.offsetWidth/2 + "px";
	q.style.top = window.innerHeight/2 - q.offsetHeight/2 + "px";
	
	//Now we can show page
	var i = 0.1;
	var init = setInterval(function(){
		document.body.style.opacity = i;
		i += 0.100;
		if(i >= 1){
			clearInterval(init);
		}
	},20);
}

function search(event, value){
	if (event.keyCode == 13){ window.location.replace('http://www.google.com/#q=' + value); }
}

setInterval(function(){
    var date = new Date();
    var hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);
