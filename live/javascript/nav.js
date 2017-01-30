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
    /*$('#main-content').html('<div class="container">'+
        '<div class="row jobRight">'+
            '<div id="job1" class="col-xs-6 pull-left jobCircle text-center">'+
                '<div class="jobDescription"><span class="jobTitle">QA Specialist<br />/Junior Developer</span><br /> - XOLogic Corp.</div>'+
                '<img id="xologic" class="jobPhoto" src="assets/images/xo.png" />'+
            '</div>'+
            '<div class="col-xs-6 jobSummary pull-right">'+
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.'+
    'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.'+
            '</div>'+
        '</div>'+
    '</div>');*/
    $('#main-content').load('pages/home.html');
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
