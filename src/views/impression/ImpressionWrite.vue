<template>
    <div class="impression write_wrap">
        <Head type='back' name='write' title='방문 소감 작성' :registData="registData" :registImg="imgUploadList" />
        <article class="write">
          <!-- <h3>제목제목제목</h3> -->
          <input v-model="registData.title" class="impression_title" type="text" placeholder="제목을 입력하세요."/>
          <textarea v-model="userComment" class="impression_content" placeholder="내용을 입력하세요."></textarea>
          <div class="impression_upload">
            <!-- 이미지스와이퍼 -->
            <swiper :options="swiperOption" class="swiper">
              <swiper-slide
                v-for="(data,idx) in imgSrcList" :key="idx"
                :style="{'background': `url(${data}) center / cover no-repeat`}"
                class="slide">
                  <button class="upload_del" type="button" @click="delImgList(idx)"></button>
              </swiper-slide>
            </swiper>
            <!-- 파일등록 ui -->
            <div class="bar">
              <input id="impressAlbum" type="file" accept="image/*" @change="onChangeImages">
              <label for="impressAlbum" class="album"></label>
              <input id="impressCamera" type="file" accept="image/*" capture="camera" @change="onChangeImages"/>
              <label for="impressCamera" class="camera"></label>
            </div>
          </div>
        </article>
        <div class="loading" v-if="impressionComplete">
          <img src="@/assets/images/intro_loading.gif" alt="loader">
          <p>등록중입니다.</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'ImpressionWrite',
  components: {
    Head
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      },
      imgUploadList: [],
      imgSrcList: [],
      imageUrl: null,
      registData: {
        imageFile01: '',
        imageFile02: '',
        imageFile03: '',
        title: '',
        comment: '',
        badgeid: '',
        mingle_user_gift_no: ''
      },
      userComment: ''
    }
  },
  computed: {
    ...mapState(['impressionComplete'])
  },
  watch: {
    userComment () {
      this.registData.comment = this.userComment.replace(/(?:\r\n|\r|\n)/g, '<br/>')
    }
  },
  methods: {
    delImgList (idx) {
      this.imgUploadList.splice(idx, 1)
      this.imgSrcList.splice(idx, 1)
    },
    onChangeImages (e) {
      console.log(e.target.files)
      const file = e.target.files[0]
      this.imageUrl = URL.createObjectURL(file)
      if (this.imgSrcList.length > 3) {
        alert('이미지는 최대 3개까지 등록됩니다.')
      } else {
        this.imgUploadList.push(file)
        this.imgSrcList.push(this.imageUrl)
      }
    }
  },
  mounted () {
    if (this.$route.query.badge_id) {
      this.registData.badgeid = this.$route.query.badge_id
    }
    this.registData.mingle_user_gift_no = this.$route.query.giftCode || ''
  }
}
</script>
