
// INTRODUCTION PAGE
const originsIntroContainer = document.querySelector('.benin-origin-introduction-container');
const legendText = document.querySelector('.benin-origin-introduction-text-container-left');
const versionsText = document.querySelector('.benin-origin-introduction-text-container-right');

const viewPortLegend = {
    rootMargin: '0% 0% -50% 0%',
    threshold: 0
}

const legendObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            legendText.style.visibility = 'visible';
            legendText.style.transition = 'visibility 2s ease-in';
            legendText.style.animation = 'fade-in 2s ease-in';
            
            setTimeout(() => {
                versionsText.style.visibility = 'visible';
                versionsText.style.animation = 'fade-in 1s ease-in';
            }, 3000)
        } else {
            legendText.style.visibility = '';
            legendText.style.animation = '';
            versionsText.style.visibility = '';
            versionsText.style.animation = '';
        }
    })
}, viewPortLegend)
legendObserver.observe(originsIntroContainer);

