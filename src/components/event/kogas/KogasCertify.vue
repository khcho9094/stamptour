<template>
  <div class="thema10">
    <div class="thema10_wrap">
      <div class="title_box">
        <img src="@/assets/images/event/icon_title.png" alt="">
        <!-- {{thema10Status.log_event_name}} -->
        <span>{{thema10Status.event_getcount}}회 참여</span>
      </div>
      <!-- <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth1.png" alt="">
          유튜브 구독 인증
        </div>
        <div class="box" v-if="thema10Status.gps_log_auth_type === null && thema10Status.photo_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              한국가스공사 <span class="color">유튜브 구독</span><br><span class="mask">인증 사진</span>을 첨부해주세요.
            </div>
          </div>
          <div class="btn" @click="photoUpload(0, 'Edit')">
            + 인증사진 첨부
          </div>
          <div class="menu_btn" @click="thema10Main"></div>
        </div>
        <div class="box" v-else>
          <div class="auth_check">
            <div class="left">
              <div
                class="img_box"
                :class="thema10Status.photo_log_auth_type === 'PHOTO' ? 'img2' : 'img1'"
                :style="{ 'backgroundImage': `url(${thema10Status.photo_log_filename ? thema10Status.photo_log_filename : thema10Status.gps_log_filename})` }">
              </div>
              <div class="edit_btn" @click="photoUpload(0, 'Edit')" v-if="thema10Status.event_finish_chk !== 'Y' && !thema10Status.photo_log_auth_type">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진추가
              </div>
              <div class="edit_btn" @click="photoUpload(0, 'reEdit')" v-else-if="thema10Status.event_finish_chk !== 'Y' && thema10Status.photo_log_auth_type">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1" :class="thema10Status.photo_log_auth_type === 'PHOTO' ? 'type2' : 'type1'" v-text="thema10Status.photo_log_filename ? '인증사진 첨부 완료' : thema10Status.gps_log_badgename || '스탬프 이름 없음'"></div>
              <div class="txt2">{{thema10Status.photo_log_auth_type === 'PHOTO' ? '첨부' : '인증'}}일자  {{(thema10Status.photo_log_auth_type === 'PHOTO' && thema10Status.photo_log_datetime) ? thema10Status.photo_log_datetime.substring(0,10) : (thema10Status.gps_log_datetime) ? thema10Status.gps_log_datetime.substring(0,10) : ''}}</div>
              <div class="txt3" v-if="thema10Status.photo_log_auth_type !== 'PHOTO' && thema10Status.gps_log_auth_type === 'GPS'">
                <img src="@/assets/images/event/icon_person.png" alt="">
                <span class="ptc">참여자</span>
                <span class="count">{{thema10Status.gps_log_badge_getcount}}</span>
              </div>
            </div>
          </div>
          <img v-show="thema10Status.photo_log_auth_type === 'PHOTO'" class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div>
      </div> -->
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth2.png" alt="">
          영수증 인증
        </div>
        <div class="box" v-if="thema10Status.receipt_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              대구 지역에서 사용한 영수증 사진을<br>첨부 해주세요.<br>
              <span class="color">*1일 1회 인증 가능</span><br>
              <span class="mask">*5,000원 이상 구매 영수증만 인증 가능</span>
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
              <div class="edit_btn" @click="photoUpload(1, 'reEdit')" v-if="thema10Status.event_finish_chk !== 'Y'">
                <img src="@/assets/images/event/icon_edit.png" alt="">
                사진편집
              </div>
            </div>
            <div class="right">
              <div class="txt1 type2">영수증 첨부 완료</div>
              <div class="txt2">
                첨부일자  {{(thema10Status.receipt_log_datetime) ? thema10Status.receipt_log_datetime.substring(0,10) : ''}}
              </div>
            </div>
          </div>
          <img class="auth_complete" src="@/assets/images/event/complete.png" alt="">
        </div>
      </div>
      <div class="add_text">사진 첨부 후 <b>“이벤트 참여”</b> 버튼을 눌러주세요.</div>
    </div>
    <ul class="btn_box">
      <!-- <li @click="enterEvent">이벤트 참여</li> -->
      <li @click="enterEvent">이벤트 참여</li>
      <li @click="confirm">당첨 확인</li>
    </ul>
    <KogasExample :type="type" :edit="edit" />
    <KogasPopupPhoto />
    <KogasPopupNotice />
    <KogasPopupPI />
    <!-- <Thema10PopupReceipt /> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import KogasExample from '@/components/event/kogas/KogasExample.vue'
import KogasPopupPhoto from '@/components/event/kogas/KogasPopupPhoto.vue'
import KogasPopupNotice from '@/components/event/kogas/KogasPopupNotice.vue'
import KogasPopupPI from '@/components/event/kogas/KogasPopupPI.vue'
// import Thema10PopupReceipt from '@/components/event/thema10/Thema10PopupReceipt.vue'
export default {
  name: 'KogasCertify',
  data () {
    return {
      type: 0,
      edit: ''
    }
  },
  components: {
    KogasExample,
    KogasPopupPhoto,
    KogasPopupNotice,
    KogasPopupPI
    // Thema10PopupReceipt
  },
  computed: {
    ...mapState(['thema10Status', 'uploadSuccess', 'thema10Agree', 'mingleCode'])
  },
  methods: {
    photoUpload (type, photo) {
      if (this.$cookie.get(`kogasAuth_${type}`) === 'Y') {
        this.$store.dispatch('openPhotoPop', {
          open: true,
          type: type,
          edit: photo,
          msg: (photo === 'reEdit' && type === 0) ? 'receiptUpload' : ''
        })
      } else {
        this.type = type
        this.edit = photo
        this.$store.dispatch('openExamplePop', true)
      }
    },
    photoUploadStop () {
      alert('대한민국 안전여행 참여 이벤트는 사회적 거리두기 강화에 따라 8월 24일부로 잠정 중단됨을 알립니다.')
    },
    enterEvent () {
      let tit1 = ''
      let tit2 = ''
      if (this.thema10Status.receipt_authno) {
        if (this.thema10Agree === 'N') {
          this.$store.dispatch('openThemaAgree', {
            open: true
          })
          return false
        } else if (this.thema10Status.event_finish_chk === 'Y') {
          tit1 = '오늘의 이벤트 참여가<br>이미 완료되었습니다.'
          tit2 = '자정 이후 새로<br>이벤트에 참여 가능합니다.'
          this.$store.dispatch('openThemaNoti', {
            open: true,
            tit1: tit1,
            tit2: tit2
          })
        } else {
          this.$store.dispatch('ApplyKogasEvent', {
            gps_authno: this.thema10Status.gps_authno,
            photo_authno: this.thema10Status.photo_authno,
            receipt_authno: this.thema10Status.receipt_authno,
            badge_id: this.thema10Status.gps_log_badge_id
          })
          tit1 = '오늘의 이벤트 참여가<br>완료 되었습니다.'
          tit2 = '당첨은 매주 수요일 발표되며,<br>인증 현황 하단에 “당첨 확인” 버튼으로<br>확인 가능합니다.'
        }
      } else {
        if (this.thema10Status.event_finish_chk === 'Y') {
          tit1 = '오늘의 이벤트 참여가<br>이미 완료되었습니다.'
          tit2 = '자정 이후 새로<br>이벤트에 참여 가능합니다.'
        } else {
          if (this.thema10Status.receipt_authno === null) {
            tit1 = '이벤트에 참가하려면<br>영수증 사진을 첨부하세요.'
            tit2 = ''
          }
        }
      }
      this.$store.dispatch('openThemaNoti', {
        open: true,
        tit1: tit1,
        tit2: tit2
      })
    },
    confirm () {
      const url = 'https://www.facebook.com/kogas.kr'
      appEvent.externalLinks(url)
    },
    thema10Main () {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('go_stamp_main', '{ "mingle_code": "0lDg6JT7iYoHXLAPV4p8wA==" }')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://go_stamp_main?mingle_code=0lDg6JT7iYoHXLAPV4p8wA=='
      } else {
        return false
      }
    }
  },
  watch: {
    // 이미지 업로드 후 현황판 리로딩
    uploadSuccess: function (newQuestion, oldQuestion) {
      this.$store.dispatch('loadKogasStatus')
    }
  },
  mounted () {
    this.$store.dispatch('loadKogasStatus')
    this.$store.dispatch('KogasPsInfo', {
      phone: '',
      action: 'GET'
    })
  }
}
</script>
<style scoped>
  .thema10_wrap {
    padding: 18px 20px 60px;
  }
  .thema10_wrap .title_box {
    margin-bottom: 13px;
  }
  .thema10_wrap .auth_box {
    margin-bottom: 15px;
  }
  .add_text {
    text-align: center;
    font-size: 14px;
    color: #000;
    margin-bottom: 10px;
  }
</style>
