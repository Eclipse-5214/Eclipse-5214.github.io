var style = document.getElementById("style");
var favicon = document.getElementById("favicon");
var isDark;

setInterval(function(){
  isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if(isDark){style.src="https://eclipse-5214.github.io/css/dark.css";favicon.href="https://eclipse-5214.github.io/Images/faviconwhite.png"}
  if(!isDark){style.src="https://eclipse-5214.github.io/css/light.css";favicon.href="https://eclipse-5214.github.io/Images/faviconblack.png"}
},100);
