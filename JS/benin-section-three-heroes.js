
// TILT GENERAL OBASOGIE IMAGE 
const imageOba = document.querySelector('.benin-general-obasogie-image');

// --> Tilt Settings
const tiltSettings = {
    max: 5,
    perspective: 1000,
    scale: 1.3
};
// --> Transition Settings
const setTransition = () => {
    imageOba.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
        imageOba.style.transition = '';
    }, 500)
};
// ---> Mouse Enter
function mouseEnter() {
    setTransition();
}
// ----> Mouse Reaction
function mouseReact(event) {
    const imageWidth = imageOba.offsetWidth;
    const imageHeight = imageOba.offsetHeight;
    const centerX = imageOba.offsetLeft + imageWidth / 2;
    const centerY = imageOba.offsetTop + imageHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = ((+1) * tiltSettings.max * mouseY / (imageHeight / 2)).toFixed(2);
    const rotateYUncapped = ((-1) * tiltSettings.max * mouseX / (imageHeight / 2)).toFixed(2);
    const rotateX = rotateXUncapped < -tiltSettings.max ? -tiltSettings.max :
                    (rotateXUncapped > tiltSettings.max ? tiltSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltSettings.max ? -tiltSettings.max :
                    (rotateYUncapped > tiltSettings.max ? tiltSettings.max : rotateYUncapped);

    imageOba.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
}
// -----> Mouse Leave
function mouseLeave() {
    imageOba.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    imageOba.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1, 1, 1)`;
}

// ------> Event Listeners
imageOba.addEventListener('mousemove', mouseEnter);
imageOba.addEventListener('mousemove', mouseReact);
imageOba.addEventListener('mouseleave', mouseLeave);