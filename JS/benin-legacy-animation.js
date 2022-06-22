// TILT STATUES
const beninWarriorImage = document.querySelector('.benin-legacy-man');
const beninWomanImage = document.querySelector('.benin-legacy-woman');

// --> Statue Class
class StatueImage {
    constructor(target) {
        this.target = target;
        this.imageWidth = target.offsetWidth;
        this.imageHeight = target.offsetHeight;
        this.centerX = target.offsetLeft + this.imageWidth / 2;
        this.centerY = target.offsetTop + this.imageHeight / 2;
    }
};
// --> Tilt Settings
const tiltSettings = {
    max: 5,
    perspective: 900,
    scale: 1
};
// --> Transition Settings
const setTransition = (target) => {
    target.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
        target.style.transition = '';
    }, 500)
};
// --> Mouse Enter
function mouseEnter() {
    console.log(`Target entered`);
    setTransition()
};
// --> Mouse Reaction
function mouseReaction(event) {
    const m = new StatueImage(beninWarriorImage);  
    const w = new StatueImage(beninWomanImage);

    const m_mouseX = event.clientX - m.centerX;
    const m_mouseY = event.clientY - m.centerY;

    const m_rotateXUncapped = ((+1) * tiltSettings.max * m_mouseY / (m.imageHeight / 2)).toFixed(2);
    const m_rotateYUncapped = ((-1) * tiltSettings.max * m_mouseX / (m.imageHeight / 2)).toFixed(2);

    const m_rotateX = m_rotateXUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (m_rotateXUncapped > tiltSettings.max ? tiltSettings.max : m_rotateXUncapped);
    const m_rotateY = m_rotateYUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (m_rotateYUncapped > tiltSettings.max ? tiltSettings.max : m_rotateYUncapped);

    m.target.style.transform = `perspective(${tiltSettings.perspective}px)
                                    rotateX(${m_rotateX}deg)
                                    rotateY(${m_rotateY}deg)
                                    scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
    w.target.style.transform = m.target.style.transform;
};
// --> Mouse Leave
function mouseLeave(target) {
    console.log(`Target exited`);
    target.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    target.style.transform = `perspective(${tiltSettings.perspective}px) 
                                rotateX(${0}deg)
                                rotateY(${0}deg)
                                scale3d(1,1,1)`;
};
// --> Event Listeners
beninWarriorImage.addEventListener('mousemove', mouseEnter);
beninWomanImage.addEventListener('mousemove', mouseEnter);
beninWarriorImage.addEventListener('mousemove', mouseReaction);
beninWomanImage.addEventListener('mousemove', mouseReaction);
beninWarriorImage.addEventListener('mouseleave', mouseLeave);
beninWomanImage.addEventListener('mouseleave', mouseLeave);