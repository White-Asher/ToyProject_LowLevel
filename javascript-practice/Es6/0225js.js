// prob1
class dog{
    constructor(type,color){
        this.type = type;
        this.color = color;
    }
}

var 강아지1 = new dog('말티즈','white')
var 강아지2 = new dog('진돗개','brown')

// prob2

class cat extends dog{
    constructor(type,color,age){
        super(type,color);
        this.age = age;
    }
    get 한살먹기(){
        return this.age + 1
    }
}

var 고양이1 = new cat('코숏', 'white', 5)
var 고양이2 = new cat('러시안블루', 'brown', 2)

// prob4
class Unit{
    constructor(){
        this.attack = 5
        this.health = 100
    }
    get battlePoint(){
        return this.attack + this.health
    }
    set heal(upHealth){
        this.health += upHealth
    }
}

var 전사1 = new Unit()


// prob5

var data = {
    odd : [],
    even : [],

    setterr: function(...numbers){
        numbers.forEach((a)=>{
            if( a % 2 == 1){
                this.odd.push(a)
            } else{
                this.even.push(a)
            }
        })
    },

    // set sortInputNumber(inputNumberArray){
    //     for(let index = 0; index < inputNumberArray.length; index++){
    //         let value = inputNumberArray[index]
    //         if((value %= 2 ) == 1 ){
    //             this.odd.push(inputNumberArray[index])
    //         }
    //         else if((value %= 2 ) == 0 ){
    //             this.even.push(inputNumberArray[index])
    //         }
    //     }
    // },

    get getter(){
        return [...this.odd, ...this.even].sort()
    }
    // get showArray(){
    //     return this.odd + this.even
    // }
}

