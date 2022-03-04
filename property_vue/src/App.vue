<template>

<!-- <div class="start" :class="{ end : isModalOpen }"> -->
<transition name="fade">
  <Modal 
  @closeModal="isModalOpen = false"
  :oneroom="oneroom" :buttonPush="buttonPush" :isModalOpen="isModalOpen" 
  />
</transition>

<div class="menu">
  <a v-for="a in menus" :key="a">{{a}}</a>
</div>

<Discount />

<button @click="priceLowSort">가격순정렬(내림차순)</button><br>
<button @click="priceHighSort">가격순정렬(오름차순)</button><br>
<button @click="priceTextSort">가격순정렬(가나다순)</button><br>
<button @click="sortBack">원래대로</button>

<div>
      <h1>원룸샵</h1>
</div>

<Card
@openModal="isModalOpen = true; buttonPush=$event" 
:oneroom="oneroom[oneroomIndex]"
v-for="(oneroomNumber,oneroomIndex) in oneroom" :key="oneroomNumber"
/>
</template>

<script>

import data from './data';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';



export default {
  
  name: 'App',
  data(){
    return{
      showDiscount : true,
      buttonPush : 0,
      oneroomOrigin : [...data],
      oneroom : data,
      isModalOpen : false,
      menus : ['Home', 'Shop','About' ]
    }
  },

  methods : {
    priceLowSort(){
      this.oneroom.sort(function(a,b){
        return a.price - b.price
      })
    },

    priceHighSort(){
      this.oneroom.sort(function(a,b){
        return b.price - a.price
      })
    },

    priceTextSort(){
      this.oneroom.sort(function(a,b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      })
    },


    sortBack(){
      this.oneroom = [...this.oneroomOrigin];
      }
    },

  // 기본 자스 문법: this 를 쓸 때 ()=>  <<< (애로우 function) 을 쓰면 더 잘 가져올 수 있음. 
  // 모든 vue에 사용 가능함. 
  mounted(){
    setInterval(()=>{
      this.showDiscount = false;
}, 1000);

  },

  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>




<style>
body{
  margin :0
}
div{
  box-sizing:border-box;
}

.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius:  8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.room-img{
  width: 100%;
  margin-top: 40px;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}

/* 모달창 오픈할때 애니메이션 */
.fade-enter-from{
  opacity:0;
  /* transform: translateY(-1000px); */
}
.fade-enter-active{
  transition: all 0.5s;
}
.fade-enter-to{
  opacity:1;
  /* transform: translateY(0px); */
}

/* 모달창 닫을때 애니메이션 */

.fade-leave-from{
  opacity:1;
}
.fade-leave-active{
  transition: all 0.5s;
}
.fade-leave-to{
  opacity:0;
}
</style>
