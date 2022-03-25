const navTableBtn = document.querySelector('.nav-return-to-table-of-contents-container');
const benin1897 = document.querySelector('.stolen-bronzes-interlude-right-container');
const artifactLeopard = document.querySelector('.benin-artifact-leopard-container');

const tableOfContents = document.querySelector('.nav-return-to-page-container');

function scrollToTableOfContents(event) {
    window.location.href = '#table-of-contents';
};

const viewPort1 = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
}
// Benin Bronzes 1897
const observeBenin1897 = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navTableBtn.style.transition = ' 500ms ease-in';
            navTableBtn.style.visibility = 'visible';
        } else {
            navTableBtn.style.transition = '';
            navTableBtn.style.visibility = 'hidden';
        }
    })
}, viewPort1);
observeBenin1897.observe(benin1897);

// Benin Bronzes Artifact Leopard
const observerLeopard = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // do something
            navTableBtn.style.transition = ' 500ms ease-in';
            navTableBtn.style.visibility = 'visible';
        } else {
            // do something
            navTableBtn.style.transition = '';
            navTableBtn.style.visibility = 'hidden';
        }
    })
}, viewPort1);
observerLeopard.observe(artifactLeopard);