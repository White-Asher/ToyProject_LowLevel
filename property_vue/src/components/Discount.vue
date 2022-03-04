<template>
    <div class="discount">
        <h4>지금 결제하면 {{discountRate}}% 할인</h4>
    </div>
</template>
<script>
export default {
    name:'Discount',
    data(){
        return {
            discountRate : 30
        }
    },

    mounted(){
        var setIntervalVar = setInterval(()=>{
            this.discountRate -= (1);
            console.log(this.discountRate)
            if(this.discountRate <= 0){
                this.discountRate = 0;
                clearInterval(setIntervalVar)
            }
        }, 1000);
    }
}
</script>
<style>
.discount{
  background :#eee;
  padding : 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>