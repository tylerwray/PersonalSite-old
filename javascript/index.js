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
