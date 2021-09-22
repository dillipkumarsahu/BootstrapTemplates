$(document).ready(function(){
	if($(window).width()>1024)
	{
	$(window).scroll(function(){
		var sh = window.pageYOffset;
		if (sh>161) 
		{
			$("#brand-hide").show(200);
		}
		else{
			$("#brand-hide").hide(200);
		}	
	});
	}
});

//scroll to top coding start
 $(document).ready(function(){
 	$(window).scroll(function(){
 		if ($(window).scrollTop()>200) 
 		{
 			$("#go-top i").fadeIn(500);
 		}
 		else{
 			$("#go-top i").fadeOut(500);
 		}
 	});
 	$("#go-top").click(function(){
 		$("html,body").animate({scrollTop:0},500)
 	});
 });
//scroll to top coding end

//smoth scrolling
 $(document).ready(function(){
 	$(".navbar ul li a").click(function(event){
 		event.preventDefault();
 		var href_value = this.hash;
 		$("html").animate({
 			scrollTop:$(href_value).offset().top
 		},500,function(){
 			window.location.hash = href_value;
 		});
 	});



 	//custom date coding start
 		$("#custom-date").datepicker({
 			dateFormat : "dd/mm/yy",
 			showAnim : "explode", 
 		});
 	//end custom date coding


 	//retrive file name in upload btn
 		$("#upload").on("change",function(){
 			var file_name = this.files[0].name;
 			$(".custom-file-label").html(file_name);
 		});
 	//end retrive file name in upload btn
 });
