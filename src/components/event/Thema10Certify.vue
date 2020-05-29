<template>
  <div class="thema10">
    <div class="thema10_wrap">
      <div class="title_box">
        <img src="@/assets/images/event/icon_title.png" alt="">
        {{thema10Status.log_event_name}}
        <span>{{thema10Status.event_getcount}}회 참여</span>
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth1.png" alt="">
          관광지 방문 인증
        </div>
        <div class="box" v-if="thema10Status.gps_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              <span class="underline">테마 10선 관광지 방문 시</span>
              <span class="color">자동인증!</span><br>
              인증이 안될시, 사진을 첨부해주세요.
            </div>
          </div>
          <div class="btn" @click="photoUpload(0, 'Edit')">
            + 인증사진 첨부
          </div>
          <div class="menu_btn"></div>
        </div>
        <div class="box" v-else>
          <div class="auth_check">
            <div class="left">
              <div
                class="img_box"
                :class="thema10Status.gps_log_auth_type === 'GPS' ? 'img1' : 'img2'"
                :style="{ 'backgroundImage': `url(${thema10Status.gps_log_filename})` }">
              </div>
              <div class="edit_btn" @click="photoUpload(0, 'reEdit')" v-if="thema10Status.gps_log_auth_type === 'PHOTO'">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1" :class="thema10Status.gps_log_auth_type === 'GPS' ? 'type1' : 'type2'" v-text="thema10Status.gps_log_badgename ? thema10Status.gps_log_badgename : '인증사진 첨부 완료'"></div>
              <div class="txt2">{{thema10Status.gps_log_badgename ? '인증' : '첨부'}}일자  {{(thema10Status.gps_log_datetime) ? thema10Status.gps_log_datetime.substring(0,10) : ''}}</div>
              <div class="txt3" v-if="thema10Status.gps_log_auth_type === 'GPS'">
                <img src="@/assets/images/event/icon_person.png" alt="">
                <span class="ptc">참여자</span>
                <span class="count">{{thema10Status.gps_log_badge_getcount}}</span>
              </div>
            </div>
          </div>
          <img class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div>
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth2.png" alt="">
          숙박 영수증 인증
        </div>
        <div class="box" v-if="thema10Status.receipt_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              <span class="underline">숙박 영수증 사진을 </span>
              첨부 해부세요.
            </div>
          </div>
          <div class="btn" @click="photoUpload(1, 'Edit')">
            + 영수증 첨부
          </div>
        </div>
        <div class="box" v-else>
          <div class="auth_check">
            <div class="left">
              <div class="img_box img2" :style="{ 'backgroundImage': `url(${thema10Status.receipt_log_filename})` }"></div>
              <div class="edit_btn" @click="photoUpload(1, 'reEdit')">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1 type2">영수증 첨부 완료</div>
              <div class="txt2">첨부일자  {{(thema10Status.receipt_log_datetime) ? thema10Status.receipt_log_datetime.substring(0,10) : ''}}</div>
            </div>
          </div>
          <img class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div>
      </div>
    </div>
    <ul class="btn_box">
      <li @click="enterEvent">이벤트 참여</li>
      <li @click="confirm">당첨 확인</li>
    </ul>
    <Thema10Example :type="type" :edit="edit" />
    <Thema10PopupPhoto />
    <Thema10PopupNotice />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Thema10Example from '@/components/event/Thema10Example.vue'
import Thema10PopupPhoto from '@/components/event/Thema10PopupPhoto.vue'
import Thema10PopupNotice from '@/components/event/Thema10PopupNotice.vue'
export default {
  name: 'Thema10Certify',
  data () {
    return {
      type: 0,
      edit: ''
    }
  },
  components: {
    Thema10Example,
    Thema10PopupPhoto,
    Thema10PopupNotice
  },
  computed: {
    ...mapState(['thema10Status', 'uploadSuccess'])
  },
  methods: {
    photoUpload (type, photo) {
      if (this.$cookie.get(`thema10Auth_${type}`) === 'Y') {
        this.$store.dispatch('openPhotoPop', {
          open: true,
          type: type,
          edit: photo
        })
      } else {
        this.type = type
        this.edit = photo
        this.$store.dispatch('openExamplePop', true)
      }
    },
    enterEvent () {
      let tit1 = ''
      let tit2 = ''
      if (this.thema10Status.event_apply_chk === 'Y') {
        this.$store.dispatch('ApplyThema10Event', {
          gps_authno: this.thema10Status.gps_authno,
          photo_authno: this.thema10Status.photo_authno,
          receipt_authno: this.thema10Status.receipt_authno,
          badge_id: this.thema10Status.gps_log_badge_id
        })
        tit1 = '이벤트 참여가<br>완료 되었습니다.'
        tit2 = '당첨은 매월 17일 발표되며,<br>인증 현황 하단의 <span>"당첨 확인"</span><br>버튼으로 확인 가능합니다.'
      } else {
        tit1 = '이벤트에 참여하려면<br>인증을 모두 완료해주세요.'
        tit2 = ''
      }
      this.$store.dispatch('openThemaNoti', {
        open: true,
        tit1: tit1,
        tit2: tit2
      })
    },
    confirm () {
      let tit1 = ''
      let tit2 = ''
      if (this.thema10Status.event_apply_chk === 'N') {
        tit1 = '인증을 모두 완료하고<br>이벤트에 참여해주세요.'
        tit2 = ''
      } else {
        tit1 = '당첨자 발표 기간이 아닙니다.'
        tit2 = '당첨은 매월 17일에 발표됩니다.'
      }
      this.$store.dispatch('openThemaNoti', {
        open: true,
        tit1: tit1,
        tit2: tit2
      })
    }
  },
  watch: {
    // 이미지 업로드 후 현황판 리로딩
    uploadSuccess: function (newQuestion, oldQuestion) {
      this.$store.dispatch('loadThema10Status')
    }
  },
  mounted () {
    this.$store.dispatch('loadThema10Status')
  }
}
</script>
