<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_gift.png" alt="icon">
            <div class="text_2">
                <div class="gift_receive" v-if="popupGift.mingle_gift_add_point === 'AUTH' && popupGift.mingle_no === '1'">
                  <b>잼버리 코스</b> 완성!!<br/>
                  <span>축하합니다!!</span>
                </div>
                <div class="gift_receive" v-else-if="popupGift.mingle_gift_add_point === 'AUTH' && popupGift.mingle_no === '14'">
                  <b>봉사점수 신청하기</b><br/>
                </div>
                <!-- 태백 거주자 필터 -->
                <div class="gift_receive" v-else-if="popupGift.mingle_no === '15' && memberInfo.address.indexOf('태백시') > -1">
                  <b>신청 불가</b><br/><br/>
                  <span>모바일 상품권은 태백시 관내<br>거주민에게는 제공되지 않습니다.</span>
                </div>
                <!-- 이응노 팝업 -->
                <div class="gift_receive" v-else-if="popupGift.mingle_no === '25'">
                  <b>완주를 축하합니다!</b><br><br>
                  <span class="colorfont">미술관 벽면</span>에서 미디어 파사드를<br>
                  통해 스탬프 <span class="colorfont">완주자 정보</span>를<br>
                  <span class="colorfont">확인</span>할 수 있습니다.<br><br>
                  선물보기 > <span class="colorfont">인증관련</span><br>
                  <span class="colorfont">안내를 확인</span>하세요.
                </div>
                <div class="gift_receive" v-else>
                  <b>{{popupGift.mingle_count}}{{unit}}</b> 달성!!<br/>
                  <span>축하합니다!!</span>
                </div>
                <span v-if="popupGift.mingle_no !== '25'">
                    <img :src="imgIcon()" alt="gs25"><br/>
                    {{popupGift.mingle_gift_title}}
                </span>
                <div class="agree_pop" v-if="agreeCheck">
                  <div class="notice">Notice</div>
                  <div class="agree_title">
                    개인정보 제3자 제공 동의가 필요합니다.
                  </div>
                  <div class="agree_desc">
                    • 수집/이용 목적<br>
                    <span>선물 발급 통계정보 작성</span><br/>
                    • 개인 정보 항목<br>
                    <span>연락처, 주소, 이름, 성별, 생년월일</span><br/>
                    • 보유기간 : <span>1년</span>
                  </div>
                  <div class="agree_info">
                    <div class="tit">주소</div>
                    <span>{{memberInfo.address || '정보 없음'}}</span>
                    <div class="tit">휴대폰</div>
                    <span>{{memberInfo.mobile || '정보 없음'}}</span>
                  </div>
                </div>
                <div class="check durunubi" v-if="popupGift.mingle_no === '16' && durunubiCheck === '0'">
                  <input type="checkbox" id="durunubi"  name="durunubi" @click="durunubiAgreeCheck($event)" v-model="durunubi"> <label for="durunubi">두루누비 계정확인</label>
                </div>
                <div class="check" v-if="agreeCheck">
                  <input type="checkbox" id="personal"  name="personal" v-model="personal"> <label for="personal">개인정보 제3자 제공동의</label>
                </div>
            </div>
            <button class="type1" :class="(popupGift.mingle_no === '25' || (popupGift.mingle_no === '15' && memberInfo.address.indexOf('태백시') > -1)) ? 'w100' : ''" @click="closeBtn">닫기</button>
            <button class="type2" @click="receiveGift" v-if="popupGift.mingle_no !== '25' && (popupGift.mingle_no !== '15' || memberInfo.address.indexOf('태백시') === -1)">{{receiveBtn(popupGift)}}</button>
        </div>
        <div class="loading_back" v-if="submitCheck">
          <img src="@/assets/images/ajax-loader.gif" alt="loader">
        </div>
        <PopupGiftPop v-if="popupNoti.open" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import PopupGiftPop from '@/components/popup/PopupGiftPop.vue'
export default {
  name: 'PopupGiftReceive',
  components: {
    PopupGiftPop
  },
  data () {
    return {
      durunubi: false,
      personal: false,
      agreeCheck: true,
      unit: ''
    }
  },
  computed: {
    ...mapState(['popupGift', 'mingleCode', 'memberInfo', 'stampCodeInfo', 'popupNoti', 'durunubiCheck', 'submitCheck'])
  },
  methods: {
    closeBtn () {
      // window.history.back()
      this.$store.dispatch('openPopupGift', {})
    },
    receiveGift () {
      if (!this.memberInfo.address || !this.memberInfo.mobile) {
        this.$store.dispatch('openNotiPopup', {
          tit1: '선물을 받기 위해<br/>아래의 정보가 필요합니다.',
          tit2: '주소, 휴대폰 번호'
        })
      } else {
        if (this.durunubiCheck === '0' && this.popupGift.mingle_no === '16') {
          this.$store.dispatch('openNotiPopup', {
            tit1: '두루누비 계정 확인이 필요합니다.',
            tit2: ''
          })
        } else if (!this.personal) {
          this.$store.dispatch('openNotiPopup', {
            tit1: '선물을 받기 위해<br/>개인정보 제3자 제공 동의가<br/>필요합니다.',
            tit2: ''
          })
        } else {
          if (this.popupGift.mingle_gift_add_point === 'AUTH') {
            let url = ''
            if (this.popupGift.mingle_no === '1') {
              url = 'https://goo.gl/forms/1pXkfZ9C31kLXMEJ3'
            } else if (this.popupGift.mingle_no === '11') {
              url = 'https://drive.google.com/open?id=17w8ksUmERZOKxlwf8z1ihAvQtFR66eOgqmzzn6dalTA'
            } else if (this.popupGift.mingle_no === '14') {
              if (this.popupGift.mingle_gift_order === '1') {
                url = 'https://drive.google.com/open?id=1JElD4SuEekkIk66yMdhFZaH6JLuxxoROikfR2bwlbTc'
              } else {
                url = 'https://drive.google.com/open?id=1LGPnKRK-Bom_v-mKo41-0kAOunyWg-rd6QI7H0ZrJR8'
              }
            } else if (this.popupGift.mingle_no === '18' || this.popupGift.mingle_no === '22') {
              if (this.$store.state.token !== '' && this.$store.state.token !== null) {
                if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
                  url = `https://m.tranggle.com/mingle/coursebook/auth/2?token=${this.$store.state.token}&mingleCode=${this.$store.state.mingleCode}`
                } else if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('iPad') > -1 || navigator.userAgent.toLowerCase().indexOf('iPod') > -1) {
                  url = `https://m.tranggle.com/mingle/coursebook/auth/2?token=${this.$store.state.token}_${this.$store.state.mingleCode}`
                }
              }
              // this.$store.dispatch('openPopupGift', {})
            } else if (this.popupGift.mingle_no === '23') {
              let tit23 = ''
              if (this.popupGift.mingle_gift_order === '1') {
                tit23 = '<b>축하합니다!!</b><br>금년도 12월 16일 이후 추첨을 통해 110명에게 [GS편의점 5,000원 교환권] 전달을 위해 개별적으로 연락 드릴 예정입니다.<br>감사합니다.'
              } else if (this.popupGift.mingle_gift_order === '2') {
                tit23 = '<b>축하합니다!!</b><br>선착순 10명에게 금년도 12월 16일 이후 [완주기념패] 전달을 위하여 개별적으로 연락을 드릴 예정입니다.<br>감사합니다.'
              } else if (this.popupGift.mingle_gift_order === '3') {
                tit23 = '<b>축하합니다!!</b><br>선착순 10명에게 금년도 12월 16일 이후 [완주기념패] 전달을 위하여 개별적으로 연락을 드릴 예정입니다.<br>감사합니다.'
              }
              this.$store.dispatch('openNotiPopup', {
                tit1: tit23,
                tit2: '',
                close: 'Y'
              })
            }
            if (url) {
              setTimeout(() => {
                appEvent.externalLinks(url)
              }, 10)
            }
          } else {
            if (!this.submitCheck) {
              // 머니콘 신청
              this.$store.state.submitCheck = true
              //  신청 로그 체크
              this.$store.dispatch('ApplyCheckMoneycon', { pGift: this.popupGift, mInfo: this.memberInfo })
            }
          }
        }
      }
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    },
    durunubiAgreeCheck (ev) {
      if (this.$store.state.token !== '' && this.$store.state.token !== null) {
        this.$store.dispatch('loadDurunubiCheck', this.$store.state.token)
      }
      setTimeout(() => {
        if (this.durunubiCheck === '0') {
          this.durunubi = false
          if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
            appEvent.externalLinks('https://www.durunubi.kr/12-2-0-login.do?os=android')
          } else if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
            appEvent.externalLinks('https://www.durunubi.kr/12-2-0-login.do?os=ios')
          }
        }
      }, 500)
    },
    agreeBtn () {
      if (this.memberInfo.address && this.memberInfo.mobile) {
        // alert('개인정보 제3자 제공에 동의하셨습니다.')
        this.$cookie.set('agree_security', 'Y', 9999)
        // this.popup = false
      }
    },
    agreeOn () {
      let className = ''
      if (this.memberInfo.address && this.memberInfo.mobile) {
        className = 'on'
      }
      return className
    },
    // goInsert () {
    //   localStorage.giftopen = JSON.stringify(this.popupGift)
    //   location.href = 'https://m.tranggle.com/mingle/intro/total_account_setting'
    // },
    setStamp () {
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode && data.info === 'point') {
          this.unit = 'P'
        } else if (data.code === this.mingleCode && data.info === 'number') {
          this.unit = '개'
        }
      })
    },
    receiveBtn (data) {
      let val = ''
      // if (data.mingle_gift_add_point === 'AUTH' && (this.mingleCode === '/GN62eV1c4Q78ghWNMWRsQ==' || this.mingleCode === 'QAAPpA7foDPqF3zEzdvHrw==' || this.mingleCode === 'vSi8Z9QlNS5wushabGnrhA==')) {
      if (data.mingle_gift_add_point === 'AUTH' && (data.mingle_no === '1' || data.mingle_no === '11' || data.mingle_no === '18' || data.mingle_no === '22')) {
        val = '인증서 신청하기'
      // } else if (data.mingle_gift_add_point === 'AUTH' && this.mingleCode === 'M0ZRcktVl8H3kJaRKq3Irg==') {
      } else if (data.mingle_gift_add_point === 'AUTH' && data.mingle_no === '14') {
        val = '봉사점수 신청하기'
      } else if (data.mingle_gift_add_point === 'AUTH' && data.mingle_no === '23') {
        val = '신청하기'
      } else {
        val = '모바일 상품권 받기'
      }
      return val
    }
  },
  watch: {
    personal () {
      if (this.personal) {
        this.agreeBtn()
      } else {
        this.$cookie.set('agree_security', 'N', 9999)
      }
    }
  },
  mounted () {
    this.setStamp()
    if (this.$cookie.get('agree_security') === 'Y') {
      this.personal = true
      this.agreeCheck = false
    }
    if (this.mingleCode === 'UQ3+JiYENuJBR+gw6zSYPA==') {
      this.agreeCheck = false
    }
    // window.onpopstate = history.onpushstate = (e) => {
    //   if (window.location.href.split('/').pop().indexOf('modal') === -1) {
    //     this.$store.dispatch('openPopupGift', {})
    //   }
    // }
  },
  destroyed () {
    // this.$router.go()
    if (this.$route.fullPath === '/allgift') {
      this.$store.dispatch('loadAllGiftData')
    } else {
      this.$store.dispatch('loadGiftData')
    }
  }
}
</script>
<style scoped>
  .colorfont {
    color: #3bb9fa;
  }
  .w100 {
    width: 100%!important;
    border:0!important;
  }
  .loading_back {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(15, 14, 14, 0.3);
    z-index: 999999;
  }
  .loading_back img {
    width:40px;
    position:absolute;
    top:315px;
    left:50%;
    margin-left: -20px;
  }
</style>
