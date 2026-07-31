// ==========================================
// LOADER
// ==========================================

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("hide");

},1800);

});

// ==========================================
// PASSWORD
// ==========================================

const PASSWORD="Foreverus";

const welcomeScreen=
document.getElementById("welcomeScreen");

const passwordScreen=
document.getElementById("passwordScreen");

const openingScreen=
document.getElementById("openingScreen");

const website=
document.getElementById("websiteContent");

const continueBtn=
document.getElementById("continueBtn");

const unlockBtn=
document.getElementById("unlockBtn");

const passwordInput=
document.getElementById("passwordInput");

const wrongPassword=
document.getElementById("wrongPassword");

const unlockText=
document.getElementById("unlockText");

continueBtn.addEventListener("click",()=>{

welcomeScreen.style.display="none";

passwordScreen.style.display="flex";

});

unlockBtn.addEventListener("click",()=>{

if(passwordInput.value===PASSWORD){

wrongPassword.textContent="";

passwordScreen.style.display="none";

openingScreen.style.display="flex";

setTimeout(()=>{

openingScreen.style.display="none";

website.style.display="block";

},1800);

}

else{

wrongPassword.textContent="Wrong Password ❤️";

passwordInput.value="";

}

});

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

unlockBtn.click();

}

});

// ==========================================
// DAY COUNTER
// ==========================================

const proposalDate=new Date(2026,5,22);

proposalDate.setHours(0,0,0,0);

function updateCounter(){

const today=new Date();

today.setHours(0,0,0,0);

const diff=today-proposalDate;

const days=Math.floor(
diff/(1000*60*60*24)
);

document
.getElementById("dayCounter")
.textContent=`${days} Days`;

}

updateCounter();

// ==========================================
// MUSIC
// ==========================================

const music=
document.getElementById("music");

const miniPlayer=
document.getElementById("miniPlayer");

const albumArt=
document.getElementById("albumArt");

const miniPlay=
document.getElementById("miniPlay");

// ==========================================
// HERO BUTTON
// ==========================================

const floatingCounter=
document.getElementById("floatingCounter");

document
.getElementById("startBtn")
.addEventListener("click",()=>{

floatingCounter.classList.add("show");

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

music.play().catch(()=>{

console.log("Autoplay blocked.");

});

setTimeout(()=>{

miniPlayer.classList.add("show");

},10000);

});

// ==========================================
// MINI PLAYER
// ==========================================

miniPlay.addEventListener("click",()=>{

if(music.paused){

music.play();

miniPlay.innerHTML="⏸";

albumArt.classList.remove("pause");

}

else{

music.pause();

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

}

});
// ==========================================
// LETTER POPUP
// ==========================================

const letterPopup =
document.getElementById("letterPopup");

const openLetter =
document.getElementById("openLetter");

const closeLetter =
document.getElementById("closeLetter");

openLetter.addEventListener("click",()=>{

letterPopup.classList.add("show");

});

closeLetter.addEventListener("click",()=>{

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

const popup=
document.getElementById("popup");

const surpriseBtn=
document.getElementById("surpriseBtn");

const closePopup=
document.getElementById("closePopup");

surpriseBtn.addEventListener("click",()=>{

popup.classList.add("show");

});

closePopup.addEventListener("click",()=>{

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
(6+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,1800);

// ==========================================
// SHOOTING STARS
// ==========================================

function createStar(){

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

setInterval(createStar,7000);

// ==========================================
// SCROLL REVEAL
// ==========================================

const cards=
document.querySelectorAll(".glass-card");

cards.forEach(card=>{

card.classList.add("fade");

});

const observer=
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

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

unlockText.textContent=

"Unlocking your surprise"+

".".repeat(dots);

}

},450);
// ==========================================
// RIPPLE EFFECT
// ==========================================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
(e.offsetX-size/2)+"px";

ripple.style.top=
(e.offsetY-size/2)+"px";

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
// RIPPLE STYLE
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

miniPlay.innerHTML="⏸";

albumArt.classList.remove("pause");

});

music.addEventListener("pause",()=>{

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

});

music.addEventListener("ended",()=>{

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

});

// ==========================================
// ESC CLOSES POPUPS
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.classList.remove("show");

letterPopup.classList.remove("show");

}

});

// ==========================================
// RESET SCROLL
// ==========================================

window.onbeforeunload=()=>{

window.scrollTo(0,0);

};

// ==========================================
// MOBILE GESTURE FIX
// ==========================================

document.addEventListener(

"gesturestart",

function(e){

e.preventDefault();

}

);

// ==========================================
// PRELOAD AUDIO
// ==========================================

music.preload="auto";

// ==========================================
// AUTO UPDATE DAY COUNTER
// (refresh every hour)
// ==========================================

setInterval(updateCounter,3600000);

// ==========================================
// CONSOLE MESSAGE ❤️
// ==========================================

console.log(

"%c❤️ Made with love for Vrinda ❤️",

"color:#ff5ca8;font-size:20px;font-weight:bold;"

);

console.log(

"%cForever Us ❤️",

"color:white;font-size:15px;"

);