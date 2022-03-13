import BLOCKS from "./blocks.js"

const blockarea = document.querySelector(".blockarea > ul");
const blockareaContain = document.querySelector(".blockarea");
const sidearea = document.querySelector(".sidearea");
const gameText = document.querySelector(".gametext");
const scoreDisplay = document.querySelector(".score");
const restartBtn = document.querySelector(".gametext > button");
const container = document.querySelector(".container");
const pauseTag = document.querySelector(".pause");
const nextblock = document.querySelector(".nextblock > ul");
const gameRows = 20;
const gameCols = 10;
const nextBlockRows = 2;


let score = 0;
let fallingTime = 600;
let downInterval;
let tempMovingItem;
var gamestate = 0

const movingItem = {
    type: "",
    direction: 0,
    top: 0,
    left: 3,
};

function init(){
    tempMovingItem = { ...movingItem };
    for (let i = 0; i< gameRows; i++){
        appendNewLine()
    }
    for (let i = 0; i< nextBlockRows; i++){
        showNextblockline()
    }
    generateNewBlock()
}
init()

function appendNewLine(){
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    for(let j = 0; j < 10 ; j++){
        const ulli = document.createElement("li");
        ulTag.prepend(ulli)
    }
    liTag.prepend(ulTag)
    blockarea.prepend(liTag)
}

function showNextblockline(){
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    for(let j = 0; j < 4 ; j++){
        const ulli = document.createElement("li");
        ulTag.prepend(ulli)
    }
    liTag.prepend(ulTag)
    nextblock.prepend(liTag)
}

function renderBloacks(moveType=""){
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove(type,"moving");
    })
    BLOCKS[type][direction].some(block=>{
        const x = block[0] + left;
        const y = block[1] + top;
        const target = blockarea.children[y]? blockarea.children[y].children[0].children[x] : null;
        const isAvailable = checkEmpty(target)
        if(isAvailable){
            target.classList.add(type,"moving")
        } else {
            tempMovingItem = { ...movingItem }
            if(moveType === 'retry'){
                clearInterval(downInterval);
                showGameoverText()
            }
            setTimeout(()=>{
                renderBloacks('retry');
                if(moveType === "top"){
                    seizeBlock();
                }
            },0)
            return true;
        }
    })
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
}

function showGameoverText(){
    gameText.style.display = "flex"
}

function seizeBlock(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove("moving");
        moving.classList.add("seized");
    })
    checkMatch()
}
function checkMatch(){
    
    const childNodes = blockarea.childNodes;
    childNodes.forEach(child=>{
        let matched = true;
        child.children[0].childNodes.forEach(li=>{
            if(!li.classList.contains("seized")){
                matched = false;
            }
        })
        if(matched){
            child.remove();
            appendNewLine();
            score = score + 10;
            scoreDisplay.innerHTML = score;
        }
    })
    generateNewBlock();
}


function generateNewBlock(){
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock('top',1)
    }, fallingTime)

    const blockarray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random()*blockarray.length)

    movingItem.type = blockarray[randomIndex][0];
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = {...movingItem};
    renderBloacks();
}

function checkEmpty(target){
    if(!target || target.classList.contains("seized")){
        return false;
    }
    return true;
}

function moveBlock(moveType, amount){
    tempMovingItem[moveType] += amount
    renderBloacks(moveType);
}

function changeDirection(){
    const direction = tempMovingItem.direction
    direction == 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction+=1
    renderBloacks()
}

function dropBlock(){
    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock("top",1)
    },10)
}
function pause(){
    if (gamestate == 0){
        blockareaContain.style.visibility = "hidden";
        sidearea.style.visibility = "hidden";
        pauseTag.style.display = "block";
        clearInterval(downInterval);
        gamestate = 1
    }

    else if(gamestate == 1){
        pauseTag.style.display = "none";
        blockareaContain.style.visibility = "visible";
        sidearea.style.visibility = "visible";
        downInterval = setInterval(()=>{
            moveBlock('top',1)
        },fallingTime)
        gamestate = 0
    }
}

restartBtn.addEventListener("click",function(){
    blockarea.innerHTML = "";
    gameText.style.display = "none"
    init()
})

document.addEventListener("keydown",function(e){
    switch(e.keyCode){
        case 39:
            moveBlock("left",1);
            break;
        case 37:
            moveBlock("left",-1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 38:
            changeDirection();
            break;
        case 32:
            dropBlock();
            break;
        case 80:
            pause();
            break;
        default:
            break;
    }
})