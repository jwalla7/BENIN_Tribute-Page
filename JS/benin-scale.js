const navHeaderScaleSet = document.getElementsByClassName('benin-legacy');

const navHeaderScaleObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        if (entry.contentBoxSize) {
            console.log('resizing now');
        }
    }
})
navHeaderScaleObserver.observe(navHeaderScaleSet);


// function resizeSection() {
//     navHeaderScaleSet.width = window.innerWidth;
//     navHeaderScaleSet.height = window.innerHeight;
// }

// function prepareDocument() {
//     document.body.style.padding = "0px";
//     document.body.style.margin = "0px";
// }

// function keepProportions() {
//     // let context = navHeaderScaleSet.getContext("2d");
//     let width = navHeaderScaleSet.width * 0.2;
//     let height = navHeaderScaleSet.height * 0.2;
//     let xPosition = (navHeaderScaleSet.width / 2) - width/2;
//     let yPosition = (navHeaderScaleSet.height / 2) - height/2;
// }
