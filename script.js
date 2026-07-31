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

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});


// ===========================
// DAY COUNTER
// Proposal Date: 22 June 2026
// ===========================

const startDate = new Date("2026-06-22");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("dayCounter").innerHTML =
`${days} Days`;


// ===========================
// POPUP
// ===========================

const popup = document.getElementById("popup");

document.getElementById("surpriseBtn").onclick = () => {

    popup.classList.add("show");

}

document.getElementById("closePopup").onclick = () => {

    popup.classList.remove("show");

}


// ===========================
// FLOATING HEARTS
// ===========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
    (14+Math.random()*18)+"px";

    heart.style.animationDuration =
    (6+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,1800);


// ===========================
// SHOOTING STARS
// ===========================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*80+"vw";

    star.style.top=Math.random()*40+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1500);

}

setInterval(shootingStar,7000);


// ===========================
// SCROLL REVEAL
// ===========================

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card=>{

    card.classList.add("fade");

});

const observer = new IntersectionObserver(entries=>{

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
// MUSIC BUTTON
// ===========================

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("music");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!music.src){

        alert("Add your music file first ❤️");

        return;

    }

    if(!playing){

        music.play();

        musicBtn.innerHTML="Pause Music";

        playing=true;

    }else{

        music.pause();

        musicBtn.innerHTML="Play Music";

        playing=false;

    }

});


// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

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
// RIPPLE STYLE
// ===========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

button{

position:relative;

overflow:hidden;

}

`;

document.head.appendChild(style);