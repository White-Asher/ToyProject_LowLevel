const blockarea = document.querySelector(".blockarea > ul");

const gameRows = 20;
const gameCols = 10;

let score = 0;
let fallingTime = 600;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    block_T :[
        [[2,1],[0,1],[1,0],[1,1]],
        [[1,2],[0,1],[1,0],[1,1]],
        [[1,2],[0,1],[2,1],[1,1]],
        [[2,1],[1,2],[1,0],[1,1]]
    ]
}

const movingItem = {
    type: "block_T",
    direction: 0,
    top: 0,
    left: 3,
};

function init(){
    tempMovingItem = { ...movingItem };
    for (let i = 0; i< gameRows; i++){
        appendNewLine()
    }
    renderBloacks()
}
init()

function appendNewLine(){
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    for(let j = 0; j < 10 ; j++){
        const ulli = document.createElement("li");
        ulTag.appendChild(ulli)
    }
    liTag.appendChild(ulTag)
    blockarea.appendChild(liTag)
}

function renderBloacks(moveType=""){
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove(type,"moving");
    })
    console.log( BLOCKS[type][direction])
    BLOCKS[type][direction].some(block=>{
        const x = block[0] + left;
        const y = block[1] + top;
        const target = blockarea.children[y]? blockarea.children[y].children[0].children[x] : null;
        const isAvailable = checkEmpty(target)
        if(isAvailable){
            target.classList.add(type,"moving")
        } else {
            tempMovingItem = { ...movingItem }
            setTimeout(()=>{
                renderBloacks();
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

function seizeBlock(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving =>{
        moving.classList.remove("moving");
        moving.classList.add("seized");
    })
    generateNewBlock()
}

function generateNewBlock(){
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
        default:
            break;
    }
})