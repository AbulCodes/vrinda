// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    },1800);

});

// ==========================================
// PASSWORD
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

const unlockText =
document.getElementById("unlockText");

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
// MUSIC
// ==========================================

const music =
document.getElementById("music");

const miniPlayer =
document.getElementById("miniPlayer");

const albumArt =
document.getElementById("albumArt");

const miniPlay =
document.getElementById("miniPlay");

let playing=false;

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

// try autoplay

music.play().then(()=>{

playing=true;

}).catch(()=>{

console.log("Autoplay blocked");

});

// mini player after 20 sec

setTimeout(()=>{

miniPlayer.classList.add("show");

},20000);

});

// ==========================================
// MINI PLAYER
// ==========================================

miniPlay.addEventListener("click",()=>{

if(music.paused){

music.play();

miniPlay.innerHTML="⏸";

albumArt.classList.remove("pause");

playing=true;

}

else{

music.pause();

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

playing=false;

}

});

// ==========================================
// DAY COUNTER
// ==========================================

const proposalDate =
new Date("2026-06-22T00:00:00");

function updateCounter(){

const today=new Date();

const diff=today-proposalDate;

const days=Math.floor(

diff/(1000*60*60*24)

);

document
.getElementById("dayCounter")
.innerHTML=days+" Days";

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

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

});

// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(16+Math.random()*18)+"px";

heart.style.animationDuration=
(6+Math.random()*3)+"s";

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

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=
Math.random()*80+"vw";

star.style.top=
Math.random()*35+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1500);

}

setInterval(shootingStar,7000);

// ==========================================
// SCROLL REVEAL
// ==========================================

const cards=
document.querySelectorAll(".glass-card");

cards.forEach(card=>{

card.classList.add("fade");

});

const observer=
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
// OPENING TEXT
// ==========================================

let dots=0;

setInterval(()=>{

if(openingScreen.style.display==="flex"){

dots++;

if(dots>3){

dots=0;

}

unlockText.innerHTML=

"Unlocking your surprise"+

".".repeat(dots);

}

},450);
// ==========================================
// RIPPLE EFFECT
// ==========================================

document
.querySelectorAll("button")
.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.offsetX-size/2+"px";

ripple.style.top=
e.offsetY-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background=
"rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";

ripple.style.animation=
"ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ==========================================
// RIPPLE CSS (AUTO)
// ==========================================

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

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

// ==========================================
// MUSIC EVENTS
// ==========================================

music.addEventListener("play",()=>{

playing=true;

miniPlay.innerHTML="⏸";

albumArt.classList.remove("pause");

});

music.addEventListener("pause",()=>{

playing=false;

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

});

music.addEventListener("ended",()=>{

playing=false;

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

});

// ==========================================
// ESC KEY CLOSES POPUPS
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.classList.remove("show");

letterPopup.classList.remove("show");

}

});

// ==========================================
// ALWAYS START FROM TOP
// ==========================================

window.onbeforeunload=()=>{

window.scrollTo(0,0);

};

// ==========================================
// MOBILE PINCH ZOOM FIX
// ==========================================

document.addEventListener(

"gesturestart",

function(e){

e.preventDefault();

}

);

// ==========================================
// PRELOAD MUSIC
// ==========================================

music.preload="auto";

// ==========================================
// CONSOLE MESSAGE ❤️
// ==========================================

console.log(

"%c❤️ Made with love for Vrinda ❤️",

"color:#ff5ca8;font-size:20px;font-weight:bold;"

);

console.log(

"%cIf you're reading this... she's my Queen 👑",

"color:#ffffff;font-size:15px;"

);