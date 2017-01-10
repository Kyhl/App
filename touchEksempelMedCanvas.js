var canvas;
var ctx;
var xgl;
var ygl;


function opdaterCanvas(){
	var c = document.getElementById("mycanvas");
	var ctx = c.getContext("2d");
	var x=event.touches[0].pageX;
		var y = event.touches[0].pageY;
	//ctx.beginPath();
	//ctx.moveTo(x,y);
	ctx.lineTo(x,y);
	ctx.stroke();
	//ctx.closePath();
}
function init(){
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchstart",opdaterCanvas,false);
	touchzone.addEventListener("touchmove",opdaterCanvas,false);
	touchzone.addEventListener("touchend",end,false);
	ctx=touchzone.getContext("2d");
	mycanvas.width=mycanvas.width;
	ctx.fillStyle="red";
	ctx.fillRect(0,0,mycanvas.width,mycanvas.height);
}



function end(e){
	e.preventDefault();
}