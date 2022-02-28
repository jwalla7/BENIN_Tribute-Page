// The Artifacts Slideshow
// run
let elementIndex = 0;
let artifactsSlide;
const div = document.getElementsByClassName('stolen-bronzes-artifacts-display-image');

const reset = () => {
    for (let i = 0; i < div.length; i++) {
        div[i].style.display = 'none';
    }
}

const artifactsSlideStart = () => {
    reset();
    for (let i = 0; i < div.length; i++) {
        div[i].style.display = 'none';
        console.log(`divIndex: ${div[i]}`);
    }
    elementIndex++;
    console.log(elementIndex);
    if (elementIndex > div.length) {
        elementIndex = 0;
    }
    div[elementIndex - 1].style.display = 'block';
    artifactsSlide = setTimeout(artifactsSlideStart, 6000);
};
// stop
const artifactsSlideEnd = () => {
    clearTimeout(artifactsSlide);
};
// artifactsSlideStart();
//  left button
const previousArtifact = () => {
    reset();
    if (elementIndex < 0) { 
        elementIndex = div.length - 1;
    }
    div[elementIndex].style.display = 'block';
    elementIndex--;
};
// right button
const nextArtifact = () => {
    reset();
    if (elementIndex > div.length - 1) {
        elementIndex = 0;
    }
    div[elementIndex].style.display = 'block';
    elementIndex++;
};
// Slideshow Arrows
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');
rightArrow.addEventListener('mousedown', () => {
    nextArtifact();
    rightArrow.style.borderColor = 'white';
});
rightArrow.addEventListener('mouseup', () => {
    rightArrow.style.borderColor = '';
});
leftArrow.addEventListener('mousedown', () => {
    previousArtifact();
    leftArrow.style.borderColor = 'white';
});
leftArrow.addEventListener('mouseup', () => {
    leftArrow.style.borderColor = '';
});