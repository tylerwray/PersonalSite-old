// Hamburger Menu Click event Handler
$('#menu-btn').click(function()
{
    $('#side-nav').toggleClass('open');
	$('.navbar').css('z-index', 100);
	$('#side-nav').css('z-index', 99);
	toggleOverlay();
	toggleOverflow();
});

// Set Active state of Side Nav Items
$('.side-nav-item').click(function()
{
    $('.side-nav-item').removeClass('active');
    $(this).toggleClass('active');
    $('#side-nav').toggleClass('open');
	setMainDivContent($(this).attr('data-file'));
	setPageHeader($(this).attr('data-header'));
	resetPageVisibility();
	goToTopOfPage();
});

// Closes overlay
$('#overlay').click(function()
{
	$('#side-nav').toggleClass('open');
	toggleOverflow();
	toggleOverlay();
});
