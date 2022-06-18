// TILT STATUES
const beninWarriorImage = document.querySelector('.benin-legacy-man');
const beninWomanImage = document.querySelector('.benin-legacy-woman');

// --> Tilt Settings
const tiltSettings = {
    max: 5,
    perspective: 900,
    scale: 1
};
// --> Transition Settings
const setTransition = () => {
    beninWarriorImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    beninWomanImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    setTimeout(() => {
        beninWarriorImage.style.transition = '';
        beninWomanImage.style.transition = '';
    }, 500)
};
// --> Mouse Enter
function mouseEnter() {
    console.log(`Entered`);
    setTransition()
}
// --> Mouse Reaction
function mouseReaction(event) {    
    const m_imageWidth = beninWarriorImage.offsetWidth; 
    const m_imageHeight = beninWarriorImage.offsetHeight;
    const m_centerX = beninWarriorImage.offsetLeft + m_imageWidth / 2;
    const m_centerY = beninWarriorImage.offsetTop + m_imageHeight / 2;

    const w_imageWidth = beninWomanImage.offsetWidth; 
    const w_imageHeight = beninWomanImage.offsetHeight;
    const w_centerX = beninWomanImage.offsetLeft + w_imageWidth / 2;
    const w_centerY = beninWomanImage.offsetTop + w_imageHeight / 2;

    const man_mouseX = event.clientX - m_centerX;
    const woman_mouseX = event.clientX - w_centerX;
    const man_mouseY = event.clientY - m_centerY;
    const woman_mouseY = event.clientY - w_centerY;
    
    const man_rotateXUncapped = ((+1) * tiltSettings.max * man_mouseY / (m_imageHeight / 2)).toFixed(2);
    const woman_rotateXUncapped = ((+1) * tiltSettings.max * woman_mouseY / (w_imageHeight / 2)).toFixed(2);
    const man_rotateYUncapped = ((-1) * tiltSettings.max * man_mouseX / (m_imageHeight / 2)).toFixed(2);
    const woman_rotateYUncapped = ((-1) * tiltSettings.max * woman_mouseX / (w_imageHeight / 2)).toFixed(2);

    const man_rotateX = man_rotateXUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (man_rotateXUncapped > tiltSettings.max ? tiltSettings.max : man_rotateXUncapped);
    const woman_rotateX = woman_rotateXUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (woman_rotateXUncapped > tiltSettings.max ? tiltSettings.max : woman_rotateXUncapped);
    const man_rotateY = man_rotateYUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (man_rotateYUncapped > tiltSettings.max ? tiltSettings.max : man_rotateYUncapped);
    const woman_rotateY = woman_rotateYUncapped < -tiltSettings.max ? -tiltSettings.max :
                        (woman_rotateYUncapped > tiltSettings.max ? tiltSettings.max : woman_rotateYUncapped);

    beninWarriorImage.style.transform = `perspective(${tiltSettings.perspective}px)
                                    rotateX(${man_rotateX}deg) 
                                    rotateY(${man_rotateY}deg) 
                                    scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
    beninWomanImage.style.transform = `perspective(${tiltSettings.perspective}px)
                                    rotateX(${woman_rotateX}deg) 
                                    rotateY(${woman_rotateY}deg)
                                    scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
}

function mouseLeave() {
    console.log(`just left`);
    beninWarriorImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    beninWomanImage.style.transition = `transform 1000ms cubic-bezier(.03, .98, .52, .99)`;
    beninWarriorImage.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1,1,1)`;
    beninWomanImage.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${0}deg) rotateY(${0}deg) scale3d(1,1,1)`;

}

beninWarriorImage.addEventListener('mousemove', mouseEnter);
beninWomanImage.addEventListener('mousemove', mouseEnter);
beninWarriorImage.addEventListener('mousemove', mouseReaction);
beninWomanImage.addEventListener('mousemove', mouseReaction);
beninWarriorImage.addEventListener('mouseleave', mouseLeave);
beninWomanImage.addEventListener('mouseleave', mouseLeave);

