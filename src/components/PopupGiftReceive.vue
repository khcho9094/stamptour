<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_gift.png" alt="icon">
            <div class="text_2">
                <div class="gift_receive" v-if="popupGift.mingle_gift_add_point === 'AUTH' && mingleCode ==='/GN62eV1c4Q78ghWNMWRsQ=='">
                  <b>잼버리 코스</b> 완성!!<br/>
                  <span>축하합니다!!</span>
                </div>
                <div class="gift_receive" v-else-if="popupGift.mingle_gift_add_point === 'AUTH' && mingleCode ==='M0ZRcktVl8H3kJaRKq3Irg=='">
                  <b>봉사점수 신청하기</b><br/>
                </div>
                <div class="gift_receive" v-else>
                  <b>{{popupGift.mingle_count}}{{unit}}</b> 달성!!<br/>
                  <span>축하합니다!!</span>
                </div>
                <span>
                    <img :src="imgIcon()" alt="gs25">
                    {{popupGift.mingle_gift_title}}
                </span>
                <div class="check durunubi" v-if="mingleCode === 'SzActcWN5QXozxDixoG4zQ=='">
                  <input type="checkbox" id="durunubi"  name="durunubi" @click="durunubiCheck($event)" v-model="durunubi"> <label for="durunubi">두루누비 계정확인</label>
                </div>
                <div class="check">
                  <input type="checkbox" id="personal"  name="personal" v-model="personal" @click="popup = true"> <label for="personal">개인정보 제3자 제공동의</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <!-- <button class="type2" @click="receiveGift">모바일 상품권 받기</button> -->
            <button class="type2" @click="receiveGift">{{receiveBtn(popupGift)}}</button>
            <!-- 개인정보 확인 -->
            <div class="person_pop" v-show="popup">
              <div class="title">개인정보 제3자 제공동의가 필요합니다.</div>
              <div class="ptxt">
                <b>· 수집/이용 목적 : </b>쿠폰 발급 통계 정보 작성<br/>
                <b>· 개인정보 항목 : </b>연락처, 주소(시도), 이름<br/>
                <b>· 보유 기간 : </b>1년<br/>
                <div class="cont">
                  <b><font-awesome-icon icon="home" /> 주소 : </b><span class="nodata" v-if="!memberInfo.address" @click="goInsert">터치시 계정정보로 이동</span><span class="data" v-else>{{memberInfo.address}}</span><br/>
                  <b><font-awesome-icon icon="mobile-alt" class="phone" /> 휴대폰 : </b><span class="nodata" v-if="!memberInfo.mobile" @click="goInsert">터치시 계정정보로 이동</span><span class="data" v-else>{{memberInfo.mobile}}</span>
                </div>
                <div class="agree">
                  <span :class="agreeOn()" class="btn" @click="agreeBtn">동의</span>
                  <span @click="popup = false, personal = false">닫기</span>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'PopupGiftReceive',
  data () {
    return {
      durunubi: false,
      personal: false,
      popup: false,
      unit: ''
    }
  },
  computed: {
    ...mapState(['popupGift', 'mingleCode', 'memberInfo', 'stampCodeInfo'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openPopupGift', {})
    },
    receiveGift () {
      if (!this.durunubi && this.mingleCode === 'SzActcWN5QXozxDixoG4zQ==') {
        alert('두루누비 계정 확인이 필요합니다.')
      } else if (!this.personal) {
        alert('개인정보 제3자 제공동의가 필요합니다.')
      } else {
        if (this.popupGift.mingle_gift_add_point === 'AUTH') {
          let url = ''
          if (this.mingleCode === '/GN62eV1c4Q78ghWNMWRsQ==') {
            url = 'https://goo.gl/forms/1pXkfZ9C31kLXMEJ3'
          } else if (this.mingleCode === 'QAAPpA7foDPqF3zEzdvHrw==') {
            url = 'https://drive.google.com/open?id=17w8ksUmERZOKxlwf8z1ihAvQtFR66eOgqmzzn6dalTA'
          } else if (this.mingleCode === 'M0ZRcktVl8H3kJaRKq3Irg==') {
            if (this.popupGift.mingle_user_gift_no === '433145') {
              url = 'https://drive.google.com/open?id=1JElD4SuEekkIk66yMdhFZaH6JLuxxoROikfR2bwlbTc'
            } else {
              url = 'https://drive.google.com/open?id=1LGPnKRK-Bom_v-mKo41-0kAOunyWg-rd6QI7H0ZrJR8'
            }
          } else if (this.mingleCode === 'vSi8Z9QlNS5wushabGnrhA==') {
            url = 'https://drive.google.com/open?id=1XCxQGyTe4KRGUH_U40AKZ0SDmRqDYYwH2KCIWKnlz5M'
          }
          if (url) {
            appEvent.externalLinks(url)
          }
        } else {
          this.$store.dispatch('loadGiftReceive', { pGift: this.popupGift, mInfo: this.memberInfo })
        }
      }
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    },
    durunubiCheck (ev) {
      this.$store.dispatch('loadDurunubiCheck', this.$cookie.get('login_token'))

      if (this.$store.state.durunubiCheck === 0) {
        if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
          appEvent.externalLinks('https://www.durunubi.kr/12-2-0-login.do?os=android')
        } else if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
          appEvent.externalLinks('https://www.durunubi.kr/12-2-0-login.do?os=ios')
        }
      }
    },
    agreeBtn () {
      if (this.memberInfo.address && this.memberInfo.mobile) {
        alert('개인정보 제3자 제공에 동의하셨습니다.')
        this.popup = false
      } else {
        alert('개인정보를 모두 입력해주세요.')
      }
    },
    agreeOn () {
      let className = ''
      if (this.memberInfo.address && this.memberInfo.mobile) {
        className = 'on'
      }
      return className
    },
    goInsert () {
      localStorage.giftopen = JSON.stringify(this.popupGift)
      location.href = 'https://stage.m.tranggle.com:4081/mingle/intro/total_account_setting'
    },
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
      if (data.mingle_gift_add_point === 'AUTH' && (this.mingleCode === '/GN62eV1c4Q78ghWNMWRsQ==' || this.mingleCode === 'QAAPpA7foDPqF3zEzdvHrw==' || this.mingleCode === 'vSi8Z9QlNS5wushabGnrhA==')) {
        val = '인증서 신청하기'
      } else if (data.mingle_gift_add_point === 'AUTH' && this.mingleCode === 'M0ZRcktVl8H3kJaRKq3Irg==') {
        val = '봉사점수 신청하기'
      } else {
        val = '모바일 상품권 받기'
      }
      console.log(data)
      return val
    }
  },
  mounted () {
    this.$store.dispatch('loadGiftDataNew')
    this.setStamp()
  },
  destroyed () {
    // this.$router.go()
    this.$store.dispatch('loadGiftData')
  }
}
</script>
