let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let message = document.querySelector("#message");
let messageContainer = document.querySelector("#message-container");

let turnO=true;

let winPattern=[
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = ()=>{
    turnO=true;
   enableboxes();
   messageContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkwinner();
    });
});

let disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    message.innerText = `Congratulations Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winPattern){
     let pos1Val= boxes[pattern[0]].innerText;
      let pos2Val= boxes[pattern[1]].innerText;
      let pos3Val= boxes[pattern[2]].innerText;
    

    if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner", pos1Val);
             showwinner(pos1Val);
        }
    }
}
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);