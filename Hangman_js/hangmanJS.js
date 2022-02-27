function checkletter(index){
    let pushAlphaBtn = this.innerHTML;
    for(let i=0;i<realWord.length;i++){
        for(let j=0;j<alpahbet.length;j++){

        }
    }
}

const word = ['abcd','abcde','abcdef','abcdefg']
let alpahbet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let count;
let lives;
let space;
let guessWord = [];
let wordArrayIndex = Math.floor(Math.random() * word.length);
let extractedWord = word[wordArrayIndex]
let realWord = extractedWord.split("");


function showAlphabet(guessWord){

}

function button(){
    alpahbet.forEach((currentEle,index) => {
        let btnClassTag = document.querySelector('.btnClass');
        let btnTag = document.createElement("button");
        btnTag.id = `alphabetBtn${index}`
        btnTag.innerHTML = currentEle;
        btnClassTag.appendChild(btnTag);
        btnTag.addEventListener('click', function(){
            checkletter(index);
        })
    });
}

function initialSetting(){
    for(let i=0; i<realWord.length; i++){
        let wordClassTag = document.querySelector('.word');
        let wordTag = document.createElement("div");
        wordTag.innerHTML = '_';
        wordTag.className = 'wordletter'
        wordTag.id = `word${i}`;
        wordClassTag.appendChild(wordTag);
    }

}

playGame();

function playGame(){
    initialSetting();
    button();
    guessWord = [];
    lives = 10;
    counter = 0;

}