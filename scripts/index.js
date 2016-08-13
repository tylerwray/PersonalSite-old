function closeAll() {
    $('#fab').removeClass('open');
    $('#fab-1').removeClass('open');
    $('#fab-2').removeClass('open');
    $('#fab-3').removeClass('open');
    $('#lbl-1').removeClass('open');
    $('#lbl-2').removeClass('open');
    $('#lbl-3').removeClass('open');
    $('#overlay').removeClass('open');
    $('#overlay-fab').removeClass('open');

    if ($('body').css('overflow') == 'hidden')
    {
        $('body').css('overflow', 'auto');
    }
}

function writeContent(one) {
    document.write(one);
}

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
        $('#overlay').toggleClass('open');

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

    $('#overlay').click(function() {
        $('#side-nav').toggleClass('open');
        $('#overlay').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
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
        $('#overlay').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
    });
});
