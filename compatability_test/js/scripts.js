function checkJava(minjava) {
	PluginDetect.getVersion(".");   // set delimiter
	switch(PluginDetect.isMinVersion("Java", minjava)) {
		case 1:
			console.log("Java is good enough");
		break;
		case 0:
			console.log("case 0 - plugin installed & enabled but version is unknown (unable to determine if version >= minVersion).");
		break;
		case -0.1:
			console.log("Java is not good enough");
			uptodateFlag = false;
		break;
		case -0.2:
			console.log("case -0.2  plugin installed but not enabled. Some browsers occasionally reveal enough info to make this determination.");
		break;
		case -0.5:
		break;
		case -1:
			console.log("case -1 plugin is not installed or not enabled.");
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
	PluginDetect.getVersion(".");   // set delimiter
	switch(PluginDetect.isMinVersion("Flash", minflash)) {
	case 1:
		console.log("Flash is good enough");
	break;
	case 0:
		console.log("case 0 - plugin installed & enabled but version is unknown (unable to determine if version >= minVersion).");
	break;
	case -0.1:
		console.log("Flash is not good enough");
		uptodateFlag = false;
	break;
	case -0.2:
		console.log("case -0.2  plugin installed but not enabled. Some browsers occasionally reveal enough info to make this determination.");
	break;
	case -0.5:
	break;
	case -1:
		console.log("case -1 plugin is not installed or not enabled.");
	break;
	case -1.5:
		console.log("case -1.5  plugin status is unknown. This only occurs for certain plugins or certain browsers. ");
	break;
	case -3:
		console.log("case -3 you supplied a bad input argument to the isMinVersion( ) method.");
	break;
	}
}
function updateUserView() {
	if (window.location.href.indexOf("/compatability_test/view.php") > -1) {
		var yourJava = document.getElementById("users-java");
		yourJava.innerHTML = PluginDetect.getVersion("java");
	}
	if (window.location.href.indexOf("/compatability_test/view.php") > -1) {
		var yourFlash = document.getElementById("users-flash");
		yourFlash.innerHTML = PluginDetect.getVersion("flash",true);
	}
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
    if (uptodateFlag == false){
			if (!(window.location.href.indexOf("/compatability_test/view.php") > -1)) {
				window.location.replace(url);
			}
		}
}
function checkDisplayBanner(uptodateFlag, bannerfailure, link, bannerlink) {
    if (uptodateFlag == false) {
	displayBanner(false, bannerfailure, link, bannerlink);
		} else {
			if (window.location.href.indexOf("/compatability_test/view.php") > -1) {
				if (uptodateFlag == true) {displayBanner(true);}
			}
		}
}

function checkBrowser(browser) {
    switch (browser){
	    case "Chrome":
		    if (PluginDetect.browser.isChrome) {
				return true;
			}
		break;
		case "Gecko":
		    if (PluginDetect.browser.isGecko) {
				return true;
			}
		break;
		case "Opera":
		    if (PluginDetect.browser.isOpera) {
				return true;
			}
		break;
		case "Safari":
		    if (PluginDetect.browser.isSafari) {
				return true;
			}
		break;
    }
 
}
function isMinBrowser(browser,minVersion) {
var currentVersion;
minVersion = minVersion.split('.');
var uptodate = true;
    switch (browser){
	    case "Chrome":
			currentVersion = PluginDetect.browser.verChrome;
			currentVersion = currentVersion.split(',');
			for (var i = 0; i < minVersion.length; i++){
				if (minVersion[i] < currentVersion[i]){
					uptodate = false;
				}
			}
			
			console.log(uptodate);
		break;
		case "Gecko":
            console.log(minVersion);
			console.log(PluginDetect.browser.verGecko);
		break;
		case "Opera":
            console.log(minVersion);
			console.log(PluginDetect.browser.verOpera);
		break;
		case "Safari":
            console.log(minVersion);
			console.log(PluginDetect.browser.verSafari);
		break;
    }
}
