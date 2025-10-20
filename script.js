const atmosphereBtn = document.getElementById('atmosphereBtn');
const atmosphere = document.querySelector('.atmosphere');
const atmosphereElements = document.querySelectorAll('.atmosphere-element');
const clouds = document.querySelectorAll('.cloud');
const rcloud = document.querySelector('.rain-cloud');

const defaultText = document.querySelectorAll('.a');
const atmoText = document.querySelectorAll('.atmo');
const sunEText = document.querySelectorAll('.sunE');
const wthrClimText = document.querySelectorAll('.wthrClim');

let isAtmosphereVisible = false;

atmosphere.classList.add('fade-hidden');
atmosphereElements.forEach(el => el.classList.add('fade-hidden'));

atmoText.forEach(el => el.classList.add('hidden'));
sunEText.forEach(el => el.classList.add('hidden'));
wthrClimText.forEach(el => el.classList.add('hidden'));

clouds.forEach((cloud) => {
    const originalLeft = cloud.style.getPropertyValue('--cloud-left');
    cloud.dataset.originalLeft = originalLeft;
    cloud.style.animation = 'none';
    cloud.style.opacity = '1';
});

function hideAllText() {
    defaultText.forEach(el => el.classList.add('hidden'));
    atmoText.forEach(el => el.classList.add('hidden'));
    sunEText.forEach(el => el.classList.add('hidden'));
    wthrClimText.forEach(el => el.classList.add('hidden'));
}

function showDefaultText() {
    if (!isAtmosphereVisible && !isWeatherSystemVisible && !isSunEnergyVisible) {
        defaultText.forEach(el => el.classList.remove('hidden'));
    }
}

atmosphereBtn.addEventListener('click', () => {
    isAtmosphereVisible = !isAtmosphereVisible;

    if (isAtmosphereVisible) {
        atmosphere.classList.remove('fade-hidden');
        atmosphereElements.forEach(el => el.classList.remove('fade-hidden'));
        clouds.forEach(el => el.classList.add('fade-hidden'));
        rcloud.classList.add('fade-hidden');
        atmosphereBtn.classList.add('active');

        hideAllText();
        atmoText.forEach(el => el.classList.remove('hidden'));

        wthrSystBtn.disabled = true;
        sunEngyBtn.disabled = true;
    } else {
        atmosphere.classList.add('fade-hidden');
        atmosphereElements.forEach(el => el.classList.add('fade-hidden'));
        clouds.forEach(el => el.classList.remove('fade-hidden'));
        if (!isWeatherSystemVisible) {
            rcloud.classList.add('fade-hidden');
        }
        atmosphereBtn.classList.remove('active');

        hideAllText();
        showDefaultText();

        wthrSystBtn.disabled = false;
        sunEngyBtn.disabled = false;
    }
});

const cloud = document.querySelector('.rain-cloud');
const rain = document.querySelector('.rain-body');
const wthrSystBtn = document.getElementById('wthrSystBtn');

let isWeatherSystemVisible = false;

cloud.classList.add('fade-hidden');
rain.classList.add('hidden');

wthrSystBtn.addEventListener('click', () => {
    isWeatherSystemVisible = !isWeatherSystemVisible;

    if (isWeatherSystemVisible) {
        clouds.forEach(cloud => {
            cloud.style.transition = 'opacity 0.5s ease';
            cloud.style.opacity = '0';
        });

        setTimeout(() => {
            clouds.forEach((cloud) => {
                cloud.style.setProperty('--cloud-left', '100%');

                cloud.style.animation = '';
                cloud.style.opacity = '1';
            });
        }, 500);

        cloud.classList.remove('fade-hidden');
        rain.classList.remove('hidden');
        wthrSystBtn.classList.add('active');

        hideAllText();
        wthrClimText.forEach(el => el.classList.remove('hidden'));

        atmosphereBtn.disabled = true;
        sunEngyBtn.disabled = true;
    } else {
        clouds.forEach(cloud => {
            cloud.style.transition = 'opacity 0.5s ease';
            cloud.style.opacity = '0';
        });

        cloud.classList.add('fade-hidden');
        rain.classList.add('hidden');

        setTimeout(() => {
            clouds.forEach((cloud) => {
                cloud.style.animation = 'none';

                const originalLeft = cloud.dataset.originalLeft;
                if (originalLeft) {
                    cloud.style.setProperty('--cloud-left', originalLeft);
                }

                cloud.style.opacity = '1';
            });
        }, 500);

        wthrSystBtn.classList.remove('active');

        hideAllText();
        showDefaultText();

        atmosphereBtn.disabled = false;
        sunEngyBtn.disabled = false;
    }
});

const sun = document.querySelector('.sun');
const arrows = document.querySelectorAll('.arrow');
const p1 = document.querySelector('.saClouds');
const p2 = document.querySelector('.srClouds');
const p3 = document.querySelector('.lsa');
const p4 = document.querySelector('.evaporation')
const p5 = document.querySelector('.condensation')
const sunEngyBtn = document.getElementById('sunEngyBtn');

let isSunEnergyVisible = false;

arrows.forEach(arrow => {
    arrow.style.opacity = '0';
    arrow.style.pointerEvents = 'none';
});

sunEngyBtn.addEventListener('click', () => {
    isSunEnergyVisible = !isSunEnergyVisible;

    if (isSunEnergyVisible) {
        arrows.forEach(arrow => {
            arrow.classList.add('animating');
            arrow.style.opacity = '1';
            arrow.style.pointerEvents = 'auto';
        });
        p1.style.opacity = '1';
        p2.style.opacity = '1';
        p3.style.opacity = '1';
        p4.style.opacity = '1';
        p5.style.opacity = '1';
        sunEngyBtn.classList.add('active');

        cloud.classList.remove('fade-hidden');
        cloud.style.animation = 'none';
        cloud.style.opacity = '1';
        rain.classList.add('hidden');

        hideAllText();
        sunEText.forEach(el => el.classList.remove('hidden'));

        atmosphereBtn.disabled = true;
        wthrSystBtn.disabled = true;
    } else {
        arrows.forEach(arrow => {
            arrow.classList.remove('animating');
            arrow.style.opacity = '0';
            arrow.style.pointerEvents = 'none';
        });
        p1.style.opacity = '0';
        p2.style.opacity = '0';
        p3.style.opacity = '0';
        p4.style.opacity = '0';
        p5.style.opacity = '0';
        sunEngyBtn.classList.remove('active');

        cloud.classList.add('fade-hidden');
        cloud.style.animation = '';

        hideAllText();
        showDefaultText();

        atmosphereBtn.disabled = false;
        wthrSystBtn.disabled = false;
    }
});
