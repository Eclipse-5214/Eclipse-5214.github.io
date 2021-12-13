const w  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const h = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

var person = prompt("Please enter your favorite io game", "here");
var s1 = 0;
var s2 = 0;
var s3 = "10px";

if (person != null) {
  
  var size = prompt("Please enter a size, small, medium, or large", "here");

  if (size !=null) {
    
    if(size === "small"||size === "Small"){
        s1=280;
        s2=280;
    } 
    
    if(size === "medium"||size === "Medium"){
        s1=560;
        s2=560;
    }
    
    if(size === "large"||size === "Large"){
        s1=w;
        s2=h;
        s3="0px";
    }
    
  var SHEEP_2048;
(function() {
  'use strict';
  if (SHEEP_2048) {
    SHEEP_2048();
  } else {
    function applyStyles(elem,obj) {
      for (var prop in obj) elem.style[prop]=obj[prop];
    }
    var wrapper=document.createElement("div"),
    frame=document.createElement("iframe");
    frame.src="https://"+person;
    frame.width=s1; // additional 30px to hide scrollbars
    frame.height=s2;
    frame.scrolling="yes";
    applyStyles(frame,{
      position:'absolute',
      top:'0px',
      left:'0px',
      border:"none"
    });
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:s3,
      left:s3,
      width:s1+"px",
      height:s2+"px",
      overflow:"hidden",
      transition:"opacity 0.1s",
      borderRadius:"6px",
      transform:"scale(1)"
    });
    wrapper.appendChild(frame);
    document.body.parentNode.appendChild(wrapper);
    function enter() {wrapper.style.opacity="1";}
    function leave() {wrapper.style.opacity="0";frame.blur();}
    wrapper.addEventListener("mouseenter",enter,false);
    wrapper.addEventListener("mouseleave",leave,false);
    SHEEP_2048=()=>{
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
      frame=null;
      wrapper=null;
      SHEEP_2048=undefined;
      for (var script of document.querySelectorAll('script[src="https://eclipse-5214.github.io/js/Cube.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
}
}
setInterval(function() {window.onbeforeunload=function() {return "lol";}},1);
