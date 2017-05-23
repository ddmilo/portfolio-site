window.onload = function(){
	console.log("JS Linked");
};


$('.collapse').collapse({
	toggle: false
});

$().ready(function(){
		 $('[rel="tooltip"]').tooltip();

 });

 function rotateCard(btn){
		 var $card = $(btn).closest('.card-container');
		 console.log($card);
		 if($card.hasClass('hover')){
				 $card.removeClass('hover');
		 } else {
				 $card.addClass('hover');
		 }
 }

 $("[rel='tooltip']").tooltip();

	 $('.thumbnail').hover(
			 function(){
					 $(this).find('.caption').slideDown(250); //.fadeIn(250)
			 },
			 function(){
					 $(this).find('.caption').slideUp(250); //.fadeOut(205)
			 }
	 );
