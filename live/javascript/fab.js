// Click Event Handler for the Fab
$('#fab').click(function()
{
    $('#fab').toggleClass('open');
    $('#fab-1').toggleClass('open');
    $('#fab-2').toggleClass('open');
    $('#fab-3').toggleClass('open');
    $('#lbl-1').toggleClass('open');
    $('#lbl-2').toggleClass('open');
    $('#lbl-3').toggleClass('open');
    $('#fab-overlay').toggleClass('open');

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

// Handler for FAB overlay
$('#fab-overlay').click(function()
{
    $('#fab').toggleClass('open');
    $('#fab-1').toggleClass('open');
    $('#fab-2').toggleClass('open');
    $('#fab-3').toggleClass('open');
    $('#lbl-1').toggleClass('open');
    $('#lbl-2').toggleClass('open');
    $('#lbl-3').toggleClass('open');
    $('#fab-overlay').toggleClass('open');

    // Toggle the body scrollability
    if ($('body').css('overflow') == 'hidden')
    {
        $('body').css('overflow', 'auto');
    }
});

// FAB-1 Click Event Handler
$('#fab-1').click(function()
{
    $('#contact-card').toggleClass('open');
});
