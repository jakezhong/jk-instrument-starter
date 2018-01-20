/* ---------- Function to control the instrument menu icon ---------- */
var imgRefer = document.getElementById("img_refer");
var navActivation = {
    activation: 0,
    navId:'',
    getActivation: function(id) {
        this.navId = id;
        this.activation = 1;
        if(this.activation == 1) {
                this.navId.width = imgRefer.offsetWidth * 1.3;
        }
    }
}

window.onload = function(){
   document.onmousemove = function(ev) {
       var Aevent = ev||event;
       var Aimg = document.getElementsByName("navImg");
       var Adiv = document.getElementById("nav-wrapper");
       var activation = 0;
       for(var i=0; i<Aimg.length; i++){
                var x = Aimg[i].offsetLeft + Aimg[i].offsetWidth/2;
                var y = Aimg[i].offsetTop + Adiv.offsetTop + Aimg[i].offsetHeight/2;
                var a = x - Aevent.clientX;
                var b = y - Aevent.clientY;
                var dis = parseInt(Math.sqrt(a*a+b*b));
                var scale = 0.7 - dis/200;
                if(scale<0.5) {
                    scale=0.5;
                }
                Aimg[i].width = scale * 128;
                navActivation.navId.width = imgRefer.offsetWidth * 1.3;
       }
   }
   document.onclick = function(ev) {
       var Aevent = ev||event;
       var Aimg = document.getElementsByName("navImg");
       var Adiv = document.getElementById("nav-wrapper");
       var activation = 0;
       for(var i=0; i<Aimg.length; i++){
                var x = Aimg[i].offsetLeft + Aimg[i].offsetWidth/2;
                var y = Aimg[i].offsetTop + Adiv.offsetTop + Aimg[i].offsetHeight/2;
                var a = x - Aevent.clientX;
                var b = y - Aevent.clientY;
                var dis = parseInt(Math.sqrt(a*a+b*b));
                var scale = 0.7 - dis/200;
                if(scale<0.5) {
                    scale=0.5;
                }
                Aimg[i].width = scale * 128;
                navActivation.navId.width = imgRefer.offsetWidth * 1.3;
       }
   }
}

function switchinstrument(instrumentIndex){
    $('.carousel').carousel(instrumentIndex);
}

$(document).ready(function(ev) {
    var $loading_bcg = $(".loading_bcg");
    var $ham_menu = $("#ham_menu");
    var $menu_panel = $("#menu_panel");
    var $home_container = $("#container");
    var $home_header = $("#header");
    var toggles = document.querySelectorAll(".c-hamburger");
    var $nav_overlay = $(".nav_overlay");
    var $history_container = $("#history_container");
    var $large_header = $(".large-header");
    var $about_team = $(".about_team h1");
    $about_team.show(500, function() {
        $(".about_team ul").fadeIn(500, function() {
            $(".about_team ul li").eq(0).fadeIn(500, function() {
                $(".about_team ul li").eq(1).fadeIn(500, function() {
                    $(".about_team ul li").eq(2).fadeIn(500, function() {
                        $(".about_team ul li").eq(3).fadeIn(500);
                    })
                })
            })
        });
    });
    setTimeout(function() {
        $loading_bcg.fadeOut(1000);
    }, 6000);
    $('.carousel').carousel({
      interval: false
    })
    /* ---------- if the user click the hamburger Menu, the home Menu will show out ---------- */
    $ham_menu.click(function() {
        $menu_panel.slideToggle(500);
    });
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    //* ---------- Show the navigation if users click the hamburger menu ---------- */
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        $nav_overlay.toggle(500);
        $history_container.fadeToggle();
        $large_header.toggle(500);
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
});

$(document).ready(function(){			
	// Cache the Window object
	$window = $(window);
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		// When the window is scrolled...
	    $(window).scroll(function() {
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';
				// Move the background
				$self.css({ backgroundPosition: coords });
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					// Cache the sprite
					var $sprite = $(this);
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					$sprite.css({ backgroundPosition: coords });													
				}); // sprites
			
			}; // in view
		}); // window scroll
	});	// each data-type
}); // document ready

//Go back to the top of the page
$("#back_top").on('click', function(event) {
    var target = $(this);
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
});

$("#back_top_mobile").on('click', function(event) {
    var target = $(this);
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
});

var $home_piano, $home_container, $animate_container, $home_piano_animate, home_piano_video, $home_guitar, $home_drum;
$home_piano = $("#home_piano");
$home_guitar = $("#home_guitar");
$home_drum = $("#home_drum");
$home_container = $("#home_container");
$animate_container = $("#animate_container");
$home_piano_animate = $("#home_piano_animate");
$home_piano_menu = $("#home_piano_menu");
home_piano_video = document.getElementById("home_piano_video");
var $home_piano_mobile = $("#home_piano_mobile");
var $animate_container_mobile = $("#animate_container_mobile");
var piano_audio = new Audio('audio/piano.wav');
var guitar_audio = new Audio('audio/guitar.wav');
var drum_audio = new Audio('audio/drum.wav');
$home_piano.click(function() {
    $home_container.fadeOut(1000);
    $animate_container.fadeIn(1000);
    $home_piano_menu.show(5000);
    $home_piano_animate.animate({
        left: "-8.5vw",
        bottom: "-39vh",
        width: "45vw",
        height: "45vw",
    }, 3000);
    home_piano_video.play();
});

$home_piano.mouseenter(function() {
    piano_audio.loop = true;
    piano_audio.play();
});
$home_piano.mouseout(function() {
    piano_audio.pause();
});
$home_guitar.mouseenter(function() {
    guitar_audio.loop = true;
    guitar_audio.play();
});
$home_guitar.mouseout(function() {
    guitar_audio.pause();
});
$home_drum.mouseenter(function() {
    drum_audio.loop = true;
    drum_audio.play();
});
$home_drum.mouseout(function() {
    drum_audio.pause();
});

$home_piano_mobile.click(function() {
    $animate_container_mobile.fadeIn(500);
});