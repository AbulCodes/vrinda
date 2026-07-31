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
// PASSWORD SYSTEM
// ==========================================

const PASSWORD="Foreverus";

const welcomeScreen=document.getElementById("welcomeScreen");
const passwordScreen=document.getElementById("passwordScreen");
const openingScreen=document.getElementById("openingScreen");
const website=document.getElementById("websiteContent");

const continueBtn=document.getElementById("continueBtn");
const unlockBtn=document.getElementById("unlockBtn");

const passwordInput=document.getElementById("passwordInput");
const wrongPassword=document.getElementById("wrongPassword");

const unlockText=document.getElementById("unlockText");


continueBtn.onclick=()=>{

welcomeScreen.style.display="none";
passwordScreen.style.display="flex";

};


unlockBtn.onclick=()=>{

if(passwordInput.value===PASSWORD){

wrongPassword.innerHTML="";

passwordScreen.style.display="none";
openingScreen.style.display="flex";


setTimeout(()=>{

openingScreen.style.display="none";
website.style.display="block";


// ===============================
// SHOW MUSIC PLAYER AFTER 10 SEC
// ===============================

setTimeout(()=>{

miniPlayer.classList.add("show");

},10000);



},1800);


}

else{

wrongPassword.innerHTML="Wrong Password ❤️";
passwordInput.value="";

}

};



passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

unlockBtn.click();

}

});



// ==========================================
// OPENING TEXT
// ==========================================

let dots=0;

setInterval(()=>{

if(openingScreen.style.display==="flex"){

dots++;

if(dots>3)dots=0;

unlockText.innerHTML=
"Unlocking your surprise"+".".repeat(dots);

}

},450);



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


document.getElementById("dayCounter").innerHTML=
days+" Days";

}


updateCounter();

setInterval(updateCounter,3600000);



// ==========================================
// MUSIC SYSTEM
// ==========================================

const music=document.getElementById("music");
const miniPlayer=document.getElementById("miniPlayer");
const miniPlay=document.getElementById("miniPlay");

const albumArt=document.getElementById("albumArt");

const discArt=document.getElementById("discArt");


miniPlay.onclick=()=>{

if(music.paused){

music.play();

}

else{

music.pause();

}

};



music.addEventListener("play",()=>{

miniPlay.innerHTML="⏸";

albumArt.classList.remove("pause");

if(discArt)
discArt.classList.remove("pause");

});


music.addEventListener("pause",()=>{

miniPlay.innerHTML="▶";

albumArt.classList.add("pause");

if(discArt)
discArt.classList.add("pause");

});



// ==========================================
// HERO BUTTON
// ==========================================

const floatingCounter=
document.getElementById("floatingCounter");

const startBtn=
document.getElementById("startBtn");


startBtn.onclick=()=>{


floatingCounter.classList.add("show");


window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});


// START MUSIC ONLY HERE

music.play().catch(()=>{

console.log("Autoplay blocked");

});


};



// ==========================================
// LETTER POPUP
// ==========================================

const letterPopup=document.getElementById("letterPopup");
const openLetter=document.getElementById("openLetter");
const closeLetter=document.getElementById("closeLetter");


openLetter.onclick=()=>{

letterPopup.classList.add("show");

};


closeLetter.onclick=()=>{

letterPopup.classList.remove("show");

};


letterPopup.onclick=(e)=>{

if(e.target===letterPopup)

letterPopup.classList.remove("show");

};



// ==========================================
// SURPRISE POPUP
// ==========================================

const popup=document.getElementById("popup");

const surpriseBtn=document.getElementById("surpriseBtn");

const closePopup=document.getElementById("closePopup");


surpriseBtn.onclick=()=>{

popup.classList.add("show");

};


closePopup.onclick=()=>{

popup.classList.remove("show");

};


popup.onclick=(e)=>{

if(e.target===popup)

popup.classList.remove("show");

};



// ==========================================
// MINI DISC
// ==========================================

const footer=document.querySelector("footer");

const miniDisc=document.getElementById("miniDisc");


const footerObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

miniPlayer.classList.remove("show");

miniDisc.classList.add("show");

}

else{

miniDisc.classList.remove("show");

miniPlayer.classList.add("show");

}


});


},{threshold:.2});


footerObserver.observe(footer);



miniDisc.onclick=()=>{

miniDisc.classList.remove("show");

miniPlayer.classList.add("show");

};



// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
16+Math.random()*18+"px";


heart.style.animationDuration=
6+Math.random()*3+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},9000);

}


setInterval(createHeart,1800);



// ==========================================
// SHOOTING STAR
// ==========================================

function createStar(){

const star=document.createElement("div");

star.className="shooting-star";


star.style.left=Math.random()*80+"vw";

star.style.top=Math.random()*35+"vh";


document.body.appendChild(star);


setTimeout(()=>{

star.remove();

},1500);

}


setInterval(createStar,7000);



// ==========================================
// ESC CLOSE
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.classList.remove("show");

letterPopup.classList.remove("show");

}

});



// ==========================================
// CONSOLE
// ==========================================

console.clear();


console.log(
"%c❤️ Happy Girlfriend Day ❤️",
"color:#ff4d8d;font-size:22px;font-weight:bold;"
);


console.log(
"%cMade with ❤️ by Abul",
"color:white;font-size:16px;"
);