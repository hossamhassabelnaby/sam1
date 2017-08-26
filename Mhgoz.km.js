$(document).ready(function(e) {

    $(".tab-label-1").click(function(){

		$(this).find("h2").addClass("kemo");	

		$(".tab-label-2 h2").removeClass("kemo");

		$(".tab-label-3 h2").removeClass("kemo");

	});

    $(".tab-label-2").click(function(){

		$(this).find("h2").addClass("kemo");

				$(".tab-label-1 h2").removeClass("kemo");

		$(".tab-label-3 h2").removeClass("kemo");	

	});

    $(".tab-label-3").click(function(){

		$(this).find("h2").addClass("kemo");

				$(".tab-label-2 h2").removeClass("kemo");

		$(".tab-label-1 h2").removeClass("kemo");	

	});	

	

	$(".hid-acc").click(function(){

		$(".welcome2").toggle();

		

	});
	

	$(".hid-acc").click(function(){

		$(".navbaar").toggle();

		

	});
	
	
	$(".cat-sp").click(function(){

		$(".cat-bar").toggle();

		

	});
	
	
	
$(".hid-acc").click(function(){
	 
	//$(this).find("ul span > a").text("kemo");
		 
	  if($(this).next(".navbaar").attr("lang") == '0'){
	   $('.navbaar').attr({"lang":"0"});+
	   $(this).find("ul span:first-child").show();
	   $(this).find("ul span:last-child").hide();
	   $(this).next(".navbaar").attr({"lang":"1"});
	  }else{
	   $('.navbaar').attr({"lang":"0"});
	   $(this).find("ul span:last-child").show();
	   $(this).find("ul span:first-child").hide();
	  }
	 
});

$(".moder").click(function(){

	$(this).find(".moderContainer").toggle();
	
});


$(".topp a").click(function(){

$(this).toggleClass("icon-arrow-up");

});
	
/*
 $(".show_player").click(function(){
  if($(this).next(".player_mos").attr("lang") == '0'){
   $('.player_mos').attr({"lang":"0"});
   $(".player_mos").slideUp(o);
   $(this).next(".player_mos").slideToggle(300).attr({"lang":"1"});
  }else{
   $('.player_mos').attr({"lang":"0"});
   $(".player_mos").slideUp(o);
  }
 });
*/
	

});