
$(document).ready(function() {
   
   $('.bxslider').bxSlider({
	  mode: 'fade',
  	  autoControls: true,
  	  video: true,
  	  useCSS: false
	});
   
   $('.bxslider').bxSlider();
   
   $('#expand1').mouseenter(function() {
   		$('#expand1').text('Klikni');
   });
   
   $('#expand1').mouseleave(function() {
   		$('#expand1').text('Info');
   });
   
   $('#expand1').click(function() {
   		$('#sbb1').slideDown();
   		$('#sbb2').slideUp();
   });
   
    $('#sbb1').mouseleave(function() {
   		$('#sbb1').slideUp();
   });
   
   $('#expand2').mouseenter(function() {
   		$('#expand2').text('Klikni');
   });
   
   $('#expand2').mouseleave(function() {
   		$('#expand2').text('Meni');
   });
   
   $('#expand2').click(function() {
   		$('#sbb2').slideDown();
   		$('#sbb1').slideUp();
   });
   
    $('#sbb2').mouseleave(function() {
   		$('#sbb2').slideUp();
   });
   
   $('.dropdown').hover(function() {
                        // When the event is triggered, grab the current element 'this' and
                        // find it's children '.sub_navigation' and display/hide them
			$(this).find('.submenu').slideToggle(); 
		});
   
   $('#game_screen').attr("src","");
   
   $('#start_game').click(function() {
   		$('#game_screen').slideDown();
   		$('#game_screen').attr("src","AlienShooter/index.html");
   		
   		$('body, html').animate({
    		scrollTop: ($('#game_screen').offset().top)
		},500);
   });
});


