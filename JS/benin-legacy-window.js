// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
window.onresize = function() {
    // console.log('resizing');
    // resizeSection();
    // keepProportions();
    ruler()
}
window.onload = function() {
    // console.log('reloading');
    // prepareDocument();
    // resizeSection();
    // keepProportions();
    ruler();
}

// PAGE RULER
function ruler() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    document.getElementById('table-of-contents-input').innerHTML = `Page Width: ${myWidth}, Height: ${myHeight}`;
}