$("#logo").click(function() {
	$("body").addClass("light");
	$("#hidden").addClass("green");
	$('html, body').animate({
        scrollTop:$('#section2')[0].scrollHeight
    }, 500);
    $("#logo").css("cursor", "default");
});

$(window).scroll(function() {
  	$("body").addClass("light");
	$("#hidden").addClass("green");
});

$("#section3").click(function() {
	$('html, body').animate({
        scrollTop:$('#section4').offset().top
    }, 500);
});

$("#beta-interest").submit(function(event) {
	$("#beta-full, #beta-full *, #pop-up-overlay").fadeIn(500);
	event.preventDefault(); 
	$("#full-email").val($("#interest-email").val());
});

$("#pop-up-overlay").click(function() {
	$("#beta-full, #pop-up-overlay").fadeOut(500);
});

$("#beta-full").submit(function(event) {
    event.preventDefault();
	alert("Thank you for your interest! We'll be in touch soon.");
	$("#beta-full, #pop-up-overlay").fadeOut(500);
});