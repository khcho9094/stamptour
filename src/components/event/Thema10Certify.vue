<template>
  <div class="thema10">
    <div class="thema10_wrap">
      <div class="title_box">
        <img src="@/assets/images/event/icon_title.png" alt="">
        7월 이벤트
        <span>1회 참여</span>
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth1.png" alt="">
          관광지 방문 인증
        </div>
        <div class="box">
          <div class="desc">
            <div class="p_center">
              <span class="underline">테마 10선 관광지 방문 시</span>
              <span class="color">자동인증!</span><br>
              인증이 안될시, 사진을 첨부해주세요.
            </div>
          </div>
          <div class="btn" @click="photoUpload(0)">
            + 인증사진 첨부
          </div>
          <div class="menu_btn"></div>
        </div>
        <!-- <div class="box">
          <div class="auth_check">
            <div class="left">
              <div class="img_box img1"></div>
              <div class="edit_btn">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1 type1">굽이길</div>
              <div class="txt2">인증일자  2020.07.18</div>
              <div class="txt3">
                <img src="@/assets/images/event/icon_person.png" alt="">
                <span class="ptc">참여자</span>
                <span class="count">148</span>
              </div>
            </div>
          </div>
          <img class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div> -->
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth2.png" alt="">
          숙박 영수증 인증
        </div>
        <div class="box">
          <div class="desc">
            <div class="p_center">
              <span class="underline">숙박 영수증 사진을 </span>
              첨부 해부세요.
            </div>
          </div>
          <div class="btn" @click="photoUpload(1)">
            + 영수증 첨부
          </div>
        </div>
        <!-- <div class="box">
          <div class="auth_check">
            <div class="left">
              <div class="img_box img2"></div>
              <div class="edit_btn">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1 type2">영수증 첨부 완료</div>
              <div class="txt2">첨부일자  2020.07.18</div>
            </div>
          </div>
          <img class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div> -->
      </div>
    </div>
    <ul class="btn_box">
      <li>이벤트 참여</li>
      <li>당첨 확인</li>
    </ul>
    <Thema10Example :visible="showExample" :type="type" />
    <Thema10PopupPhoto :visible="showPhoto" />
  </div>
</template>
<script>
import Thema10Example from '@/components/event/Thema10Example.vue'
import Thema10PopupPhoto from '@/components/event/Thema10PopupPhoto.vue'
export default {
  name: 'Thema10Certify',
  data () {
    return {
      showExample: false,
      showPhoto: false,
      type: 0
    }
  },
  components: {
    Thema10Example,
    Thema10PopupPhoto
  },
  methods: {
    photoUpload (type) {
      console.log(type)
      this.type = type
      this.showExample = true
    }
  }
}
</script>
