/**
 * Dynamic Click event handler for
 Profile page card popups. Set attribute 'data-popup' on your element with the class 'profile-card'
 */
$(document).on('click','.profile-card',function(){
	var file = $(this).attr('data-popup');
	popup('Family', null, 'live/html/cards/' + file);
});
