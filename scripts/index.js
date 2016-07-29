$(document).ready(function() {
    $('#fab').click(function() {
        $('#fab').toggleClass('open');
        $('#fab').toggleClass('closed');
        $('#fab-1').toggleClass('open');
        $('#fab-1').toggleClass('closed');
        $('#fab-2').toggleClass('open');
        $('#fab-2').toggleClass('closed');
        $('#fab-3').toggleClass('open');
        $('#fab-3').toggleClass('closed');
        $('#lbl-1').toggleClass('open');
        $('#lbl-1').toggleClass('closed');
        $('#lbl-2').toggleClass('open');
        $('#lbl-2').toggleClass('closed');
        $('#lbl-3').toggleClass('open');
        $('#lbl-3').toggleClass('closed');
        $('#overlay-fab').toggleClass('closed');
        $('#overlay-fab').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'auto')
        {
            $('body').css('overflow', 'hidden');
        }
        else
        {
            $('body').css('overflow', 'auto');
        }


    });

    $('#menu-btn').click(function() {
        $('#side-nav').toggleClass('open');
        $('#side-nav').toggleClass('closed');
        $('#overlay').toggleClass('open');
        $('#overlay').toggleClass('closed');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'auto')
        {
            $('body').css('overflow', 'hidden');
        }
        else
        {
            $('body').css('overflow', 'auto');
        }
    });

    $('#overlay').click(function() {
        $('#side-nav').toggleClass('open');
        $('#side-nav').toggleClass('closed');
        $('#overlay').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
    });

    $('#overlay-fab').click(function() {
        $('#fab').toggleClass('open');
        $('#fab').toggleClass('closed');
        $('#fab-1').toggleClass('open');
        $('#fab-1').toggleClass('closed');
        $('#fab-2').toggleClass('open');
        $('#fab-2').toggleClass('closed');
        $('#fab-3').toggleClass('open');
        $('#fab-3').toggleClass('closed');
        $('#lbl-1').toggleClass('open');
        $('#lbl-1').toggleClass('closed');
        $('#lbl-2').toggleClass('open');
        $('#lbl-2').toggleClass('closed');
        $('#lbl-3').toggleClass('open');
        $('#lbl-3').toggleClass('closed');
        $('#overlay-fab').toggleClass('closed');
        $('#overlay-fab').toggleClass('open');

        // Toggle the body scrollability
        if ($('body').css('overflow') == 'hidden')
        {
            $('body').css('overflow', 'auto');
        }
    });
});
