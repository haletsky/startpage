# Startpages#
Startpage for your browser.
Every page have list of bookmarks, clocks, search input and sometimes additional information (weather, short news etc.)

###Blured###
I used jQuery and plugin [simplyWheter](http://simpleweatherjs.com/) for weather block.

###Minimal###
In this project i want to avoid any frameworks. I used pure JavaScript, HTML5/CSS3 for maximum performance and less size.
Also this startpage have improve search input. (Hover mouse on tilda near input for tooltip.)
You can specify where you want to search. Before you enter search request, you should write flag where you want to search. (-g' - Google, '-y' - Youtube, '-w' - Wikipedia, '-d' - DuckDuckGo)

**How to add new image?**:
Place image to `/images` folder. Rename the image by background #hex-color, save in jpg format (example: `F83A92.jpg`). and put this background color to array in `/js/index.js` file on 5 line.

# Install (new tab)
###Chrome
Chrome doesn't support custom new tab pages, so you'll need to use an extension. New Tab Redirect by Jim Schubert is the most common.
https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en
You will be able to specify an URL to load when that you open a new tab with this extension. This includes local files, such as your startpage.
       
###Firefox
You have a couple options here. The first and probably easiest way is to use an addon. The most common addon is Custom New Tab by Ed.
https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab/
You will be able to specify an URL to load when that you open a new tab with this addon. This includes local files, such as your startpage.
(NOTICE: At the time of writing this addon is not compatible with Firefox versions 40 and above).
 
The other, more in depth way that doesn't require any addons is as follows. Go to the address bar and type in "about:config". If this is your first time doing this, you will get a warning telling you that it's possible to seriously screw up your installation of Firefox. Take heed and don't go off the beaten path. Search for "browser.newtab.url". Once found you can edit the value found in the column to it's right. You must begin with "file://" (or "file:\" if you're on windows) This is important as it tells Firefox to look for a local file instead of a web page (a http:// page). After that type in the path/to/your/start/page/index.html. As long as the path you've entered is correct, when you open a new tab, your downloaded startpage will be used.
