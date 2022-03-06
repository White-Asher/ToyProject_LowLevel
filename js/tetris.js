const blockarea = document.querySelector(".blockarea > ul");

for(let i = 0 ; i < 20; i++){
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    for(let j=0;j<10;j++){
        const ulli = document.createElement("li");
        ulTag.appendChild(ulli)
    }
    liTag.appendChild(ulTag)
    blockarea.appendChild(liTag)
}