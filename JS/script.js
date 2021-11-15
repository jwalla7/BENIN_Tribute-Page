const scrollOffset = 100;

const scrollElement = document.querySelector('.js-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) / dividend)
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el); 
         } else if (elementOutofView(el)) {
                hideScrollElement(el)
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})



// document.getElementById('currentTime').innerHTML = `Today is : ${daylist[day]}.`
// var today= new Date();
// var day= today.getDay();
// var daylist= [ ' Sunday', ' Monday', ' Tuesday', ' Wednesday',  ' Thursday', ' Friday', ' Saturday'];
// console.log(`Today is : ${daylist[day]}.`);
// var hour= today.getHours();
// var minute= today.getMinutes();
// var second= today.getSeconds();
// var timeConver= (hour >= 12)? ' PM ' : ' AM '; hour = (hour >= 12)? hour - 12: hour;