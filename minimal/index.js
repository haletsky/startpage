function initial(){
	var templates = ['243496', 'C34447', '4F8365', '5D6299', 'ba9a6b'],
		id = Math.floor(Math.random() * templates.length);

	var q = document.getElementsByClassName('main').item(0);

	q.style.backgroundColor = "#" + templates[id];
	document.getElementById('image').src = templates[id] + '.jpg';

	q.style.left = window.innerWidth/2 - q.offsetWidth/2 + "px";
	q.style.top = window.innerHeight/2 - q.offsetHeight/2 + "px";

	document.get

	function getTime(){
    	var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    	var t = "<span style='float: right'>";
		var m = new Date();
		var dateString =
			t + ("0" + m.getHours()).slice(-2) + ":" +
			("0" + m.getMinutes()).slice(-2) + ":" +
			("0" + m.getSeconds()).slice(-2) + "</span><br>" + 
			t + (days[ m.getDay() ]) + "</span><br>" +
			t + ("0" + (m.getMonth()+1)).slice(-2) +"/"+
			("0" + m.getDate()).slice(-2) + "/" + m.getFullYear() + "</span>";

    	document.getElementById("clock").innerHTML = dateString;
	}

	getTime();

	setInterval(getTime, 1000);

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

