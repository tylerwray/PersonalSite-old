function popupCard(header, message)
{
	$('#card-popup-header').html(header);
	$('#card-popup-content').html(message);
	$('#card-popup-overlay').addClass('open');
	toggleOverflow();
}

$('#card-popup-close-button, #card-popup-overlay').click(function()
{
	$('#card-popup-overlay').removeClass('open');
	toggleOverflow();
})
