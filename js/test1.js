$(document).ready(function(){
	//复习
	// $(".one button.but1").click(function(){
	// 	$(".one p.a").hide(1000,function(){
	// 		alert("谢谢点击")
	// 	});
	// });
	// // $(".one button.but1").mouseover(function(){
	// // 	$(".one p.a").hide(1000);
	// // });

	// // $(".one button.but1").mouseout(function(){
	// // 	// $(".one p.a").show(1000);

	// // 	// toggle显示被隐藏的元素，并隐藏已显示的元素
	// // 	$(".one p.a").toggle(1000);
	// // });
 // 	$(".tow button.but2").click(function(){
 // 		$(".tow ul li.a").fadeIn();
 // 		$(".tow ul li.b").fadeIn("slow");
 // 		$(".tow ul li.c").fadeIn(1000);
 // 	});
 // 	$(".tow button.but2").dblclick(function(){
 // 		$(".tow ul li.a").fadeOut(1000);
 // 		$(".tow ul li.b").fadeOut("slow");
 // 		$(".tow ul li.c").fadeOut();

 // 		// toggle显示被隐藏的元素，并隐藏已显示的元素
 // 		// $(".tow ul li.a").fadeToggle(1000);
 // 		// $(".tow ul li.b").fadeToggle("slow");
 // 		// $(".tow ul li.c").fadeToggle();
 // 	});
 
 // 	// $(".tow button.but3").click(function(){
	// 	// // 设置透明度fadeTo的值在0～1之间

	// 	// $(".tow ul li.a").fadeTo("slow"0.1);
	// 	// $(".tow ul li.b").fadeTo("slow"0.35);
	// 	// $(".tow ul li.c").fadeTo("slow"0.7);
	//  // });

 // 	$(".tow button.but4").click(function(){
 		
 // 		$(".tow ul li.e").slideDown("slow");
 // 		$(".tow ul li.f").slideDown("slow");
 // 		$(".tow ul li.g").slideDown("slow");
	//  });
 // 	$(".tow button.but4").dblclick(function(){
 		
 // 		// $(".tow ul li.e").slideUp("slow");
 // 		// $(".tow ul li.f").slideUp("slow");
 // 		// $(".tow ul li.g").slideUp("slow");

 // 		$(".tow ul li.e").slideToggle("slow");
 // 		$(".tow ul li.f").slideToggle("slow");
 // 		$(".tow ul li.g").slideToggle("slow");
	//  });
 // 	$(".tow button.but5").mouseover(function(){
 // 		$(".tow ul li.h").css("display","black");
 // 		$(".tow ul li.h").animate({right:'5em',opacity:'1',height:'150px',
 //      width:'150px'});
 	
	//  });
	// $(".tow button.but5").mouseover(function(){
 // 		$(".tow ul li.h").css("display","black");
 // 		$(".tow ul li.h").animate({right:'-5em',opacity:'0.5',height:'toggle'},"5000");
 // 		$(".tow ul li.h").animate({fontSize:'3em'})
	//  });

	// $(".tow button.but6").click(function(){
	// 	$(".tow ul li").stop();
	// });
	// $(".tow button.but6").dblclick(function(){
	// 	$(".tow ul li").show();
	// });
	// $(".tow button.but7").click(function(){
	// 	$(".tow p.p1").css("color","red").slideDown("10000").slideToggle("5000");
		
	// });
	// $(".tow button.but7").dblclick(function(){
		
	// 	alert($(".tow p.p1").text());
	// 	// alert($(".tow p.p1").html());
	// 	// alert($(".tow a.pa1").attr("href"));
	// });
	// $(".tow button.but8").dblclick(function(){
	// 	alert($(".tow input.pi1").val());
	// });
	// $(".tow button.but8").click(function(){
	// 	$(".tow input.pi1").val("baby");
	// });
	// $(".tow button.but9").click(function(){
		
	// 	$(".tow p.p1").text("巴拉啦小魔仙");
	// });
	// $(".tow button.but9").dblclick(function(){
	// 	 $(".tow p.p1").html("<b>变啦！！</b>");
	// });

	//练习
	$(".three button.but1").click(function(){
		$(".three p.p1").text(function(i,origText){
			return"Old text:"+origText+"New text:Hello world! (index："+i+")";
		});
	});
	$(".three button.but2").click(function(){
		$(".three p.p2").html(function(i,origText){
			return"Old html:"+origText+"New html:Hello <b>world!!</b> (index:"+i+")";
		});
	});
	$(".three button.but3").click(function(){
		$(".three a.pa1").attr("href","http://music.baidu.com");
	});
	$(".three button.but4").click(function(){
		$(".three a.pa1").attr({"href":"http://music.baidu.com","title":"百度音乐"});
	});

	$(".three button.but5").click(function(){
		$(".three a.pa1").attr("href",function(i,origText){
			return origText+"/i";
		});
	});

	$(".three button.but6").click(function(){
		$(".three p.p1,p.p2").append("<b>Appended Text</b>.");
	});
	$(".three button.but7").click(function(){
		$(".three ol").append("<li>Appended item</li>");
	});

	$(".three button.but8").click(function(){
		$(".three p.p1,p.p2").prepend("<b>Prepend Text</b>.");
	});
	$(".three button.but9").click(function(){
		$(".three ol").prepend("<li>Pepend item</li>");
	});
	$(".three button.but10").click(function(){
		// $(".three div.d1").remove();  //整个删除
		$(".three div.d1").empty();		// 只删除子元素
	});
	$(".three button.but11").click(function(){
		
		$("p").remove(".p3");//指定删除
	});
	$(".three button.but12").click(function(){
		
		$(".d1").addClass("feel aqua");  //指定添加样式
	});
	$(".three button.but12").dblclick(function(){
		
		// $(".d1").removeClass("feel aqua");  //指定删除样式
		$(".d1").toggleClass("feel aqua");  
	});
	$(".three button.but13").dblclick(function(){	
		alert($(".d1").css("fontSize") );
	});
	$(".three button.but13").click(function(){	
		$(".d1").css({"background-color":"yellow","color":"aqua"});
	});
});