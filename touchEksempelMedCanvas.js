var canvas;
var ctx;
//var xgl;
//var ygl;
//var lastPt=null;


function opdaterCanvas(e){
	//e.preventDefault();
	var x=event.touches[0].pageX;
		var y = event.touches[0].pageY;
	//if(lastPt!=null){
	//ctx.beginPath();
	ctx.lineTo(x,y);
	//ctx.moveTo(x,y);
	//ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
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
	//lastPt=null
}