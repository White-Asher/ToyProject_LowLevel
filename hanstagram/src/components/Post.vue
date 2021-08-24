<template>
  <div class="post">
    <!-- post에서 postdata에 저장된 프로필 이미지와 유저명을 출력함 -->
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${postData.userImage})`}"></div>
      <span class="profile-name" >{{postData.name}}</span>
    </div>
    <!-- post에서 postdata에 저장된 포스트이미지와 좋아요 수 유저 닉네임과 날짜를 출력함 -->
    <div class="post-body" :style="{ backgroundImage : `url(${postData.postImage})`}"></div>
    <div class="post-content">
      <p>{{postData.likes}} Likes</p>
      <p><strong>{{postData.filter}}</strong>  {{postData.content}}</p>
      <p class="date">{{postData.date}}</p>
    </div>
</div> 
</template>

<script>

export default {
    name : 'Post',
    props : {
      // 컨테이너 컴포넌트와 마찬가지로 post는 컨테이너의 자식 vue이므로 부모vue로부터 받아온 데이터를 직접수정할 수 없으므로 props를 통해 호출함. 
        postData  : Array,
    },
}
</script>

<style>
@import '../style/postStyle.css';
</style>