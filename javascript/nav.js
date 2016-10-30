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

// Home Click Function
$('#home').click( function(){
    $('#main-content').load('/pages/home.html');
    $('#name').html('Home');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

// Skills Click Function
$('#skills').click( function(){
    $('#main-content').load('/pages/404.html');
    $('#name').html('Skills');
    goToTop();
});

// Contact Click Function
$('#contact').click( function(){
    $('#main-content').load('/pages/404.html');
    $('#name').html('Contact');
    goToTop();
});

// Settings Click Function
$('#settings').click( function(){
    $('#main-content').load('/pages/404.html');
    $('#name').html('Settings');
    goToTop();
});

// About Click Function
$('#about').click( function(){
    $('#main-content').load('/pages/about.html');
    $('#name').html('About');
    goToTop();
});
