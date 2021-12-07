var person = prompt("Please enter your favorite io game", "here");
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;

if (person != null) {
  
  var size = prompt("Please enter a size, small, medium, or large", "here");

  if (size !=null) {
    
    if(size === "small"||size === "Small"){
        s1=280;
        s2=280;
        s3="280px";
        s4="280px";
    } 
    
    if(size === "medium"||size === "Medium"){
        s1=560;
        s2=560;
        s3="560px";
        s4="560px"
    }
    
    if(size === "large"||size === "Large"){
        s1=window.width;
        s2=window.height;
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
    if(size !== "large"||size !== "Large")
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:"10px",
      left:"10px",
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
  }
    SHEEP_2048=()=>{
       if(size !== "large"||size !== "Large"){
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
       }
      frame=null;
       if(size !== "large"||size !== "Large")
      wrapper=null;
    }
      SHEEP_2048=undefined;
      for (var script of document.querySelectorAll('script[src="https://eclipse-5214.github.io/js/Cube.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
}
}
