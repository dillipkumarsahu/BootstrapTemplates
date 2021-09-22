//typing animation
$(document).ready(function(){
        var string = "BE STYLISH";
        var i = 0;
        if(i<string.length)
            {
                setInterval(function(){
                    document.querySelector(".add-header").innerHTML += string.charAt(i);
                    i++;
                },100);
            }
});

//search box collapse
$(document).ready(function(){
	$("#search-icon").click(function(){
		$("#search-box").collapse('toggle');
	});
	$("#search-box").on('show.bs.collapse',function(){
		$("#header-slider h1").animate({marginTop:'50px'});
	});
	$("#search-box").on('hide.bs.collapse',function(){
		$("#header-slider h1").animate({marginTop:'0px'});
	});
});


//client slider
$(document).ready(function(){
	$("#next-client").click(function(){
		$("#client-slider").carousel('next');
	});
	$("#prev-client").click(function(){
		$("#client-slider").carousel('prev');
	});
});


//number animation of projects
$(window).scroll(function(){
	if(sessionStorage.getItem('user_scroll') == null)
	{
		var value = $("#people-say").attr('class');
		if (value.indexOf("animated") != -1)
		{
			animation();
			sessionStorage.setItem('user_scroll','yes');
		}
	}
});


function animation()
{
//web project
$(document).ready(function(){
	var num = 0;
	var repeat = setInterval(function(){
		num += 1;
		$("#num-code").html(num+"+");
		if (num == 500) 
		{
			clearInterval(repeat);
		}
	},1);
});

//logo design
$(document).ready(function(){
	var num = 0;
	var repeat = setInterval(function(){
		num += 1;
		$("#num-desktop").html(num+"+");
		if (num == 410) 
		{
			clearInterval(repeat);
		}
	},1);
});

//app design
$(document).ready(function(){
	var num = 0;
	var repeat = setInterval(function(){
		num += 1;
		$("#num-android").html(num+"+");
		if (num == 600) 
		{
			clearInterval(repeat);
		}
	},1);
});

//clip art
$(document).ready(function(){
	var num = 0;
	var repeat = setInterval(function(){
		num += 1;
		$("#num-paperclip").html(num+"+");
		if (num == 200) 
		{
			clearInterval(repeat);
		}
	},1);
});
}