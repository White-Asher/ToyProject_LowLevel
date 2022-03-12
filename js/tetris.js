import BLOCKS from "./blocks.js"

const blockarea = document.querySelector(".blockarea > ul");
const gameText = document.querySelector(".gametext");
const scoreDisplay = document.querySelector(".score");
const restartBtn = document.querySelector(".gametext > button");
const gameRows = 20;
const gameCols = 10;

let score = 0;
let fallingTime = 600;
let downInterval;
let tempMovingItem;

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
            score++;
            scoreDisplay.innerHTML = score;
        }
    })
    generateNewBlock();
}

function generateNewBlock(){

    clearInterval(downInterval);
    downInterval = setInterval(()=>{
        moveBlock('top',1)
    },fallingTime)

    const blockarray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random()*blockarray.length)
    movingItem.type = blockarray[randomIndex][0]
    movingItem.top = 0;
    movingItem.left = 3;
    movingItem.direction = 0;
    tempMovingItem = {...movingItem};
    renderBloacks()
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
        default:
            break;
    }
})