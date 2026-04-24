let boxes =document.querySelectorAll(".box");
let resetbt = document.querySelector("#reset");
let newgamebt = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// we a variable to track whose turn is it ?
let turno =true ;//playerx playero
//we will be using 2d array 
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],

]
const resetgame = ()=>{
    turno = true ;
    enableboxes () ;
//    msgcontainer.style.display="none";
   msg.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        if(turno){
            box.innerText="O";
            turno=false ;
            box.style.color="#800020"
        }
        else {
            box.innerText="X";
            turno=true;
            box.style.color ="#A0522D";
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes = ()=>{
    for ( let box of boxes){
        box.disabled =true ;
    }
}
const enableboxes =()=>{
    for (let box of boxes ){
        box.disabled = false ;
        box.innerText= "";
        box.style.color="";
    }
}
const showwinner =(winner)=> {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for( let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 != "" && pos2 != "" && pos3!=""){
             if (pos1 === pos2 && pos2===pos3){
                console.log("winner is ", pos1);
                showwinner(pos1);
             }

    }
}
}
newgamebt.addEventListener("click",resetgame);
resetbt.addEventListener("click",resetgame);