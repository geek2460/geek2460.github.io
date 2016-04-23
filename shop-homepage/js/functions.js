// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if ( navigator.appVersion.indexOf("Mac")!=-1 ) 
	jQuery('html').addClass('osx');

// When DOM is fully loaded
jQuery(document).ready(function($) {
	
	
	
	$('.popout-page').click(function(){
		$(".popout-page").hide();
		});
	$('.mybtn2').click(function(){
		document.getElementById("navibarchoice").click()
		});
	$('.mybtn1').click(function(){
		document.getElementById("solutionbtn").click()
		});
	$('#solutionbtn').click(function(){
		$(".popout-intro").fadeIn("slow");
	});
	
	$('#solutionbtn2').click(function(){
		$(".popout-intro").fadeIn("slow");
	});
	
	$('.popout-intro').click(function(){
		$(".popout-intro").hide();
	});
});
