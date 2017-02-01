// Hamburger Menu Click event Handler
$('#menu-btn').click(function(){
    $('#side-nav').toggleClass('open');
	toggleOverlay();
});

// Set Active state of Side Nav Items
$('.side-nav-item').click(function()
{
    $('.side-nav-item, .side-nav-item-lower').removeClass('active');
    $(this).toggleClass('active');
    $('#side-nav').toggleClass('open');
    resetPageVisibility();
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

//------- Nav Items Even Handlers -------

// Skills Click Function
$('#work-history').click( function(){
	setMainDivContent('work-history');
	setPageHeader('Work History');
    goToTopOfPage();
});

// Contact Click Function
$('#contact').click( function(){
	setMainDivContent('404');
	setPageHeader('Contact Information');
	goToTopOfPage();
});

// About Click Function
$('#about').click( function(){
    setMainDivContent('about');
	setPageHeader('About Me');
    goToTopOfPage();
});
