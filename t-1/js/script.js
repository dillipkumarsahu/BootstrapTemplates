
$(document).ready(function(){
	$(".bar-btn").click(function(){
		$(".mob-menu-div").slideToggle(300);
	});

	//filter coding
	$(".btn").each(function(){
		$(this).click(function(){
			var filter = $(this).data("filter");
			$(".all").each(function(){
				$(this).hide();
				$("."+filter).each(function(){
					$(this).show(500);
				});
			});
		});
	});
});