/**
 * Pops up an alert style dialog to show the user.
 * @param {String} header - Sets the Header of the Popup
 * @param {String} message - Sets the Message of the Popup. Pass 'null' if you want to load a file
 * @param {String} file - Pass a full file path to content you want to display.
 						  'message' is overwritten if you pass content here.
 */
function popup(header, message, file)
{
	$('#card-popup-header-content').html(header);
	$('#card-popup-overlay').addClass('open');
	$('#card-popup').addClass('open');

	if (file != null && message == null)
	{
		// Ajax call to get the data from the file
		$.get(file, function(data){
			console.log('Successful $.get of ' + file);
			$('#card-popup-content').html(data);

		})
		.fail(function(data){
			popup('Failure', 'Cannot Load the content you are trying to display, Please try again later');
		});
	}
	else
	{
		$('#card-popup-content').html(message);
	}

	toggleOverflow();
}

/**
 * Click event handler for the overlay or the X button in the popup
 */
$('#card-popup-close-button, #card-popup-overlay').click(function()
{
	$('#card-popup-overlay').removeClass('open');
	$('#card-popup').removeClass('open');

	toggleOverflow();
})
