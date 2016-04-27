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
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 600);
		$(".popout-intro").fadeIn("slow");
	});
	
	$('#solutionbtn2').click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 600);
		$(".popout-intro").fadeIn("slow");
	});
	
	$('.popout-intro').click(function(){
		$(".popout-intro").hide();
	});
	
	$('.group1').click(function(){
		$(".popout-group1").fadeIn("slow");
	});
	
	$('.popout-group1').click(function(){
		$(".popout-group1").hide("slow");
	});
	
	$('#btn1-group1').click(function(){
		
		$('#production-img-1').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-2').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-1').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-2').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-4').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-5').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
	
	});
	$('.doctorU').click(function(){
		window.open('img/doctorU.jpg', '_blank');
		
	});
	
	$('#btn1-group1').hover(function(){
		$('#text1-group1').toggle();
	});
});
