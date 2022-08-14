// $(document).ready(function() {
//     $('#Chat, #chat-lights').click(function() {
//          $('#chat').toggle("fast");
//     });
// });
// $(document).ready(function() {
//     $('#News, #news-lights').click(function() {
//          $('#news').toggle("fast");
//     });
// });
// $(document).ready(function() {
//     $('#Twit, #twit-lights').click(function() {
//          $('#twit').toggle("fast");
//     });
// });
$(".window").fadeOut(0);

$("#app1needreset").empty();
function showwindow1() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play()
	$("#window-1").fadeIn(300);
	$("#window-1-bar").fadeIn(500);
}
function closewindow1() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play()
	$("#window-1").fadeOut(300);
	$("#window-1-bar").fadeOut(500);

}

$(document).ready(function() {
    $('#window-1-bar, #hide-window-1').click(function() {
         $('#window-1').toggle("fast");
    });
});

function showwindow2() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play()
	$("#window-2").fadeIn(300);
	$("#window-2-bar").fadeIn(500);
}
function closewindow2() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play()
	$("#window-2").fadeOut(300);
	$("#window-2-bar").fadeOut(500);
}

$(document).ready(function() {
    $('#window-2-bar, #hide-window-2').click(function() {
         $('#window-2').toggle("fast");
    });
});

function showwindow3() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play()
	$("#window-3").fadeIn(300);
	$("#window-3-bar").fadeIn(500);
	$("#app1needreset").append('<iframe src="browser.html" style="height: 483px;width: 100%;border: none;"></iframe>');
}
function closewindow3() {
	
	const sound = new Audio("Windows Navigation Start.wav");
	sound.play();
	$("#app1needreset").empty();
	$("#window-3").fadeOut(300);
	$("#window-3-bar").fadeOut(500);

}

$(document).ready(function() {
    $('#window-3-bar, #hide-window-3').click(function() {
         $('#window-3').toggle("fast");
    });
});

$(function() {
    // Change this selector to find whatever your 'boxes' are
    var boxes = $(".window");

    // Set up click handlers for each box
    boxes.click(function() {
        var el = $(this), // The box that was clicked
            max = 0;

        // Find the highest z-index
        boxes.each(function() {
            // Find the current z-index value
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });

        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max + 1 );
    });
});





 

(function()
{
	function dragdropTool()
	{
		var captured=false;
		var clickedX,clickedY;
		var returnX,returnY;
		var element=document.querySelectorAll(".window");
		
		for(var i=0,length=element.length;i<length;i++)
		{
			element[i].onmousedown=function(e)
			{	
				if(e.button===0)
				{
					captured=this;
					clickedX=e.clientX-parseInt(captured.style.left);
					clickedY=e.clientY-parseInt(captured.style.top);
				
					if(this.className.indexOf("retornable")>0)	
					{
						returnX=parseInt(this.style.left);
						returnY=parseInt(this.style.top);
					}
				}	
			}
			element[i].onmouseup=function()
			{
				captured=false;
				
				if(this.className.indexOf("retornable")>0) //bug outside screen				
				{
					this.style.top = returnY+"px";
					this.style.left = returnX+"px";
				}
			}
		}
		
		document.oncontextmenu=function()
		{
			return false;
		}
		
		document.onmousemove=function(e)
		{
			if(captured) //avoid to move out the screen?
			{
				captured.style.left=e.clientX-clickedX+"px";
				captured.style.top=e.clientY-clickedY+"px";
			}
			document.onmousedown=function()
			{
				return false;
			}
		}
	}
	var draggable=new dragdropTool();
	
	/*extend*/
	var cell=document.querySelectorAll("td");
	for(var i=0,length=cell.length;i<length;i++)
	{
		cell[i].onmouseover=function()
		{
			this.className="hover";
		}
		cell[i].onmouseout=function()
		{
			this.className="";
		}
	}
		
})();




// Find the right method, call on correct element
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function dumpFullscreen() {
  console.log("document.fullscreenElement is: ", document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  console.log("document.fullscreenEnabled is: ", document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
}

// Events
document.addEventListener("fullscreenchange", function(e) {
  console.log("fullscreenchange event! ", e);
});
document.addEventListener("mozfullscreenchange", function(e) {
  console.log("mozfullscreenchange event! ", e);
});
document.addEventListener("webkitfullscreenchange", function(e) {
  console.log("webkitfullscreenchange event! ", e);
});
document.addEventListener("msfullscreenchange", function(e) {
  console.log("msfullscreenchange event! ", e);
});

// Add different events for fullscreen