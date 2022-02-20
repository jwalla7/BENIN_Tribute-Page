// STOLEN BRONZES - PLAQUES
// Reveal Text
const plaquesContainer = document.querySelector('.stolen-bronzes-plaques-text-container');
const plaqueTextReveal1 = document.getElementById('text-reveal-1');
const plaqueTextReveal2 = document.getElementById('text-reveal-2');
const plaqueTextReveal3 = document.getElementById('text-reveal-3');
const plaqueTextReveal4 = document.getElementById('text-reveal-4');
const plaqueTextReveal5 = document.getElementById('text-reveal-5');
const plaqueTextReveal6 = document.getElementById('text-reveal-6');
const plaqueTextReveal7 = document.getElementById('text-reveal-7');
const plaqueTextReveal8 = document.getElementById('text-reveal-8');
const plaqueTextReveal9 = document.getElementById('text-reveal-9');

const viewPoint1 = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
};
const viewPoint2 = {
    rootMargin: '0% 0% -90% 0%',
    threshold: 0
};
const viewPoint3 = {
    rootMargin: '0% 0% -91% 0%',
    threshold: 0
};
const viewPoint4 = {
    rootMargin: '0% 0% -92% 0%',
    threshold: 0
};
const viewPoint5 = {
    rootMargin: '0% 0% -93% 0%',
    threshold: 0
};
const viewPoint6 = {
    rootMargin: '0% 0% -94% 0%',
    threshold: 0
};
const viewPoint7 = {
    rootMargin: '0% 0% -95% 0%',
    threshold: 0
};
const viewPoint8 = {
    rootMargin: '0% 0% -96% 0%',
    threshold: 0
};
const viewPoint9 = {
    rootMargin: '0% 0% -97% 0%',
    threshold: 0
};

// Reveal Sentence 1
const plaqueView1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal1.style.visibility = 'visible';
            plaqueTextReveal1.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal1.style.visibility = '';
            plaqueTextReveal1.style.animation = '';
        }
    });
}, viewPoint1);
plaqueView1.observe(plaquesContainer);
// Reveal Sentence 2
const plaqueView2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal2.style.visibility = 'visible';
            plaqueTextReveal2.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal2.style.visibility = '';
            plaqueTextReveal2.style.animation = '';
        }
    });
}, viewPoint2);
plaqueView2.observe(plaquesContainer);
// Reveal Sentence 3
const plaqueView3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal3.style.visibility = 'visible';
            plaqueTextReveal3.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal3.style.visibility = '';
            plaqueTextReveal3.style.animation = '';
        }
    });
}, viewPoint3);
plaqueView3.observe(plaquesContainer);
// Reveal Sentence 4
const plaqueView4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal4.style.visibility = 'visible';
            plaqueTextReveal4.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal4.style.visibility = '';
            plaqueTextReveal4.style.animation = '';
        }
    });
}, viewPoint4);
plaqueView4.observe(plaquesContainer);
// Reveal Sentence 5
const plaqueView5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal5.style.visibility = 'visible';
            plaqueTextReveal5.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal5.style.visibility = '';
            plaqueTextReveal5.style.animation = '';
        }
    });
}, viewPoint5);
plaqueView5.observe(plaquesContainer);
// Reveal Sentence 6
const plaqueView6 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal6.style.visibility = 'visible';
            plaqueTextReveal6.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal6.style.visibility = '';
            plaqueTextReveal6.style.animation = '';
        }
    });
}, viewPoint6);
plaqueView6.observe(plaquesContainer);
// Reveal Sentence 7
const plaqueView7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal7.style.visibility = 'visible';
            plaqueTextReveal7.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal7.style.visibility = '';
            plaqueTextReveal7.style.animation = '';
        }
    });
}, viewPoint7);
plaqueView7.observe(plaquesContainer);
// Reveal Sentence 8
const plaqueView8 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal8.style.visibility = 'visible';
            plaqueTextReveal8.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal8.style.visibility = '';
            plaqueTextReveal8.style.animation = '';
        }
    });
}, viewPoint8);
plaqueView8.observe(plaquesContainer);
// Reveal Sentence 9
const plaqueView9 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            plaqueTextReveal9.style.visibility = 'visible';
            plaqueTextReveal9.style.animation = 'fade-in 1s ease-in';
        } else {
            plaqueTextReveal9.style.visibility = '';
            plaqueTextReveal9.style.animation = '';
        }
    });
}, viewPoint9);
plaqueView9.observe(plaquesContainer);