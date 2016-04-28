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
	
	$('.btn1-group1').click(function(){
		
		$('#production-img-1').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-2').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerMain.jpg");
		$('#production-item-img-1').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_bannerS1_product.png");
		
		$('#production-item-text-1').html("<p>電子菜單能夠以多種形式推動您的業務增長，包括提升消費者的店內體驗、刺激消費、規劃促銷，進而增加交叉銷售和向上銷售的機會，您不再需要印製和分發紙質宣傳單，節省大量印製和分發費用。知名國外產業媒體《Digital Signage Today》表示，70%的客戶進行了非計畫性的臨時下單。從經營者的角度來看，投資報酬率已經成為一個主要因素。在餐廳的電子菜單上進行推銷的產品，其銷售額通常能提升5%，顯示電子看板系統通常在一年或一年內就能回本。研華智能電子菜單提供軟體、硬體一次到位的解決方案，包含多媒體播放器、顯示螢幕、專業內容編輯軟體，已成功應用於數十家餐飲門店，為消費者提供最優用餐體驗，為店家奠定優質服務口碑。</p>");
		$('#production-item-img-2').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_program1.jpg");
		
		$('#production-item-text-2').html("<p>動態美味加分 刺激顧客味蕾與消費慾望美觀炫麗的動態菜單，不僅減緩客人等候點餐的焦慮感，靈活的促銷活動、最新菜品等多樣化資訊調整，有效提升 5% 以上銷售額。</p>");
		
		$('#production-item-img-3').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_program2.jpg");
		$('#production-item-text-3').html("<p>一次性降低印製、營運成本研華智慧電子菜單提供耐用性強、生命週期長的數位媒體播放機、窄邊框大型顯示螢幕、及專業內容管理軟體，一次到位的解決方案，相較傳統菜單，節省印刷及人力維護成本，平均單店成本下降 7%。</p>");
		
		$('#production-item-img-4').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_program3.jpg");
		$('#production-item-text-4').html("<p>簡單輕鬆實現電子菜單及遠端系統管理通過內建WebAccess/IMM內容管理軟體件簡單三步驟，可依喜好編輯電子菜單內容，並可按時間排程自動調整菜單內容、更換菜單價位、促銷等。</p>");
		$('#production-item-img-5').attr("src","http://www.ushop-iotmart.com.tw/resource/Widget/Unzip/ATW/IoTMart-retail/images/IoTMart-retail_program4.jpg");
		$('#production-item-text-5').html("支援500+間門市電子菜單管理研華智能電子菜單採用網路管理架構，適用連鎖店面管理，可內部或遠端系統管理多達500家門市的電子菜單，大幅降低人事管理及維護成本。");
	});
	$('.doctorU').click(function(){
		window.open('img/doctorU.jpg', '_blank');
		
	});
	
	$('#btn1-group1').hover(function(){
		$('#text1-group1').toggle();
	});
});
