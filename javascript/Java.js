										// JavaScript Document
// Banner chính 
var dem = 1;
function left() {
	dem++;
	if( dem > 5 )
	{
		dem = 1;
	}
	var x = document.getElementById("banner");
	x.src = "banner/banner" + dem + ".jpg" ;
	//x.style.width = "2048px";
	x.style.height = "449px";
}

function right() {
	dem--;
	if( dem < 1 )
	{
		dem = 5;
	}
	var x = document.getElementById("banner");
	x.src = "banner/banner" + dem + ".jpg" ;
	//x.style.width = "2048px";
	x.style.height = "449px";
}
setInterval(function(){right();}, 2000);

// quảng cáo 
function hideADS(){
	var x = document.getElementsByClassName("quangcao")[0];
	x.style.display = "none";
	var y = document.getElementsByClassName("main-content")[0];
	y.style.opacity = "1" ;
	y.style.pointerEvents = "auto";
}

// go to top 
$(document).ready(function() {
    $(".goToTop > a").hide();
	$(".goToTop > a").click(function() {
		$("html, body").animate({scrollTop:0}, 500);
	});
	$(window).scroll(function() {
		if( $("html, body").scrollTop() > 200)
		 {
			$ (".goToTop > a ").fadeIn("slow");
		 }
		 else
		 {
			 $(".goToTop > a").fadeOut("slow");
		 }
	});		
});

// selection $ event 
$(document).ready(function() {
		$('.owl-carousel').owlCarousel({
		autoplay:true,
		nav:true,
		autoplayHoverPause:true,
		autoplayTime:1000,
		dotsSpeed:1000,
		smartSpeed:1000,
		slideBy:2,
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			},
		}
	});
});

// header nhỏ
$(document).ready(function(e) {
        $(window).scroll(function(){
			if($("html, body").scrollTop() > 100)
				$(".header1").fadeIn();
			else
				$(".header1").fadeOut();
		})
    });
	