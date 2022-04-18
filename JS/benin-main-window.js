// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// PAGE RULER
window.onresize = ruler;
window.onload = ruler;

function ruler() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    document.getElementById('table-of-contents-input').innerHTML = `Page Width: ${myWidth}, Height: ${myHeight}`;
}