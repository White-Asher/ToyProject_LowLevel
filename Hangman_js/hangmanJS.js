let alpahbet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let btnClassTag = document.querySelector('.btnClass');
alpahbet.forEach((currentEle,index) => {
    let btnTag = document.createElement("button")
    btnTag.innerHTML = currentEle;
    btnTag.id = `alphabetBtn${index}`
    btnClassTag.setAttribute("id",`alphabetBtn${index}`);
    btnClassTag.appendChild(btnTag);
});
