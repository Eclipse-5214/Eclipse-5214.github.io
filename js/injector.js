var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.src = chrome.extension.getURL('injected.js');
setTimeout(function() {
	document.head.appendChild(script);
});