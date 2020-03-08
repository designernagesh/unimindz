// JavaScript Document

// Banner Slider Script 
jQuery(document).ready(function(){
	jQuery('#demo1').skdslider({delay:5000, animationSpeed: 1000,showNextPrev:true,showPlayButton:false,autoSlide:true,animationType:'fading'});			
	jQuery('#responsive').change(function(){
	  $('#responsive_wrapper').width(jQuery(this).val());
	  $(window).trigger('resize');
	});			
});

// Top Row Toggle Script
$(document).ready(function() {
    $(".login-content").hide();
    $(".arrow-up").hide();
    $(".arrow-up").click(function(){
            $(".login-content").slideToggle(500);
            $(".arrow-up, .arrow-down").toggle();
    });
    $(".arrow-down").click(function(){
            $(".login-content").slideToggle(500);
            $(".arrow-up, .arrow-down").toggle();
    });
	$(".btn-close").click(function(){
            $(".login-content").slideUp(500);
    });
});

// Contact Us PopUp Script
$(document).ready(function(){
$(".arrow-down1").hide();
	$("#contactLink").click(function(){
	$(".arrow-up1, .arrow-down1").toggle();
		if ($("#contactForm").is(":hidden")){
			$("#contactForm").slideDown("slow");
		}
		else{
			$("#contactForm").slideUp("slow");
		}
	});                
});            
function closeForm(){
	$("#messageSent").show("slow");
	setTimeout('$("#messageSent").hide();$("#contactForm").slideUp("slow")', 2000);
}

// Testimonials Script 
$(document).ready(function () {
    //rotation speed and timer
    var speed = 1000000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    //if user clicked on prev button    
    $('#buttons a').click(function (e) {
        //slide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}


