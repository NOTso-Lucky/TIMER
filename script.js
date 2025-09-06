const DAYS=document.getElementById("days");
const HOURS=document.getElementById("hours");
const MINUTES=document.getElementById("minutes");
const SECONDS=document.getElementById("seconds");
const PROGRESSBAR=document.getElementById("progress-bar");
let username="DUKHIYARE";
const inputDays=document.getElementById("input-days");
const inputHours=document.getElementById("input-hours");
const inputMinutes=document.getElementById("input-minutes");
const inputSeconds=document.getElementById("input-seconds");


const startbtn=document.getElementById("start-btn");
const pausebtn=document.getElementById("pause-btn");
const resumebtn=document.getElementById("resume-btn");
const resetbtn=document.getElementById("reset-btn");

startbtn.addEventListener("click",()=>{
    let d=parseInt(inputDays.value)||0;
    let h=parseInt(inputHours.value)||0;
    let m=parseInt(inputMinutes.value)||0;
    let s=parseInt(inputSeconds.value)||0;

    setTimer(d,h,m,s);
    startTimer();
});

pausebtn.addEventListener("click",pauseTimer);
resumebtn.addEventListener("click",resumeTimer);
resetbtn.addEventListener("click",resetTimer);

let totalTime=0;
let remainingTime=0;
let timerInterval=null;

function setTimer(days,hours,minutes,seconds){
    totalTime=(days*24*60*60)+(hours*60*60)+(minutes*60)+seconds;
    remainingTime=totalTime;
    updateDisplay();
}

function startTimer(){
    if(timerInterval) return;

    timerInterval=setInterval(()=>{
        if(remainingTime>0){
            remainingTime--;
            updateDisplay();
        }
        else{
            clearInterval(timerInterval);
            timerInterval=null;

            document.getElementById("alarm").play();
            alert(`🎉 YAYYYYYYY YOU DID It  🎊,IM proud of you ${username}`);
        }
    },1000);
}

function pauseTimer(){
    clearInterval(timerInterval);
    timerInterval=null;
    
}

function resumeTimer(){
    if(!timerInterval){
        startTimer();
    }
}

function resetTimer(){
    pauseTimer();
    remainingTime=totalTime;
    updateDisplay();
}

function updateDisplay(){
    let d = Math.floor(remainingTime/86400);
    let h = Math.floor((remainingTime%86400)/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = remainingTime%60;

    DAYS.textContent=d.toString().padStart(2,"0");
    HOURS.textContent=h.toString().padStart(2,"0");
    MINUTES.textContent=m.toString().padStart(2,"0");
    SECONDS.textContent=s.toString().padStart(2,"0");

    if(totalTime>0){
        let progress=((totalTime-remainingTime)/totalTime)*100;
        PROGRESSBAR.style.width=progress+"%";
    }
}

const introScreen=document.getElementById("intro-screen");
const app=document.getElementById("app");
const diveBtn=document.getElementById("dive-btn");
const nameInput=document.getElementById("name-input");
const welcomeMessage=document.getElementById("welcome-message");


// diveBtn.addEventListener("click",()=>{
    
//     username=nameInput.value.trim();

//     if(username===""){
//         username="Dukhiyare";
//     }

//     welcomeMessage.textContent=`Welcome,${username}!!🎉`;
//     introScreen.classList.remove("visible");
//     introScreen.classList.add("hidden");


//     setTimeout(()=>{
//         introScreen.style.display="none";
//         app.style.display="block";
//         app.classList.add("visible");
//     },2000);
    
    
    
    
    
// });
diveBtn.addEventListener("click",handleDiveIn);

nameInput.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        handleDiveIn();
    }
});

function handleDiveIn(){
    let username=nameInput.value.trim();

    if(username===""){
        username="DUKHIYARE";
    }

    welcomeMessage.textContent=`Welcome, ${username}!!🎉`;
    introScreen.classList.remove("visible");
    introScreen.classList.add("hidden");

    setTimeout(()=>{
        introScreen.style.display="none";
        app.style.display="block";
        setTimeout(()=>{
            app.classList.add("visible");
        },50)
        
    },2000)
}
