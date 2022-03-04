<template>
  <div>
    <img :src="oneroom.image" class="room-img">
    <h4 @click="openModalFunc">{{oneroom.title}}</h4>
    <p>{{oneroom.price}}원</p>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props : {
        oneroom: Object,
        isModalOpen: Boolean,
        buttonPush: Number,
    },

methods : {
    openModalFunc(){
        this.$emit('openModal', this.oneroom.id)
    }
},

}
</script>

<style>

</style>