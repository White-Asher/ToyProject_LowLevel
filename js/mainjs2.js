var size = [26,28,30,32,34,36]

$('#option1').on('change' , function(){
    selectVal = $('#option1').val();
    if(selectVal == '셔츠'){
        $('#option2').html('');
        var divTemp = `
        <option>95</option>
        <option>100</option>
        <option>105</option>
        `;
        $('#option2').append(divTemp);
    } 
    else if (selectVal == '모자'){
        

    } 
    else if (selectVal == '바지'){
        $('#option2').html('');
        // for (var i=0;i<6;i++){
        //     var divTemp = `<option>${size[i]}</option>`;
        //     $('#option2').append(divTemp);
        // }

        size.forEach(function(i){
            var divTemp = `<option>${i}</option>`;
            $('#option2').append(divTemp);
        })
        
    }
});

