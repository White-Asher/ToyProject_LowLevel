<template>
  <div class="black-bg" v-if="isModalOpen == true"  >
  <div class="white-bg">
    <h4>{{oneroom[buttonPush].title}}</h4>
    <p>{{oneroom[buttonPush].content}}</p>
    <!-- <input @input="month = $event.target.value"> -->
    <input v-model="month"><br>
    <!-- <textarea v-model="month"></textarea> -->
    <p>{{ month }}개월 선택함 : {{oneroom[buttonPush].price * month}}원</p>
    
    <button @click="$emit('closeModal')">닫기</button>
  </div>
</div>
</template>

<script>
export default {
    name:'Modal',

    data(){
        return{        
            month : 1
        }
    },

    beforeUpdate(){
        if(this.month == 2){
            alert('2개월은 입력할 수 없습니다.'),
            this.month = 3
        }
    },


    watch : {
        month(a){
            if (isNaN(a) == true) {
                alert('숫자로 입력하세요'),
                this.month = 1
            }
        }
    },

    props : {
        oneroom: Array,
        isModalOpen: Boolean,
        buttonPush: Number,
    },
    methods : {

    }
}
</script>

<style>

</style>