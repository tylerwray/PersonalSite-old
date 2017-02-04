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
	setMainDivContent(fileName);
	setPageHeader(headerName);
});

function setActiveMenuItem()
{
	localStorage.setItem('activeMenuItem',$('.side-nav-item.active').attr('id'));
}

function getActiveMenuItem()
{
	if (localStorage.getItem('activeMenuItem') == null)
		return 'nav-profile';
	else
		return localStorage.getItem('activeMenuItem');
}
// param htmlPage: name of the .html file you wish
// to load into the 'main' container (subtract the extension: example not example.html)
function setMainDivContent(htmlPage)
{
	$('#main').load('live/html/' + htmlPage);
}

function setPageHeader(newHeaderName)
{
	$('#name').html(newHeaderName);
}

// Closes all menu items,
function resetPageVisibility() {
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

function toggleOverflow() {
	$('body').css('overflow') == 'hidden' ? $('body').css('overflow', 'auto') : $('body').css('overflow', 'hidden');
}

function toggleOverlay() {
    $('#overlay').toggleClass('open');
}

function goToTopOfPage()
{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
