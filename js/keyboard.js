var $write_score = $("#write_score");
var $score_board = $("#score_board");
var $finish_score = $("#finish_score"); 
var $score_title = $("#score_title");
var $write_score_mobile = $("#write_score_mobile");
var $finish_score_mobile = $("#finish_score_mobile");
var listenPNum;

function getAction(li,ud){
    if(!li){
        var getEvent = window.event || arguments.callee.caller.arguments[0];
        li = getEvent.target || getEvent.srcElement;
    }
    if(ud){
            if($writeScore != false) {
                $(li).css("background", "rgba(0, 97, 252, 0.34)");
            }
            var getAudio=$(li).find("audio")[0];
            if(getAudio.currentTime){
                getAudio.currentTime=0;
            }
        getAudio.play();
           }
    else{
        $(li).css("background", "none");
    }
}

function isPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
    var flag=true;
    for(var i=0; i<Agents.length; i++){
        if(userAgentInfo.indexOf(Agents[i])>0){
            flag=false;
            break
        }
    }
    return flag
}

function getKeyboard(ud){
    var event = window.event || arguments.callee.caller.arguments[0], getKey = event.keyCode;
    var getLow=$("ul.low li"), getMiddle=$("ul.middle li"), getHigh=$("ul.high li"), getLi;
    if(getKey==81) {
        getLi=getLow.get(0);
    }
    else if(getKey==87) {
        getLi=getLow.get(1);
        }
    else if(getKey==69){
        getLi=getLow.get(2);
        }
    else if(getKey==82){
        getLi=getLow.get(3);
        }
    else if(getKey==84){
        getLi=getLow.get(4);
        }
    else if(getKey==89){
        getLi=getLow.get(5);
        }
    else if(getKey==85){
        getLi=getLow.get(6);
    }
    else if(getKey==65){
        getLi=getMiddle.get(0);
    }
    else if(getKey==83){
        getLi=getMiddle.get(1);
    }
    else if(getKey==68){
        getLi=getMiddle.get(2);
    }
    else if(getKey==70){
        getLi=getMiddle.get(3);
    }
    else if(getKey==71){
        getLi=getMiddle.get(4);
    }
    else if(getKey==72){
        getLi=getMiddle.get(5);
    }
    else if(getKey==74){
        getLi=getMiddle.get(6);
    }
    else if(getKey==90){
        getLi=getHigh.get(0);
    }
    else if(getKey==88){
        getLi=getHigh.get(1);
    }
    else if(getKey==67){
        getLi=getHigh.get(2);
    }
    else if(getKey==86){
        getLi=getHigh.get(3);
    }
    else if(getKey==66){
        getLi=getHigh.get(4);
    }
    else if(getKey==78){
        getLi=getHigh.get(5);
    }
    else if(getKey==77){
        getLi=getHigh.get(6);
    }
    else{
        return false;
    }
    if(ud){
        getAction(getLi, ud)
    }
    else{
        getAction(getLi, ud)
    }
}

//Testing write score function
var $writeScore;
var $score_container = $(".score_container");
$("body").keydown(function(event) {
    var getKey = event.keyCode;
    if(getKey==81) {
        writeScore("l1");
    }
    else if(getKey==87) {
        writeScore("l2");
        }
    else if(getKey==69){
        writeScore("l3");
        }
    else if(getKey==82){
        writeScore("l4");
        }
    else if(getKey==84){
        writeScore("l5");
        }
    else if(getKey==89){
        writeScore("l6");
        }
    else if(getKey==85){
        writeScore("l7");
    }
    else if(getKey==65){
        writeScore("m1");
    }
    else if(getKey==83){
        writeScore("m2");
    }
    else if(getKey==68){
        writeScore("m3");
    }
    else if(getKey==70){
        writeScore("m4");
    }
    else if(getKey==71){
        writeScore("m5");
    }
    else if(getKey==72){
        writeScore("m6");
    }
    else if(getKey==74){
        writeScore("m7");
    }
    else if(getKey==90){
        writeScore("h1");
    }
    else if(getKey==88){
        writeScore("h2");
    }
    else if(getKey==67){
        writeScore("h3");
    }
    else if(getKey==86){
        writeScore("h4");
    }
    else if(getKey==66){
        writeScore("h5");
    }
    else if(getKey==78){
        writeScore("h6");
    }
    else if(getKey==77){
        writeScore("h7");
    }
    else if(getKey== 46 || getKey== 8){
        $(".score_container p").last().remove();
        listenPNum --;
    }
});

function writeScore(pClass) {
    if($writeScore == true) {
        var scoreText = document.createElement("p");
        $(scoreText).html("<img src=\"images/keyboard/" + pClass + ".png\">");
        $(scoreText).css("color", "#000");
        $(scoreText).attr("class", pClass);
        $(".score_tip").fadeOut(500, function() {
        $(scoreText).hide().appendTo($score_container).fadeIn(500);
        });
    }
}

$("li").each(function() {
    $(this).click(function() {
        writeScore($(this).attr("class"));
    });
});

$("body").keydown(function(event) {
    var getAttr;
    var getKey = event.keyCode;
    if($writeScore == false) {
        if(getKey==81) {
            getAttr = "l1";
        }
        else if(getKey==87) {
            getAttr = "l2";
            }
        else if(getKey==69){
            getAttr = "l3";
            }
        else if(getKey==82){
            getAttr = "l4";
            }
        else if(getKey==84){
            getAttr = "l5";
            }
        else if(getKey==89){
            getAttr = "l6";
            }
        else if(getKey==85){
            getAttr = "l7";
        }
        else if(getKey==65){
            getAttr = "m1";
        }
        else if(getKey==83){
            getAttr = "m2";
        }
        else if(getKey==68){
            getAttr = "m3";
        }
        else if(getKey==70){
            getAttr = "m4";
        }
        else if(getKey==71){
            getAttr = "m5";
        }
        else if(getKey==72){
            getAttr = "m6";
        }
        else if(getKey==74){
            getAttr = "m7";
        }
        else if(getKey==90){
            getAttr = "h1";
        }
        else if(getKey==88){
            getAttr = "h2";
        }
        else if(getKey==67){
            getAttr = "h3";
        }
        else if(getKey==86){
            getAttr = "h4";
        }
        else if(getKey==66){
            getAttr = "h5";
        }
        else if(getKey==78){
            getAttr = "h6";
        }
        else if(getKey==77){
            getAttr = "h7";
        }
        if(listenPNum < $(".score_container p").length) {
            if(getAttr == $(".score_container p").eq(listenPNum).attr("class")) {
                listenPNum ++;
                $(".score_container p").eq(listenPNum-1).css("background", "none");
                $(".score_container p").eq(listenPNum).css("background", "rgba(255, 255, 0, 0.56)");
                $(".keyboard li."+getAttr).css("background", "rgba(0, 255, 0, 0.4)");
                $("body").keyup(function() {
                    $(".keyboard li").css("background", "none");
                });
            }
            else {
                $(".keyboard li."+getAttr).css("background", "rgba(255, 0, 0, 0.53)");
            }
        }
    }
});

$("body").mousedown(function(event) {
    if($writeScore == false) {
        if(listenPNum < $(".score_container p").length) {
            if(event.target.className == $(".score_container p").eq(listenPNum).attr("class")) {
                listenPNum ++;
                $(".score_container p").eq(listenPNum-1).css("background", "none");
                $(".score_container p").eq(listenPNum).css("background", "rgba(255, 255, 0, 0.56)");
                $(".keyboard li."+event.target.className).css("background", "rgba(0, 255, 0, 0.4)");
                $("body").mouseup(function() {
                    $(".keyboard li").css("background", "none");
                });
            }
            else {
                $(".keyboard li."+event.target.className).css("background", "rgba(255, 0, 0, 0.53)");
            }
        }
    }
});

$score_title.focus(function() {
    $(this).val('');
    $writeScore = 'a';
});

$score_title.blur(function() {
    if($(this).val() == '') {
        $(this).val('Input Your Title Here');
    }
    $writeScore = true;
});

$score_title.keypress(function(event) {
    if(event.which == 13) {
        if($(this).val() == '') {
            $(this).val('Input Your Title Here');
        }
        $writeScore = true;
        $(this).blur();
    }
});

$(document).ready(function(){
    var $ham_menu = $("#ham_menu");
    var $menu_panel = $("#menu_panel");
    var toggles = document.querySelectorAll(".c-hamburger");
    var $nav_overlay = $(".nav_overlay");
    var $practice_container = $(".practice_container");
    var $large_header = $(".large-header");
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
        $practice_container.fadeToggle();
        $large_header.toggle(500);
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
    document.onkeydown=function(){
        getKeyboard(true)
    };
    document.onkeyup=function(){
        getKeyboard(false)
    };
    if(isPC()){
        $(".key li").on("mousedown",function(){
            getAction("",true)
        });
        $(".key li").on("mouseup",function(){
            getAction("",false)
        })
    }
    else{$(".key li").on("touchstart",function(){
        getAction("",true)
    });
         $(".key li").on("touchend",function(){
             getAction("",false)
         })
        }
    
    $write_score.mouseenter(function() {
        $(this).css("border-radius", "10px");
        $(this).animate({
            width: "200",
        }, 500);
        $(this).text("WRITE SCORE");
        $(this).removeClass("write_score_bcg");
    });
    
    $write_score.mouseout(function() {
        $(this).animate({
            width: "60",
        }, 500, function() {
            $(this).css("border-radius", "30px");
            $(this).text("");
            $(this).addClass("write_score_bcg");
        });
    });
    
    $write_score.on("click", function() {
        $(this).fadeOut(500, function() {
            $finish_score.fadeIn(500);
            $score_title.fadeIn(500);
            if($(".score_container p").length == 0) {
            $(".score_tip").fadeIn(500);
            }
        });
        $writeScore = true;
        $score_title.prop('disabled', false);
    });
    
    $finish_score.on("click", function() {
        $(this).fadeOut(500, function() {
            $write_score.css("border-radius", "10px");
            $write_score.animate({
                width: "60",
            });
            $write_score.text("");
            $write_score.fadeIn(500);
            $write_score.css("border-radius", "30px");
        });
        $writeScore = false;
        $score_title.prop('disabled', true);
        for(var i=0; i<listenPNum; i++) {
            $(".score_container p").eq(listenPNum).css("background", "none");
        }
        listenPNum = 0;
        $(".score_container p").eq(listenPNum).css("background", "rgba(255, 255, 0, 0.56)");
    });
    
    $write_score_mobile.on("click", function() {
        $(this).fadeOut(500, function() {
            $finish_score_mobile.fadeIn(500);
            $score_title.fadeIn(500);
            if($(".score_container p").length == 0) {
            $(".score_tip").fadeIn(500);
            }
        });
        $writeScore = true;
        $score_title.prop('disabled', false);
    });
    
    $finish_score_mobile.on("click", function() {
        $(this).fadeOut(500, function() {
            $write_score_mobile.fadeIn(500);
        });
        $writeScore = false;
        $score_title.prop('disabled', true);
        for(var i=0; i<listenPNum; i++) {
            $(".score_container p").eq(listenPNum).css("background", "none");
        }
        listenPNum = 0;
        $(".score_container p").eq(listenPNum).css("background", "rgba(255, 255, 0, 0.56)");
    });
});