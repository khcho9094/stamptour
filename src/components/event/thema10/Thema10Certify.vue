<template>
  <div class="thema10">
    <div class="thema10_wrap">
      <div class="title_box">
        <img src="@/assets/images/event/icon_title.png" alt="">
        {{eventCount}}
        <span>{{thema10Status.event_getcount}}회 참여</span>
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth1.png" alt="">
          관광지 방문 인증
        </div>
        <div class="box" v-if="thema10Status.gps_log_auth_type === null && thema10Status.photo_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              <!-- <span class="underline">테마 10선 관광지 방문 시</span><br>
              <span class="color">자동인증</span>과 함께
              <span class="color">사진을 첨부</span>해주세요.<br> -->
              <!-- 테마 10선을 여행하고<br><span class="color">인증사진을 첨부</span> 해주세요.<br> -->
              대한민국 테마여행10선 여행지에서<br>마스크를 올바르게 착용한 사진을 첨부해주세요.<br>
              <span class="mask">* 마스크는 반드시 코와 입을 가려야 인정됩니다.</span>
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
      </div>
      <div class="auth_box">
        <div class="tit">
          <img src="@/assets/images/event/icon_auth2.png" alt="">
          숙박 영수증 인증
        </div>
        <div class="box" v-if="thema10Status.receipt_log_auth_type === null">
          <div class="desc">
            <div class="p_center">
              <!-- <span class="underline">숙박 영수증 or 숙박 이용내역서 </span><br>사진을 첨부해주세요.<br>
              <span class="mask">* 간이영수증은 인정되지 않습니다.</span> -->
              2020년 7월1일 ~ 8월22일, 10월26일 ~ 11월23일<br>숙박 내역만 응모 가능합니다.
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
      <li @click="enterEvent">이벤트 참여</li>
      <!-- <li @click="enterEventStop">이벤트 참여</li> -->
      <li @click="confirm">당첨 확인</li>
    </ul>
    <Thema10Example :type="type" :edit="edit" />
    <Thema10PopupPhoto />
    <Thema10PopupNotice />
    <Thema10PopupPI />
    <Thema10PopupReceipt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Thema10Example from '@/components/event/thema10/Thema10Example.vue'
import Thema10PopupPhoto from '@/components/event/thema10/Thema10PopupPhoto.vue'
import Thema10PopupNotice from '@/components/event/thema10/Thema10PopupNotice.vue'
import Thema10PopupPI from '@/components/event/thema10/Thema10PopupPI.vue'
import Thema10PopupReceipt from '@/components/event/thema10/Thema10PopupReceipt.vue'
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
    Thema10PopupNotice,
    Thema10PopupPI,
    Thema10PopupReceipt
  },
  computed: {
    ...mapState(['thema10Status', 'uploadSuccess', 'thema10Agree', 'mingleCode']),
    eventCount () {
      let msg = ''
      if (new Date() >= new Date('10/26/2020 00:00:00') && new Date() < new Date('11/16/2020 00:00:00')) {
        msg = '이벤트 1회차'
      } else if (new Date() >= new Date('11/16/2020 00:00:00') && new Date() < new Date('12/01/2020 00:00:00')) {
        msg = '이벤트 2회차'
      } else if (new Date() >= new Date('12/01/2020 00:00:00') && new Date() < new Date('12/16/2020 00:00:00')) {
        msg = '이벤트 3회차'
      } else if (new Date() >= new Date('12/16/2020 00:00:00') && new Date() < new Date('12/31/2020 23:59:59')) {
        msg = '이벤트 4회차'
      } else {
        msg = '이벤트 0회차'
      }
      return msg
    }
  },
  methods: {
    photoUpload (type, photo) {
      if (this.$cookie.get(`thema10Auth_${type}`) === 'Y') {
        this.$store.dispatch('openPhotoPop', {
          open: true,
          type: type,
          edit: photo,
          msg: (photo === 'reEdit' && type === 0) ? 'receiptUpload' : ''
        })
        // if (type === 0) {
        //   this.$store.dispatch('openPhotoPop', {
        //     open: true,
        //     type: type,
        //     edit: photo,
        //     msg: (photo === 'reEdit' && type === 0) ? 'receiptUpload' : ''
        //   })
        // } else {
        //   this.$store.dispatch('openReceiptPop', {
        //     open: true
        //   })
        // }
      } else {
        this.type = type
        this.edit = photo
        this.$store.dispatch('openExamplePop', true)
      }
    },
    // photoUploadStop () {
    //   alert('대한민국 안전여행 참여 이벤트는 사회적 거리두기 강화에 따라 8월 24일부로 잠정 중단됨을 알립니다.')
    // },
    enterEvent () {
      let tit1 = ''
      let tit2 = ''
      if (this.thema10Status.photo_authno && this.thema10Status.receipt_authno) {
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
          this.$store.dispatch('ApplyThema10Event', {
            gps_authno: this.thema10Status.gps_authno,
            photo_authno: this.thema10Status.photo_authno,
            receipt_authno: this.thema10Status.receipt_authno,
            badge_id: this.thema10Status.gps_log_badge_id
          })
          tit1 = '이벤트 참여가<br>완료 되었습니다.'
          tit2 = '당첨은 이벤트 참여 하단의 <span>"당첨 확인"</span><br>버튼으로 확인 가능합니다.'
        }
      } else {
        if (this.thema10Status.event_finish_chk === 'Y') {
          tit1 = '오늘의 이벤트 참여가<br>이미 완료되었습니다.'
          tit2 = '자정 이후 새로<br>이벤트에 참여 가능합니다.'
        } else {
          if (this.thema10Status.photo_authno === null) {
            tit1 = '이벤트에 참여하려면<br>관광지 방문 인증 사진을<br/>첨부해주세요.'
            tit2 = ''
          } else {
            tit1 = '이벤트에 참여하려면<br>숙박 영수증 or 숙박 이용내역서<br> 사진을 첨부해주세요.'
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
    enterEventStop () {
      alert('대한민국 안전여행 참여 이벤트는 사회적 거리두기 강화에 따라 8월 24일부로 잠정 중단됨을 알립니다.')
    },
    confirm () {
      const url = 'https://www.moneycon.co.kr/MCon-DataCollection/static/Client/view/index.html#/prize'
      appEvent.externalLinks(url)
      // let tit1 = ''
      // let tit2 = ''
      // if (this.thema10Status.event_apply_chk === 'N' && this.thema10Status.event_finish_chk === 'N') {
      //   tit1 = '인증을 모두 완료하고<br>이벤트에 참여해주세요.'
      //   tit2 = ''
      // } else {
      //   tit1 = '당첨자 발표 기간이 아닙니다.'
      //   tit2 = '당첨은 매월 7일에 발표됩니다.'
      // }
      // this.$store.dispatch('openThemaNoti', {
      //   open: true,
      //   tit1: tit1,
      //   tit2: tit2
      // })
    },
    thema10Main () {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('go_stamp_main', '{ "mingle_code": "iQxiUpF8ZfaGodRQJ6s0mg==" }')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://go_stamp_main?mingle_code=iQxiUpF8ZfaGodRQJ6s0mg=='
      } else {
        return false
      }
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
    this.$store.dispatch('Thema10PsInfo', {
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
