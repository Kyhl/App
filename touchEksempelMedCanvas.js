var canvas;
var ctx;
var xgl;
var ygl;


function opdaterCanvas(){
	var x=event.touches[0].pageX;
		var y = event.touches[0].pageY;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.stroke();
}
function init(){
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove",opdaterCanvas,false)
	touchzone.addEventListener("touchend",end,false)
	ctx=touchzone.getContext("2d");
	mycanvas.width=mycanvas.width;
	ctx.fillStyle="yellow";
	ctx.fillRect(0,0,mycanvas.width,mycanvas.height);
}

function end(e){
	e.preventDefault();
}