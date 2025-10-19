const atmosphereBtn = document.getElementById('atmosphereBtn');
const atmosphere = document.querySelector('.atmosphere');
const atmosphereElements = document.querySelectorAll('.atmosphere-element');

let isAtmosphereVisible = false;

atmosphere.classList.add('hidden');
atmosphereElements.forEach(el => el.classList.add('hidden'));

atmosphereBtn.addEventListener('click', () => {
    isAtmosphereVisible = !isAtmosphereVisible;

    if (isAtmosphereVisible) {
        atmosphere.classList.remove('hidden');
        atmosphereElements.forEach(el => el.classList.remove('hidden'));
        atmosphereBtn.classList.add('active');
    } else {
        atmosphere.classList.add('hidden');
        atmosphereElements.forEach(el => el.classList.add('hidden'));
        atmosphereBtn.classList.remove('active');
    }
});




const sun = document.querySelector('.sun');
const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
    arrow.style.opacity = '0';
    arrow.style.pointerEvents = 'none';
});

sun.addEventListener('mouseenter', () => {
    arrows.forEach(arrow => {
        arrow.classList.add('animating');
        arrow.style.opacity = '1';
        arrow.style.pointerEvents = 'auto';
    });
});

sun.addEventListener('mouseleave', () => {
    arrows.forEach(arrow => {
        arrow.classList.remove('animating');
        arrow.style.opacity = '0';
        arrow.style.pointerEvents = 'none';
    });
});
