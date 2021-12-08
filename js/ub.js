const w  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const h = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

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
    frame.src="https://holyubofficial.net/";
    frame.width=w; // additional 30px to hide scrollbars
    frame.height=h;
    frame.scrolling="no";
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
      bottom:"0px",
      left:"0px",
      width:w+"px",
      height:h+"px",
      overflow:"hidden",
      transition:"opacity 0.1s",
      borderRadius:"0px",
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

