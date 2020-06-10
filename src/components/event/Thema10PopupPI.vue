<template>
    <div class="pop_overay" v-if="themaPopAgree.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="gift_receive">
                  이벤트 참여를 위해<br>
                  개인정보 수집 및 이용 동의가<br>
                  필요합니다.
                </div>
                <div class="agree_pop">
                  <div class="notice">Notice</div>
                  <div class="agree_desc">
                    • 수집/이용 목적<br>
                    <span>당첨자 선정, 선물 발급, 통계 정보 작성</span><br/>
                    • 개인 정보 항목<br>
                    <span>연락처</span><br/>
                    • 보유기간 : <span>1년</span>
                  </div>
                  <div class="agree_info">
                    <div class="tit">휴대폰</div>
                    <span v-if="themaUserMobile">{{themaUserMobile}}</span>
                    <input v-else type="number" class="thema_phone" v-model="phone" maxlength="11">
                  </div>
                </div>
                <div class="check">
                  <input type="checkbox" id="personal1"  name="personal1" v-model="personal1"> <label for="personal1">개인정보 수집 및 이용 동의</label>
                  <span @click="view_agree" class="view_agree">약관보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
                </div>
                <div class="check">
                  <input type="checkbox" id="personal2"  name="personal2" v-model="personal2"> <label for="personal2">개인정보 제3자 제공 동의</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="receiveGift">등록</button>
        </div>
        <PopupGiftPop v-if="popupNoti.open" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import PopupGiftPop from '@/components/popup/PopupGiftPop.vue'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'Thema10PopupPI',
  components: {
    PopupGiftPop
  },
  data () {
    return {
      personal1: false,
      personal2: false,
      phone: ''
    }
  },
  computed: {
    ...mapState(['popupNoti', 'themaPopAgree', 'thema10Status', 'themaUserMobile'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openThemaAgree', {})
    },
    receiveGift () {
      if (!this.phone && !this.themaUserMobile) {
        this.$store.dispatch('openNotiPopup', {
          tit1: '이벤트 참여를 위해<br/>휴대폰 번호가 필요합니다.',
          tit2: ''
        })
      } else {
        if (!this.personal1) {
          this.$store.dispatch('openNotiPopup', {
            tit1: '선물을 받기 위해<br/>개인정보 수집 및 이용 동의가<br/>필요합니다.',
            tit2: ''
          })
        } else if (!this.personal2) {
          this.$store.dispatch('openNotiPopup', {
            tit1: '선물을 받기 위해<br/>개인정보 제3자 제공 동의가<br/>필요합니다.',
            tit2: ''
          })
        } else {
          let tit1 = ''
          let tit2 = ''
          this.$store.dispatch('Thema10PsInfo', {
            phone: this.themaUserMobile || this.phoneChange(this.phone),
            action: 'SET'
          })
          this.$store.dispatch('ApplyThema10Event', {
            gps_authno: this.thema10Status.gps_authno,
            photo_authno: this.thema10Status.photo_authno,
            receipt_authno: this.thema10Status.receipt_authno,
            badge_id: this.thema10Status.gps_log_badge_id
          })
          tit1 = '이벤트 참여가<br>완료 되었습니다.'
          tit2 = '당첨은 매월 25일 발표되며,<br>이벤트 참여 하단의 <span>"당첨 확인"</span><br>버튼으로 확인 가능합니다.'
          this.$store.dispatch('openThemaAgree', {})
          this.$store.dispatch('openThemaNoti', {
            open: true,
            tit1: tit1,
            tit2: tit2
          })
        }
      }
    },
    view_agree () {
      const url = 'https://m.tranggle.com/mingle/login/join_01_privacy_process?notitle=Y'
      appEvent.externalLinks(url)
    },
    phoneChange (phone) {
      const mobile = phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
      return mobile
    }
  },
  watch: {
    phone () {
      this.phone = this.phone.replace(/[^0-9]/g, '')
      return this.phone
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.dispatch('GetUserInfo', {
        member_id: this.thema10Status.receipt_log_member_id || this.thema10Status.gps_log_member_id || ''
      })
    }, 100)
    this.$store.dispatch('GetUserInfo', {
      member_id: this.thema10Status.receipt_log_member_id || this.thema10Status.gps_log_member_id || ''
    })
  },
  destroyed () {
  }
}
</script>
