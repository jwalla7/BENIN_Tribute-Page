const navTableBtn = document.querySelector('.nav-return-to-table-of-contents-container');
const benin1897 = document.querySelector('.stolen-bronzes-interlude-right-container');
const tableOfContents = document.querySelector('.nav-return-to-page-container');

function scrollToTableOfContents(event) {
    location.href = '#table-of-contents';
    preventDefault();

};

const viewPort1 = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
}
const observeBenin1897 = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // do something
            navTableBtn.style.transition = ' 500ms ease-in';
            navTableBtn.style.visibility = 'visible';
        } else {
            // do something
            navTableBtn.style.transition = '';
            navTableBtn.style.visibility = ''
        }
    })
}, viewPort1);
observeBenin1897.observe(benin1897);