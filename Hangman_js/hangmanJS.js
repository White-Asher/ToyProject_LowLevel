
const word = ['apple','computer','dragon','train','bus','letter']
let alpahbet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let life;
let space;
let guessWord = [];

let resetBtnTag = document.querySelector('.resetBtn')
let wordArrayIndex = Math.floor(Math.random() * word.length);
let extractedWord = word[wordArrayIndex]
let realWord = extractedWord.split("");

resetBtnTag.addEventListener('click',() =>{reset()})

function reset(){
    location.reload();
}

function button(){
    alpahbet.forEach((currentEle,index) => {
        let btnClassTag = document.querySelector('.btnClass');
        let btnTag = document.createElement("button");
        btnTag.innerHTML = currentEle;
        btnClassTag.appendChild(btnTag);
        btnTag.addEventListener('click', function(){
            this.setAttribute("class", "active");
            checkWord(this.innerHTML, index);
            checkState();
        },{once:true})
    });
}

function checkWord(alphabet, index){
    let duplicateCount = 0;
    let pushAlphabet = alphabet;
    let gameMsgTag = document.getElementById('gameMsg')
    for(let i=0; i<realWord.length; i++){
        if(pushAlphabet == realWord[i]){
            showAlphabet(pushAlphabet, i);
            duplicateCount++;
        }
    }
    if( duplicateCount == 0 ){
        gameMsgTag.innerHTML = '일치하는 알파벳이 없습니다.';
        life = life - 1;
    }
}

function checkState(){
    let checkStateTag = document.getElementById('currentState');
    let gameMsgTag = document.getElementById('gameMsg')

    checkStateTag.innerHTML = `Your lifes : ${life}`;

    if(life == 0){
        gameMsgTag.innerHTML = '목숨을 전부 잃었습니다 게임에서 졌습니다.';
    }
    else if (guessWord.toString() == realWord.toString()){
        gameMsgTag.innerHTML = '단어를 전부 맞추셨습니다. 계속하려면 Reset 버튼을 클릭하세요.';
    }
}

function showAlphabet(pushAlphabet, i){
    let wordTag = document.getElementById(`word${i}`);
    guessWord[i] = pushAlphabet
    wordTag.innerHTML = guessWord[i];
}

function initialSetting(){
    life = 10;
    for(let i=0; i<realWord.length; i++){
        guessWord.push('_')
    }
    initialShowWord();
}

function initialShowWord(){
    for(let i=0; i<realWord.length; i++){
        let wordClassTag = document.querySelector('.word');
        let wordTag = document.createElement("div");
        wordTag.innerHTML = guessWord[i];
        wordTag.className = 'wordletter'
        wordTag.id = `word${i}`;
        wordClassTag.appendChild(wordTag);
    }
}

function playGame(){
    initialSetting();
    button();
}
playGame();