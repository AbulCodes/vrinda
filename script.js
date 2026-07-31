// ===========================
// INTRO
// ===========================

const PASSWORD = "0000";

const welcomeScreen =
document.getElementById("welcomeScreen");

const passwordScreen =
document.getElementById("passwordScreen");

const openingScreen =
document.getElementById("openingScreen");

const website =
document.getElementById("websiteContent");

document
.getElementById("continueBtn")
.onclick=()=>{

welcomeScreen.style.display="none";

passwordScreen.style.display="flex";

};

document
.getElementById("unlockBtn")
.onclick=()=>{

const value=
document
.getElementById("passwordInput")
.value;

if(value===PASSWORD){

passwordScreen.style.display="none";

openingScreen.style.display="flex";

setTimeout(()=>{

openingScreen.style.display="none";

website.style.display="block";

},1800);

}else{

document
.getElementById("wrongPassword")
.innerHTML="Wrong Password ❤️";

}

};

document
.getElementById("passwordInput")
.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

document
.getElementById("unlockBtn")
.click();

}

});
// ===========================
// PASSWORD
// ===========================

const PASSWORD = "0000";

window.addEventListener("load", () => {

    document.getElementById("loader").classList.add("hide");

});

document.addEventListener("DOMContentLoaded", () => {

    const passwordScreen = document.getElementById("passwordScreen");
    const websiteContent = document.getElementById("websiteContent");

    document.getElementById("unlockBtn").onclick = () => {

        const entered =
            document.getElementById("passwordInput").value;

        if (entered === PASSWORD) {

            passwordScreen.style.display = "none";
            websiteContent.style.display = "block";

        } else {

            document.getElementById("wrongPassword").textContent =
                "Wrong Password ❤️";

        }

    };

    document.getElementById("passwordInput").addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            document.getElementById("unlockBtn").click();

        }

    });

});
// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1800);
});

// ===========================
// FLOATING COUNTER
// ===========================

const floatingCounter = document.getElementById("floatingCounter");

// ===========================
// START BUTTON
// ===========================

document.getElementById("startBtn").addEventListener("click", () => {

    floatingCounter.classList.add("show");

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});

// ===========================
// DAY COUNTER
// ===========================

// CHANGE THIS DATE IF NEEDED
const proposalDate = new Date(2026, 5, 22); // June = 5

function updateDayCounter() {

    const today = new Date();

    const difference = today - proposalDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("dayCounter").textContent =
        `${days} Days`;

}

updateDayCounter();


// ===========================
// LETTER POPUP
// ===========================

const letterPopup = document.getElementById("letterPopup");

document.getElementById("openLetter").onclick = () => {

    letterPopup.classList.add("show");

};

document.getElementById("closeLetter").onclick = () => {

    letterPopup.classList.remove("show");

};


// ===========================
// SURPRISE POPUP
// ===========================

const popup = document.getElementById("popup");

document.getElementById("surpriseBtn").onclick = () => {

    popup.classList.add("show");

};

document.getElementById("closePopup").onclick = () => {

    popup.classList.remove("show");

};


// ===========================
// FLOATING HEARTS
// ===========================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 1800);


// ===========================
// SHOOTING STARS
// ===========================

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = Math.random() * 80 + "vw";

    star.style.top = Math.random() * 35 + "vh";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 1500);

}

setInterval(shootingStar, 7000);


// ===========================
// SCROLL REVEAL
// ===========================

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

    card.classList.add("fade");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

cards.forEach(card => {

    observer.observe(card);

});


// ===========================
// MUSIC PLAYER
// ===========================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!music.querySelector("source")) {

        alert("Add your song first ❤️");

        return;

    }

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "▶ Play Our Song";

        playing = false;

    }

});


// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = e.offsetX - size / 2 + "px";
        ripple.style.top = e.offsetY - size / 2 + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.35)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ===========================
// RIPPLE CSS
// ===========================

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

button{

position:relative;

overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);


// ===========================
// RESET SCROLL
// ===========================

window.onbeforeunload = () => {

    window.scrollTo(0, 0);

};