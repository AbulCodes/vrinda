 // ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1800);

});

// ==========================================
// INTRO FLOW
// ==========================================

const PASSWORD = "Foreverus";

const welcomeScreen =
document.getElementById("welcomeScreen");

const passwordScreen =
document.getElementById("passwordScreen");

const openingScreen =
document.getElementById("openingScreen");

const website =
document.getElementById("websiteContent");

const continueBtn =
document.getElementById("continueBtn");

const unlockBtn =
document.getElementById("unlockBtn");

const passwordInput =
document.getElementById("passwordInput");

const wrongPassword =
document.getElementById("wrongPassword");

continueBtn.addEventListener("click",()=>{

    welcomeScreen.style.display="none";

    passwordScreen.style.display="flex";

});

unlockBtn.addEventListener("click",()=>{

    if(passwordInput.value===PASSWORD){

        passwordScreen.style.display="none";

        openingScreen.style.display="flex";

        setTimeout(()=>{

            openingScreen.style.display="none";

            website.style.display="block";

        },1800);

    }

    else{

        wrongPassword.innerHTML="Wrong Password ❤️";

    }

});

passwordInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});

// ==========================================
// HERO BUTTON
// ==========================================

const floatingCounter =
document.getElementById("floatingCounter");

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    floatingCounter.classList.add("show");

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

});
// ==========================================
// DAY COUNTER
// Proposal Date: 22 June 2026
// ==========================================

const proposalDate = new Date("2026-06-22T00:00:00");

function updateCounter(){

    const today = new Date();

    const difference =
        today - proposalDate;

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    document
        .getElementById("dayCounter")
        .innerHTML = days + " Days";

}

updateCounter();

// ==========================================
// LETTER POPUP
// ==========================================

const letterPopup =
document.getElementById("letterPopup");

document
.getElementById("openLetter")
.addEventListener("click",()=>{

    letterPopup.classList.add("show");

});

document
.getElementById("closeLetter")
.addEventListener("click",()=>{

    letterPopup.classList.remove("show");

});

// Close when tapping outside

letterPopup.addEventListener("click",(e)=>{

    if(e.target===letterPopup){

        letterPopup.classList.remove("show");

    }

});

// ==========================================
// SURPRISE POPUP
// ==========================================

const popup =
document.getElementById("popup");

document
.getElementById("surpriseBtn")
.addEventListener("click",()=>{

    popup.classList.add("show");

});

document
.getElementById("closePopup")
.addEventListener("click",()=>{

    popup.classList.remove("show");

});

// Close when tapping outside

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

});

// ==========================================
// MUSIC PLAYER
// ==========================================

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!music.querySelector("source")){

        alert("Add your song first ❤️");

        return;

    }

    if(!playing){

        music.play();

        musicBtn.innerHTML =
        "⏸ Pause";

        playing = true;

    }

    else{

        music.pause();

        musicBtn.innerHTML =
        "▶ Play Our Song";

        playing = false;

    }

});
// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (16 + Math.random()*18) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1800);


// ==========================================
// SHOOTING STAR
// ==========================================

function shootingStar(){

    const star =
    document.createElement("div");

    star.className = "shooting-star";

    star.style.left =
    Math.random()*80 + "vw";

    star.style.top =
    Math.random()*35 + "vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

setInterval(shootingStar,7000);


// ==========================================
// SCROLL ANIMATION
// ==========================================

const cards =
document.querySelectorAll(".glass-card");

cards.forEach(card=>{

    card.classList.add("fade");

});

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

cards.forEach(card=>{

observer.observe(card);

});


// ==========================================
// RIPPLE EFFECT
// ==========================================

document
.querySelectorAll("button")
.forEach(button=>{

button.addEventListener("click",function(e){

const ripple =
document.createElement("span");

const size =
Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width =
size+"px";

ripple.style.height =
size+"px";

ripple.style.left =
e.offsetX-size/2+"px";

ripple.style.top =
e.offsetY-size/2+"px";

ripple.style.position =
"absolute";

ripple.style.borderRadius =
"50%";

ripple.style.background =
"rgba(255,255,255,.35)";

ripple.style.transform =
"scale(0)";

ripple.style.animation =
"ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ==========================================
// OPENING TEXT ANIMATION
// ==========================================

const unlockText =
document.getElementById("unlockText");

let dots = 0;

setInterval(()=>{

if(openingScreen.style.display==="flex"){

dots++;

if(dots>3){

dots=0;

}

unlockText.innerHTML =
"Unlocking your surprise" +
".".repeat(dots);

}

},450);


// ==========================================
// ALWAYS START FROM TOP
// ==========================================

window.onbeforeunload=()=>{

window.scrollTo(0,0);

};


// ==========================================
// PREVENT PAGE DRAG ON MOBILE
// ==========================================

document.addEventListener(
"gesturestart",
function(e){

e.preventDefault();

});