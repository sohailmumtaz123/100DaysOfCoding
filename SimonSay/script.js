let result=document.querySelector("h3");
let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let btns=["red", "green", "blue", "yellow"];

document.addEventListener("keypress", function(){
    if(start==false){
        console.log("game started now");
        start=true;
        levelup();
    }
    console.log(level);
});

function levelup(){
    level++;
    result.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    flashbtn(randbtn);
}

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function btnPress(){
    flashbtn(this);
}

let allBtns=document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}


