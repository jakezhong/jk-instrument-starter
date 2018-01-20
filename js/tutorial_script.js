
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
    var $ham_menu = $("#ham_menu");
    var $menu_panel = $("#menu_panel");
    var $home_container = $("#container");
    var $home_header = $("#header");
    var toggles = document.querySelectorAll(".c-hamburger");
    var $nav_overlay = $(".nav_overlay");
    var $history_container = $("#history_container");
    var $large_header = $(".large-header");
    $('.carousel').carousel({
      interval: false
    })
    /* ---------- if the user click the hamburger Menu, the home Menu will show out ---------- */
    $ham_menu.click(function() {
        $menu_panel.slideToggle(500);
    });
    
    /* ---------- if the user click the circle menu, the nav will show out ---------- */
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        $nav_overlay.toggle(500);
        $history_container.fadeToggle();
        $large_header.toggle(500);
        e.preventDefault();
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

//Here refer the mousewheel event function
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
	
/* ---------- This function is to use the keyboard or mouse to control the slide ---------- */
$(function(){
    var i=0;
    var i1=0;
    var $btn = $('.section-btn li'),
        $nav = $('.section-nav li'),
        $wrap = $('.section-wrap'),
        $arrow = $('.arrow');
    
        $("#history_container").swipe(
            {
                swipe:function(event, direction, distance, duration, fingerCount) {
                     if(direction == "up"){
                        up();
                        run();
                     }else if(direction == "down"){
                        down();
                        run();
                     }
                }
            }
        );
    /*Set the value to the current page*/
    function up(){i++;if(i==$btn.length){i=0};}
    function down(){i--;if(i<0){i=$btn.length-1};}

    /*slide the page*/
    function run(){
        $btn.eq(i).addClass('on').siblings().removeClass('on');	
        $wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
    };
    
    /*click the button on the right*/
    $btn.each(function(index) {
        $(this).click(function(){
            i=index;
            run();
        })
    });

    /*click the button on the right*/
    $nav.each(function(index) {
        $(this).click(function(){
            i=index;
            run();
        })
    });
    
    /*click the button to the next page*/
    $arrow.one('click',go);
    function go(){
        up();run();	
        setTimeout(function(){$arrow.one('click',go)},1000)
    };

    /*mouse response*/
    $wrap.one('mousewheel',mouse_);
    function mouse_(event){
        if(event.deltaY<0) {up()}
        else{down()}
        run();
        setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
    };

    /*up & down key*/
    $(document).one('keydown',k);
    function k(event){
        var e=event||window.event;
        var key=e.keyCode||e.which||e.charCode;
        switch(key)	{
            case 38: down();run();	
            break;
            case 40: up();run();	
            break;
        };
        setTimeout(function(){$(document).one('keydown',k)},1000);
    }
});
