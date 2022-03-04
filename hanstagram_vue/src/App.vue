<template>
<!-- 상단 cancel Finish 버튼 -->
<div class="header">
    <ul class="header-button-left">
      <li v-if="uiTab == 1" @click="uiTab--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="uiTab == 1" @click="publishPost()">Finish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

<!-- 컴포넌트 컨테이너에 postdata, uiTab, 이미지파일URL, post시 작성된 text전송 -->
  <Container 
  :postData='postData' 
  :uiTab='uiTab'
  :imageFileSend='imageFileSend'
  @writePost="writePostText = $event"
  />
  <div>
    
    <!-- 컨테이너 하단의 게시글 더보기 동작 기능 -->
    <button v-if="uiTab == 0" class="more-post-request-button" @click="morePost">게시글 더보기</button>
  </div>
  <div class="footer">
    <ul class="footer-button-plus" v-if="uiTab == 0">
      <input @change="uploadImage" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
// 컨테이너를 컴포넌트화 하기 위해 불러옴
import Container from './components/Container';
// 데이터를 따로 postdata.js파일에 보관하여 불러옴
import postData from './postdata.js';
// API를 요청받기 위해 axios를 사용
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      // 글 데이터
      postData : postData,
      // 글을 업로드 하기 위한 화면 전환을 나타내는 변수 (0은 기본, 1은 글쓰기 모드)
      uiTab : 0,
      // 글 업로드시 파일 경로 저장
      imageFileSend : '',
      // 글 업로드시 텍스트 저장
      writePostText : ''
    }
  },
  components: {
    Container,
  },
  methods :{
    // 게시글 더보기 요청을 할때 해당 API에 저장된 데이터를 get 호출 후 then()에 의하여 호출받은 데이터를 postdata에 추가로 저장함.
    morePost(){
      axios
      .get('https://gist.githubusercontent.com/WhiteHairHAN/1e0f948315263ca18bb6b199b0a02b3c/raw/35f35b6ccce138def4f8e599c3f8bb935ea09481/ExtraData.json')
      .then((morePostResult)=>{
        console.log(morePostResult);
        this.postData.push(morePostResult.data) //postdata.js에 새로운 데이터 추가
      })
    },
    // +버튼을 클릭할 때 이미지를 첨부하는 과정에서 이미지 경로를 저장하고, 화면전화변수 +1함
    uploadImage(e){
      let imageFile = e.target.files;
      let imageURL = URL.createObjectURL(imageFile[0]);
      this.imageFileSend = imageURL
      this.uiTab++;
    },
    // 사진첨부, 글 작성 완료후 Finish버튼을 클릭하면 수행하는 함수.. post를 data에 추가하여 최종적으로 출력하게 함.
    publishPost(){
      var addPost = {
        name: "Han Jaeyoon",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imageFileSend,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.writePostText,
        filter: "Ashine"
      };
      this.postData.unshift(addPost);
      this.uiTab = 0;
    }
  }
}
</script>

<style>
@import './style/appStyle.css';
</style>
