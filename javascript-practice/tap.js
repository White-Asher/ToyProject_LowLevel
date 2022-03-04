 $('.black-background').click(function(e){
     if(e.target == e.currentTarget){
        $('.black-background').hide();
     }
 })


for (let i=0; i<$('.tab-button').length;i++){
    tabOpen(i);
}

function tabOpen(inputNum){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-button').eq(i).addClass('show');
}

$('.list').click(function(e){
    if(e.target == document.querySelector('.tab-button')){
        
    }
});