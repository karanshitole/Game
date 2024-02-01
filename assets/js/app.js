const cl = console.log;

const boxes = document.querySelectorAll(".box");
const resetBtn=document.querySelector("#reset-btn");
const newGameBtn=document.querySelector("#new-btn");
const msgContainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");




 let turn0 = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
const resetGame =()=>{
    turn0 =true;
    enableBoxes();
    msgContainer.classList.add("hide")
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="0";
            turn0 =false;
        }else{
            box.innerText="X";
            turn0 =true;
        }
        box.disabled = true;
        checkWinner ();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const  checkWinner =()=>{
    for(let pattern of winPatterns){
            let post1val = boxes[pattern[0]].innerText;
            let post2val = boxes[pattern[1]].innerText;
            let post3val = boxes[pattern[2]].innerText;

       if(post1val !="" && post2val !="" && post3val !=""){
        if(post1val=== post2val && post2val === post3val){
            showWinner(post1val);
        }
       }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);