$(document).ready(function(){
	// Load 'home.html' initially for the user in div id="main"
	setMainDivContent('about');
});

// param htmlPage: name of the .html file you wish
// to load into the 'main' container (subtract the extension: example not example.html)
function setMainDivContent(htmlPage)
{
	var fullFilePath = 'live/html/' + htmlPage + '.html';
	$('#main').load(fullFilePath);
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
	toggleOverlay();
}

function toggleOverflow() {
	$('body').css('overflow') == 'hidden' ? $('body').css('overflow', 'auto') : $('body').css('overflow', 'hidden');
}

function toggleOverlay() {
    $('#overlay').toggleClass('open');

    // Toggle the body scrollability
    toggleOverflow();
}

function goToTopOfPage()
{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
