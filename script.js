// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1800);
});

// ===========================
// START BUTTON
// ===========================

document.getElementById("startBtn").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

// ===========================
// DAY COUNTER
// Proposal Date: 22 June 2026
// ===========================
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

// ===========================
// LETTER POPUP
// ===========================

const letterPopup = document.getElementById("letterPopup");

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

// ===========================
// SURPRISE POPUP
// ===========================

const popup=document.getElementById("popup");

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

// ===========================
// FLOATING HEARTS
// ===========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (15+Math.random()*20)+"px";

    heart.style.animationDuration=
    (6+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,1800);

// ===========================
// SHOOTING STAR
// ===========================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*80+"vw";

    star.style.top=Math.random()*35+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

setInterval(shootingStar,7000);

// ===========================
// SCROLL ANIMATION
// ===========================

const cards=document.querySelectorAll(".glass-card");

cards.forEach(card=>{

    card.classList.add("fade");

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

cards.forEach(card=>{

observer.observe(card);

});

// ===========================
// MUSIC PLAYER
// ===========================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!music.querySelector("source")){

alert("Add your song first ❤️");

return;

}

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="▶ Play Our Song";

playing=false;

}

});

// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(
this.clientWidth,
this.clientHeight
);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";
ripple.style.top=e.offsetY-size/2+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.35)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .6s linear";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ===========================
// RIPPLE CSS
// ===========================

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

// ===========================
// AUTO SCROLL TO TOP
// ===========================

window.onbeforeunload=()=>{

window.scrollTo(0,0);

};