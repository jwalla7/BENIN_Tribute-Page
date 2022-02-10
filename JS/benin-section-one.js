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