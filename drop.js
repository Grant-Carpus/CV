/* 
	The following JavaScript functions control the HTML & CSS
	required to create a drop-down menu.
*/

// Global Variables
var DDSPEED = 10;
var DDTIMER = 15;
 
// main function to handle the mouse events 
function ddMenu(id,d){
	var h = document.getElementById(id + '-ddheader');
	var c = document.getElementById(id + '-ddcontent');
	clearInterval(c.timer);
	if(d == 1){
		clearTimeout(h.timer);
		if(c.maxh && c.maxh <= c.offsetHeight){
			return
		}// end of if
		else if(!c.maxh){
			c.style.display = 'block';
			c.style.height = 'auto';
			c.maxh = c.offsetHeight;
			c.style.height = '0px';
		}//end of else if
		c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
	}else{
		h.timer = setTimeout(function(){ddCollapse(c)},50);
	}//end of else
}//end of function	
 
// collapse the menu 
function ddCollapse(c){
	c.timer = setInterval(function(){ddSlide(c,-1)},DDTIMER);
}//end of function
 
// cancel the collapse if a user rolls over the drop-down 
function cancelHide(id){
	var h = document.getElementById(id + '-ddheader');
	var c = document.getElementById(id + '-ddcontent');
	clearTimeout(h.timer);
	clearInterval(c.timer);
	if(c.offsetHeight < c.maxh){
		c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
	}//end of if
}//end of function
 
// incrementally expand/contract the drop-down and change the opacity 
function ddSlide(c,d){
	var currh = c.offsetHeight;
	var dist;
	if(d == 1){
		dist = (Math.round((c.maxh - currh) / DDSPEED));
	}//end of if
	else{
		dist = (Math.round(currh / DDSPEED));
	}//end of else
	if(dist <= 1 && d == 1){
		dist = 1;
	}//end of if
	c.style.height = currh + (dist * d) + 'px';
	c.style.opacity = currh / c.maxh;
	c.style.filter = 'alpha(opacity=' + (currh * 100 / c.maxh) + ')';
	if((currh < 2 && d != 1) || (currh > (c.maxh - 2) && d == 1)){
		clearInterval(c.timer);
	}//end of if
}//end of function