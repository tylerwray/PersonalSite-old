// Hamburger Menu Click event Handler
$('#menu-btn').click(function(){
    $('#side-nav').toggleClass('open');
	toggleOverlay();
});

// Set Active state of Side Nav Items
$('.side-nav-item').click(function()
{
    $('.side-nav-item').removeClass('active');
    $(this).toggleClass('active');
    $('#side-nav').toggleClass('open');
	setMainDivContent($(this).attr('data-file'));
	setPageHeader($(this).attr('data-header'));
	goToTopOfPage();
	toggleOverlay();
});

// Closes Side Nav Bar
$('#side-nav-header').click(function()
{
	$('#side-nav').toggleClass('open');
	toggleOverlay();
});

// Closes overlay
$('#overlay').click(function()
{
	$('#side-nav').toggleClass('open');
	toggleOverlay();
});
