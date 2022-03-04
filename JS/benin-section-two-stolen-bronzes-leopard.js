// TILT LEOPARD
const leopardImage = document.querySelector('.benin-artifact-leopard-image');

// --> Tilt Settings
const tiltSettingsLeo = {
    max: 20,
    perspective: 800,
    scale: 1.05
};
// --> Transition Settings
const setTransitionLeo = () => {
    leopardImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
        leopardImage.style.transition = '';
    }, 500)
};
// ---> Mouse Enter
function mouseEnterLeo() {
    setTransitionLeo();
}
// ----> Mouse Reaction
function mouseReactLeo(event) {
    const imageWidth = leopardImage.offsetWidth;
    const imageHeight = leopardImage.offsetHeight;
    const centerX = leopardImage.offsetLeft + imageWidth / 2;
    const centerY = leopardImage.offsetTop + imageHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = ((+1) * tiltSettingsLeo.max * mouseY / (imageHeight / 2)).toFixed(2);
    const rotateYUncapped = ((-1) * tiltSettingsLeo.max * mouseX / (imageHeight / 2)).toFixed(2);
    const rotateX = rotateXUncapped < -tiltSettingsLeo.max ? -tiltSettingsLeo.max :
                    (rotateXUncapped > tiltSettingsLeo.max ? tiltSettingsLeo.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltSettingsLeo.max ? -tiltSettingsLeo.max :
                    (rotateYUncapped > tiltSettingsLeo.max ? tiltSettingsLeo.max : rotateYUncapped);

    leopardImage.style.transform = `perspective(${tiltSettingsLeo.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltSettingsLeo.scale}, ${tiltSettingsLeo.scale}, ${tiltSettingsLeo.scale})`;
}
// -----> Mouse Leave
function mouseLeaveLeo() {
    leopardImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    leopardImage.style.transform = `perspective(${tiltSettingsLeo.perspective}px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1, 1, 1)`;
}

// ------> Event Listeners
leopardImage.addEventListener('mousemove', mouseEnterLeo);
leopardImage.addEventListener('mousemove', mouseReactLeo);
leopardImage.addEventListener('mouseleave', mouseLeaveLeo);