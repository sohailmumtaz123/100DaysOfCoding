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
    userseq=[];
    level++;
    result.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    flashbtn(randbtn);
}

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function checkAns(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length == userseq.length){
            setTimeout(levelup(), 1000);
        }
    }
    else 
        {
            result.innerText=`Game Over! Achieved level: ${level}`;
            document.querySelector("body").style.backgroundColor = "red"
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },1000)
            reset();
        }
}
function btnPress(){
    flashbtn(this);

    let userColor=this.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    console.log("game sequence", gameseq);
    console.log("User Sequence",userseq);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameseq=[]
    userseq=[]
    level=0;
}


