var 출석부 = ['흥민', '영희', '철수', '재석'];

function findName(inputName){
    for(var i=0; i<=출석부.length; i++){
        if(출석부[i] == inputName){
            console.log('있어요')
        }
    }
}
findName('철수');
findName('김치');