const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
 duration: 13000,
 triggerElement: intro,
 triggerHook: 0
})
 .setPin(intro)
 .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 0, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 0,
    triggerElement: 0,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//Video Animation (Replace this section with the following)
let accelamount = 1; // Keep your original acceleration
let scrollpos = 0;
let delay = 0;

const isIOS = /iPad|iPhone|iPod/.test(navigator.platform); 

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

function updateVideoTime() {
    delay += (scrollpos - delay) * accelamount;
    delay = parseFloat(delay.toFixed(2));

    if (isIOS && delay > 0.1) { // iOS optimization tweak
        video.currentTime = delay;
    } else {
        video.currentTime = delay;
    }

    requestAnimationFrame(updateVideoTime); 
}
updateVideoTime(); 
