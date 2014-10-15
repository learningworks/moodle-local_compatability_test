function checkJava(minjava) {
	switch(PluginDetect.isMinVersion("Java", minjava)) {
		case 1:
			console.log("Java is good enough");
		break;
		case 0:
			console.log("case 0 - plugin installed & enabled but version is unknown (unable to determine if version >= minVersion).");
		break;
		case -0.1:
			console.log("Java is not good enough");
			return false;
		break;
		case -0.2:
			console.log("case -0.2  plugin installed but not enabled. Some browsers occasionally reveal enough info to make this determination.");
		break;
		case -0.5:
			console.log(".");
		break;
		case -1:
			console.log("case -1 plugin is not installed or not enabled.");
			return false;
		break;
		case -1.5:
			console.log("case -1.5  plugin status is unknown. This only occurs for certain plugins or certain browsers. ");
		break;
		case -3:
			console.log("case -3 you supplied a bad input argument to the isMinVersion( ) method.");
		break;
	}
}

function checkFlash(minflash) {
	switch(PluginDetect.isMinVersion("Flash", minflash)) {
	case 1:
		console.log("Flash is good enough");
	break;
	case 0:
		console.log("case 0 - plugin installed & enabled but version is unknown (unable to determine if version >= minVersion).");
	break;
	case -0.1:
		console.log("Flash is not good enough");
		return false;
	break;
	case -0.2:
		console.log("case -0.2  plugin installed but not enabled. Some browsers occasionally reveal enough info to make this determination.");
	break;
	case -0.5:
		console.log(".");
	break;
	case -1:
		console.log("case -1 plugin is not installed or not enabled.");
		return false;
	break;
	case -1.5:
		console.log("case -1.5  plugin status is unknown. This only occurs for certain plugins or certain browsers. ");
	break;
	case -3:
		console.log("case -3 you supplied a bad input argument to the isMinVersion( ) method.");
	break;
	}
}
function updateUserView(enabled) {
	if (window.location.href.indexOf("/compatability_test/view.php") > -1) {
		var tablebody = '';

	if (enabled["java"][0]) {
		var myJava = PluginDetect.getVersion("java");

		if (myJava == null) {
			myJava = "not installed";
		}		

		tablebody += buildRow("Java", myJava.replace(/,/g, "."), enabled["java"][1], "http://java.com/download/");
	}
	if (enabled["flash"][0]) {
		var myFlash = PluginDetect.getVersion("flash");

		if (myFlash == null) {
			myFlash = "not installed";
		}	

		tablebody += buildRow("Flash", myFlash.replace(/,/g, "."), enabled["flash"][1], "http://get.adobe.com/flashplayer/");
	}
	if (enabled["browser"]) {

		if (PluginDetect.browser.isChrome && enabled["chrome"][0]) {
			var myChrome = PluginDetect.browser.verChrome.replace(/,/g, ".");

			tablebody += buildRow("Chrome", myChrome, enabled["chrome"][1], "http://www.google.com/chrome/browser/");
		}

		if (PluginDetect.browser.isGecko && enabled["gecko"][0]) {
			var myGecko = PluginDetect.browser.verGecko.replace(/,/g, ".");

			tablebody += buildRow("Firefox", myGecko, enabled["gecko"][1], "https://www.mozilla.org/en-US/firefox/new/");
		}

		if (PluginDetect.browser.isOpera && enabled["opera"][0]) {
			var myOpera = PluginDetect.browser.verOpera.replace(/,/g, ".");

			tablebody += buildRow("Opera", myOpera, enabled["opera"][1], "http://www.opera.com/computer/");
		}

		if (PluginDetect.browser.isSafari && enabled["safari"][0]) {
			var mySafari = PluginDetect.browser.verSafari.replace(/,/g, ".");;

			tablebody += buildRow("Safari", mySafari, enabled["safari"][1], "http://support.apple.com/downloads/#safari");
			}
		}
		
		var table = document.getElementById("generaltable");
		table.innerHTML = tablebody;
	}
}

function buildRow(name, current, min, site) {
	if (min == false) 
		min = "";

	return '<tr><td>' + name + '</td><td>' + current + '</td><td>'+ min +'</td><td><a href="' + site + '">Visit Website</a></td></tr>';
}

function displayBanner(check, bannerfailure, link, bannerlink) {
	if (check == false) {
		var banner = document.createElement("div");
		banner.className = "alert alert-fail";
		banner.style.textAlign = "center";
		banner.innerHTML = "" + bannerfailure + " <a href=\"" + link + "\">" + bannerlink + "</a>";
		document.getElementById("page").insertBefore(banner, document.getElementById("page").firstChild);
	}else{
		var banner = document.createElement("div");
		banner.className = "alert alert-success";
		banner.style.textAlign = "center";
		banner.innerHTML = "Your browser is ready";
		document.getElementById("page").insertBefore(banner, document.getElementById("page").firstChild);
	}
}

function forceStatusPage(url) {
    if (upToDate == false){
			if (!(window.location.href.indexOf("/compatability_test/view.php") > -1)) {
				window.location.replace(url);
			}
		}
}
function checkDisplayBanner(bannerfailure, link, bannerlink) {
    if (upToDate == false) {
	displayBanner(false, bannerfailure, link, bannerlink);
		} else {
			if (window.location.href.indexOf("/compatability_test/view.php") > -1) {
				if (upToDate == true) {displayBanner(true);}
			}
		}
}

function isMinBrowser(browser, minVersion) {
	var currentVersion;
	minVersion = minVersion.split('.');
    switch (browser){
	    case "chrome":
			currentVersion = PluginDetect.browser.verChrome.split(',');

			for (var i = 0; i < minVersion.length; i++){
				if (minVersion[i] <= currentVersion[i]){
					return true;
				}
			}
		break;
		case "gecko":
			var currentVersion = PluginDetect.browser.verGecko.split(',');

			for (var i = 0; i < minVersion.length; i++){
				if (minVersion[i] <= currentVersion[i]){
					return true;
				}
			}

		break;
		case "opera":
			var currentVersion = PluginDetect.browser.verOpera.split(',');

			for (var i = 0; i < minVersion.length; i++){
				if (minVersion[i] <= currentVersion[i]){
					return true;
				}
			}
		break;
		case "safari":
			var currentVersion = PluginDetect.browser.verSafari.split(',');

			for (var i = 0; i < minVersion.length; i++){
				if (minVersion[i] <= currentVersion[i]){
					return true;
				}
			}
		break;
    }

    return false;
}

function minBrowserCheck(enabled) {

	if (enabled["chrome"][0] && PluginDetect.browser.isChrome) {
		return isMinBrowser("chrome", enabled["chrome"][1]);
	}

	if (enabled["gecko"][0] && PluginDetect.browser.isGecko) {
		return isMinBrowser("gecko", enabled["gecko"][1]);
	}

	if (enabled["opera"][0] && PluginDetect.browser.isOpera) {
		return isMinBrowser("opera", enabled["opera"][1]);
	}

	if (enabled["safari"][0] && PluginDetect.browser.isSafari) {
		return isMinBrowser("safari", enabled["safari"][1]);
	}
}

function isUpToDate(enabled) {	
	if (enabled["browser"] && !minBrowserCheck(enabled)) {
		upToDate = false;
	}
	else if (enabled["java"][0] && !checkJava(enabled["java"][1])) {
		upToDate = false;
	}
	else if (enabled["flash"][0] && !checkFlash(enabled["flash"][1])) {
		upToDate = false;
	}
}

var upToDate = true;