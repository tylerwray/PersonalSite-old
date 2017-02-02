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
});

// FAB-1 Click Event Handler
$('#fab-1').click(function(){
    $('#contact-card').toggleClass('open');
});
