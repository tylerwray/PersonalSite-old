// Click Event Handler for the Fab
$('#fab, #fab-overlay').click(function()
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
    toggleOverflow();
});

// FAB-1 Click Event Handler
$('#fab-1').click(function(){
    $('#contact-card').toggleClass('open');
});
