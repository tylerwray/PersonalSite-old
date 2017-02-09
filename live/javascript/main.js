/**
 * Main Document Ready function sets up the page for the user
 */
$(document).ready(function()
{
	// read Page ID from Local Storage
	var activeMenuItem = '#' + getActiveMenuItem();

	// Variables for loading current page
	var fileName = $(activeMenuItem).attr('data-file');
	var headerName = $(activeMenuItem).attr('data-header');

	// Functions to set that Current Page data
	$('.side-nav-item').removeClass('active');
	$(activeMenuItem).toggleClass('active');
	setMainDivContent('live/html/' + fileName);
	setPageHeader(headerName);
});

/**
 * Sets the current active menu item everytime it is
 set so that it can be loaded when the user
 reloads the browser
 */
function setActiveMenuItem()
{
	try
	{
		localStorage.setItem('activeMenuItem',$('.side-nav-item.active').attr('id'));
	} catch (e) {
		return false;
	}
}

/**
 * Gets the Active menu item saved in localStorage
 * @return {String} Saved Active Menu Item
 */
function getActiveMenuItem()
{
	try
	{
		if (localStorage.getItem('activeMenuItem') == null)
			return 'nav-profile';
		else
			return localStorage.getItem('activeMenuItem');
	} catch (e) {
		return 'nav-profile';
	}
}

/**
 * Sets the display in the main div of the page
 * @param {String} htmlPage
 */
function setMainDivContent(htmlPage)
{
	$('#main').load(htmlPage);
}

/**
 * Sets the page header in the navbar
 * @param {String} newHeaderName
 */
function setPageHeader(newHeaderName)
{
	$('#name').html(newHeaderName);
}

/**
 * Resets the Page visibility after an
 appropriate event
 */
function resetPageVisibility()
{
    $('#fab').removeClass('open');
    $('#fab-1').removeClass('open');
    $('#fab-2').removeClass('open');
    $('#fab-3').removeClass('open');
    $('#lbl-1').removeClass('open');
    $('#lbl-2').removeClass('open');
    $('#lbl-3').removeClass('open');
	$('#overlay').removeClass('open');
	$('#fab-overlay').removeClass('open');
	// Toggle body scrollability
	toggleOverflow();
}

/**
 * Toggles the overflow of the body and html elements
 */
function toggleOverflow()
{
	$('body').css('overflow') == 'hidden' ? $('body').css('overflow', 'auto') : $('body').css('overflow', 'hidden');
	$('html').css('overflow') == 'hidden' ? $('html').css('overflow', 'auto') : $('html').css('overflow', 'hidden');
	$('#main').css('overflow') == 'hidden' ? $('#main').css('overflow', 'auto') : $('#main').css('overflow', 'hidden');
}

/**
 * Toggles the Dark overlay for popup and other UI events
 */
function toggleOverlay()
{
    $('#overlay').toggleClass('open');
}

/**
 * Sends the browser to the top of the page
 */
function goToTopOfPage()
{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
