$(document).ready(function() {
    // Click Event Handler for the Fab
    $('#fab').click(function() {
        $('#fab').toggleClass('open');
        $('#fab-1').toggleClass('open');
        $('#fab-2').toggleClass('open');
        $('#fab-3').toggleClass('open');
        $('#lbl-1').toggleClass('open');
        $('#lbl-2').toggleClass('open');
        $('#lbl-3').toggleClass('open');
        $('#overlay-fab').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
        else
        {
            $('body').css('overflow', 'hidden');
        }
    });

    $('#menu-btn').click(function() {
        $('#side-nav').toggleClass('open');
        toggleOverlay();
    });

    $('#overlay').click(function() {
        $('#side-nav').toggleClass('open');
        toggleOverlay();
    });

    $('#overlay-fab').click(function() {
        $('#fab').toggleClass('open');
        $('#fab-1').toggleClass('open');
        $('#fab-2').toggleClass('open');
        $('#fab-3').toggleClass('open');
        $('#lbl-1').toggleClass('open');
        $('#lbl-2').toggleClass('open');
        $('#lbl-3').toggleClass('open');
        $('#overlay-fab').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
    });

    $('.side-nav-item, .side-nav-item-lower').click(function() {
        $('.side-nav-item, .side-nav-item-lower').removeClass('active');
        $(this).toggleClass('active');
        $('#side-nav').toggleClass('open');
        closeAll();
    });

    $('.side-nav-header').click(function() {
        $('#side-nav').toggleClass('open');
        toggleOverlay();
    });

    $('#fab-1').click(function() {
        $('#contact-card').toggleClass('open');
    });
});
