// The Artifacts Slideshow

// Bottons
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

rightArrow.addEventListener('mousedown', () => {
    rightArrow.style.borderColor = 'white';
    nextArtifact();
});
rightArrow.addEventListener('mouseup', () => {
    rightArrow.style.borderColor = '';
})
leftArrow.addEventListener('mousedown', () => {
    leftArrow.style.borderColor = 'white';
    previousArtifact();
});
leftArrow.addEventListener('mouseup', () => {
    leftArrow.style.borderColor = '';
})

    // run
    let elementIndex = 0;
    let artifactsSlide;
    const artifactsSlideStart = () => {
        let div = document.getElementsByClassName('stolen-bronzes-artifacts-display-image');
        for (let i = 0; i < div.length; i++) {
            div[i].style.display = 'none';
            console.log(`divIndex: ${div[i]}`);
        }
        elementIndex++;
        console.log(elementIndex);
        if (elementIndex > div.length) {
            elementIndex = 1;
        }
        div[elementIndex - 1].style.display = 'block';
        artifactsSlide = setTimeout(artifactsSlideStart, 5000);
    };
    // stop
    const artifactsSlideEnd = () => {
        clearTimeout(artifactsSlide);
    };
    artifactsSlideStart();
    //  left button
    const previousArtifact = () => {
        elementIndex--;
        if (elementIndex < 0) { 
            elementIndex = div.length - 1;
        }
    };
    // right button
    const nextArtifact = () => {
        elementIndex++;
        if (elementIndex > div.length) {
            elementIndex = 1;
        }
    };