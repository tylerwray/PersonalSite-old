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

function toggleOverlay() {
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
}

function writeContent(one) {
    document.write(one);
}

function goToTop()
{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function setURL(page)
{
    page = 'index';
    switch (page) {
        case 'index':
            window.location.href = 'localhost:8888/index.html';
            break;
        default:
            break;
    }
}
