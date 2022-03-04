var amount = [10, 20, 30, 40, 50]
var aveSeleAmount = 35;
function cal(amount, aveSeleAmount){
    var sum = 0;
    for(var i=0; i<=4;i++){
        sum = sum + amount[i];
    }
    console.log('12월에는 '+((aveSeleAmount*6) - sum )+'개를 팔아야 합니다.')
}

cal(amount, aveSeleAmount);
