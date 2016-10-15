// Hamburger Menu Click event Handler
$('#menu-btn').click(function()
{
    $('#side-nav').toggleClass('open');
    toggleOverlay();
});

// Set Active state of Side Nav Items
$('.side-nav-item, .side-nav-item-lower').click(function()
{
    $('.side-nav-item, .side-nav-item-lower').removeClass('active');
    $(this).toggleClass('active');
    $('#side-nav').toggleClass('open');
    closeAll();
});

// Closes Side Nav Bar
$('.side-nav-header').click(function()
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

// About Click Function
$('#about').click( function(){
    $('#main-content').load('about.html');
});
