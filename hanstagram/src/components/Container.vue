<template>
<!-- Post 컴포넌트에 post데이터를 보내고 postdata에 저장된 배열만큼 반복출력(즉 모두 출력하는 구문) -->
        <div v-if="uiTab == 0">
        <Post
        :postData="postData[postIndex]"
        v-for="(postNum,postIndex) in postData" :key="postNum"
        />
        </div>
<!-- 컨테이너 하단 + 버튼을 클릭할 때 글쓰기 모드로 됨 -->
        <div v-if="uiTab == 1">
            <!-- 사진을 첨부하면 첨부된 사진을 출력 및 글쓰기 모드 -->
            <div class="upload-image" :style="`background-image:url(${imageFileSend})`"></div>
            <div class="write">
                <!-- 글을 작성하며 변수에 저장해야 하는데 해당 데이터는 부모컴포넌트(app)에 있으므로 emit을 이용하여 글 작성내용에 해당 데이터로 변경 요청 -->
                <textarea @input="$emit('writePost', $event.target.value)"
                class="write-box"></textarea>
            </div>
        </div>

</template>

<script>
import Post from './Post';


export default {
    name : 'Container',
    props : {
        // 해당 변수들은 모두 App.vue에 있으므로 데이터를 직접 수정할 수 없으므로 부모에서 받아옴.
        postData  : Array,
        uiTab : Number,
        imageFileSend : String,
    },
    components : {
        Post,
    }
}
</script>

<style>
@import '../style/containerStyle.css';
</style>