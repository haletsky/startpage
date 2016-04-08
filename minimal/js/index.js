function initial(){
	var q = document.getElementsByClassName('main').item(0);
	
	//Set template design
	var templates = ['243496', 'C34447', '4F8365', '5D6299',
					 'ba9a6b', '739889', '353025', '453E3E',
					 '581F26', '864748', 'A07A8C'],
		id = Math.floor(Math.random() * templates.length);
	q.style.backgroundColor = "#" + templates[id];
	document.getElementById('image').src = 'image/' + templates[id] + '.jpg';

	reposition();

	//Settings for rss
	try{ createRSS(); } catch(e) { document.getElementById('newsStatus').innerHTML = 'Fail to connect.' }

	updateTime();

	document.getElementById('search').focus();

	setInterval(updateTime, 1000);
}

function search(event, value){
	if(event.keyCode != 13) return;

	var service = value.substr(0, 2);
	var string = value.substr(3);

	switch(service){
		case '-g':
			service = 'http://www.google.com/#q=';
			break;

		case '-y':
			service = 'https://www.youtube.com/results?search_query=';
			break;

		case '-w':
			service = 'https://en.wikipedia.org/wiki/Special:Search?search=';
			break;

		case '-d':
			service = 'https://duckduckgo.com/?q=';
			break;

		default:
			service = 'http://www.google.com/#q=';
			string = value;
	}

	window.location.replace(service + string);
}

function createRSS(){
	var feed = new google.feeds.Feed('https://www.reddit.com/r/news/.rss'),
		marquee = document.createElement('marquee');

	feed.load(function (data) {
   		for(var i = 0; i < data.feed.entries.length; i++){
    		var link = document.createElement("a");
   			link.href = data.feed.entries[i].link;
   			link.innerHTML = data.feed.entries[i].title;
			marquee.appendChild(link);
    	}
    	marquee.setAttribute('onmouseover', 'this.stop()');
    	marquee.setAttribute('onmouseout', 'this.start()');
		marquee.style.width = document.getElementsByClassName('bookmarks').item(0).offsetWidth + 'px';
    	document.getElementsByClassName('newsblock').item(0).appendChild(marquee);
	});	
}

function updateTime(){
   	var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
   	var t = "<span style='float: right'>";
	var m = new Date();
	var dateString =
		t + ("0" + (m.getMonth()+1)).slice(-2) +"/"+
		("0" + m.getDate()).slice(-2) + "/" + m.getFullYear() + "</span><br>" +
		t + (days[ m.getDay() ]) + "</span><br>" +
		t + ("0" + m.getHours()).slice(-2) + ":" +
		("0" + m.getMinutes()).slice(-2) + ":" +
		("0" + m.getSeconds()).slice(-2) + "</span>";

   	document.getElementById("clock").innerHTML = dateString;
}

function reposition(){
	var q = document.getElementsByClassName('main').item(0);

	//Set position mainblock
	q.style.left = window.innerWidth/2 - q.offsetWidth/2 + "px";
	q.style.top = window.innerHeight/2 - q.offsetHeight/2 + "px";
}