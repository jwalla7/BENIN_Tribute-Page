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