
	$(document).ready(function(){
	//复习昨天
		
		// $("p.a").mouseover(function(){
		// 		$("ul.left").show();
		// });
		// $("p.a").mouseout(function(){
		// 		$("ul.left").hide();
		// });
		// 	$("p.a").click(function(){
		// 		$("ul.left").fadeIn(1000);
		// });
			// $("p.a").click(function(){
			// 	$("ul.left").show();
			// 	});
			// $("p.a").dblclick(function(){
			// 	$("ul.left").hide();
			// 	});
			// $("p.c").mouseover(function(){
			// 	$("ul.right").slideDown("slow");
			// });
			// $("p.c").mouseout(function(){
			// 	$("ul.right").slideUp("slow")
			// });
			// $("p.c").mouseout(function(){
			// 	$("ul.right").slideToggle("slow");
			// });

			// $("p.c").click(function(){
				
			// 	$("ul.right").fadeIn();
			// });
			// $("p.c").mouseout(function(){
				
			// 	$("ul.right").fadeOut();
			// });

			// $("p.c").click(function(){

			// 	$("div.re").animate({left:'25em'});
				
			// });
	// 动画效果
		// $("span.a").click(function(){
		// 	$("div.an").animate({left:"5em"},5000);
		// 	$("div.an").animate({fontSize:"2em"},3000);
		// });
		// $("span.b").click(function(){
		// 	$("div.an").stop();
		// });
		// $("span.c").click(function(){
		// 	$("div.an").stop(true);
		// });
		// $("span.d").click(function(){
		// 	$("div.an").stop(true,true);
		// });

		// $("span.e").click(function(){
		// 	$("p.on").hide(1000);
		// });
	// Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。 
		// $(".clickme").click(function(){
		// 	$("div.a").css("color","red").slideUp("slow").slideDown("slow");
		// });
		// 获取HTML内容
		// $(".but1").click(function(){
		// 	alert("TEXT:" + $(".texts").text());
		// });
		// $(".but2").click(function(){
		// 	alert("HTML:"+$(".texts").html());
		// });
		// $(".but3").click(function(){
		// 	alert("name:" + $(".ipttext").val());
		// });
		// $(".but4").click(function(){
		// 	alert($(".showhref").attr("href"));
		// });
		//更改HTML的值
		  $("#btn1").click(function(){
		    $("#test1").text("Hello world!");
		  });
		  $("#btn2").click(function(){
		    $("#test2").html("<b>Hello world!</b>");
		  });
		  $("#btn3").click(function(){
		    $("#test3").val("Dolly Duck");
  			});
	});