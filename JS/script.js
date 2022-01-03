// PAGE RELOAD TO TOP
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


// DID YOU KNOW THAT? OBSERVER
const didyouPage = document.querySelector('.one');
const didyouIntro = document.getElementById('introPara');
const didyouPara = document.getElementById('subIntroPara');

const threshold = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
}

const didYouKnowObserver = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            setTimeout(() => {
                didyouIntro.style.visibility = '';
                didyouIntro.style.animation = 'slide-in-bottom 1.5s ease-in-out';
                setTimeout(() => {
                    didyouPara.style.visibility = '';
                    didyouPara.style.animation = 'slide-in-right 1.5s ease-in-out';
                        }, 700);
            }, 500)
        } else {
            didyouIntro.style.animation = '';
            didyouIntro.style.visibility = 'hidden';
            didyouPara.style.animation = '';
            didyouPara.style.visibility = 'hidden';
        }
    })
}, threshold)
didYouKnowObserver.observe(didyouPage);

// PEOPLE OF A MULTITUDE OBSERVER
const peoplePage = document.querySelector('.three');
const peopleIntro = document.querySelector('.peopleIntro');
const peopleLeft = document.querySelector('.subPeopleIntroLeft');
const peopleRight = document.querySelector('.subPeopleIntroRight');

const threshold1 = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0
}

const thePeopleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            setTimeout(() => {
                peopleIntro.style.visibility = '';
                peopleIntro.style.animation = 'fade-in 1.5s ease-in';
                
                setTimeout(() => {
                    peopleLeft.style.visibility = '';
                    peopleLeft.style.animation = 'slide-in-left 2s ease-in-out';
                    peopleRight.style.visibility = '';
                    peopleRight.style.animation = 'slide-in-right 1.75s ease-in-out';
                }, 2000)
            }, 1000)
        } else {
            peopleIntro.style.visibility = 'hidden';
            peopleIntro.style.animation = '';
            peopleLeft.style.visibility = 'hidden';
            peopleLeft.style.animation = '';
            peopleRight.style.visibility = 'hidden';
            peopleRight.style.animation = '';
        }
    })
}, threshold1)
thePeopleObserver.observe(peoplePage);