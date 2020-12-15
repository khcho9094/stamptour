<template>
  <div>
    <div class="main" v-if="!introPopup">
      <!-- 헤더 -->
      <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
      <MainStamp />
      <MainGiftView />
      <MainRecommend />
      <MainList />
      <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
      <PopupGift />
      <PopupSns />
      <PopupStampSuccess v-if="popupStampSuccess" />
      <PopupMyStamp />
      <PopupRestart />
      <WonjuPopup1 v-if="mingleCode === '4k68KEPNtv/xCP0/x2Hirw==' && wonjuPopup1" />
      <WonjuPopup v-if="mingleCode === '4k68KEPNtv/xCP0/x2Hirw==' && wonjuPopup" />
      <WonjuPopup2 v-if="wonjuPopup2.open" />
      <!-- <WonjuPopup3 v-if="mingleCode === 'SzActcWN5QXozxDixoG4zQ==' && wonjuPopup3" /> -->
      <WonjuPopup4 v-if="mingleCode === 'YQTt4DYGRx7iBHRXs2IlPA==' && wonjuPopup4" />
      <KoGasPopup v-if="mingleCode === '0lDg6JT7iYoHXLAPV4p8wA==' && KoGasPopup" />
      <!-- <Thema10PopupOff v-if="mingleCode === 'iQxiUpF8ZfaGodRQJ6s0mg==' && thema10Stop" /> -->
    </div>
    <Intro v-else/>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Head from '@/components/Head.vue'
import MainStamp from '@/components/MainStamp.vue'
import MainGiftView from '@/components/MainGiftView.vue'
import MainRecommend from '@/components/MainRecommend.vue'
import MainList from '@/components/MainList.vue'
import Popup from '@/components/popup/PopupMenu.vue'
import PopupGift from '@/components/popup/PopupGift.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
import PopupStampSuccess from '@/components/popup/PopupStampSuccess.vue'
import Intro from '@/components/Intro.vue'
import PopupMyStamp from '@/components/popup/PopupMyStamp.vue'
import PopupRestart from '@/components/popup/PopupRestart.vue'
import WonjuPopup from '@/components/WonjuPopup.vue' // 원주1
import WonjuPopup1 from '@/components/WonjuPopup1.vue' // 원주2
import WonjuPopup2 from '@/components/WonjuPopup2.vue'
// import WonjuPopup3 from '@/components/WonjuPopup3.vue'
import WonjuPopup4 from '@/components/WonjuPopup4.vue'
import KoGasPopup from '@/components/KoGasPopup.vue'
// import Thema10PopupOff from '@/components/event/thema10/Thema10PopupOff.vue'
export default {
  name: 'Main',
  components: {
    Head,
    MainStamp,
    MainGiftView,
    MainRecommend,
    MainList,
    Popup,
    PopupGift,
    PopupSns,
    PopupStampSuccess,
    Intro,
    PopupMyStamp,
    PopupRestart,
    WonjuPopup,
    WonjuPopup1,
    WonjuPopup2,
    // WonjuPopup3,
    WonjuPopup4,
    KoGasPopup
    // Thema10PopupOff
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      visible: false,
      visibleGift: false,
      snsVisible: false,
      params: {
        order: 'pop',
        status: 'ALL',
        areaCode: '0',
        page: 1,
        view_count: 10
      }
    }
  },
  computed: {
    ...mapState(['popupStampSuccess', 'mingleCode', 'introPopup', 'stampCodeInfo', 'wonjuPopup1', 'wonjuPopup2', 'wonjuPopup3', 'wonjuPopup4', 'thema10Stop', 'KoGasPopup', 'wonjuPopup'])
  },
  methods: {
    handleMoreButton () {
      this.visible = !this.visible
    },
    handleMoreSnsButton () {
      this.snsVisible = !this.snsVisible
    }
  },
  beforeCreate () {
    if (this.$cookie.get('login_token') !== '') {
      this.$store.dispatch('loadStampTourJoin')
    }

    // 합산 해야 하는 스탬프투어 코드 쿠키 존재 여부 체크
    if (this.$cookie.get(this.$store.state.enc_member)) {
      if (/Android/i.test(navigator.userAgent)) {
        const data = JSON.parse(this.$cookie.get(this.$store.state.enc_member))
        let mingleCodeArr = ''
        let cnt = 1
        data.content.map(val => {
          if (data.content.length > cnt) {
            mingleCodeArr += `${val.code},`
          } else {
            mingleCodeArr += `${val.code}`
          }
          cnt += 1
        })
        this.$store.state.mingleCodeArr = mingleCodeArr
        this.$store.dispatch('loadPointSumApi')
      } else if ((/iPhone|iPad|iPod/i.test(navigator.userAgent))) {
        let iosData = this.$cookie.get(this.$store.state.enc_member)
        // iosData = iosData.substr(1).slice(0, -1)
        iosData = JSON.parse(iosData)
        let mingleCodeArr = ''
        let cnt = 1
        iosData.content.map(val => {
          if (iosData.content.length > cnt) {
            mingleCodeArr += `${val.code},`
          } else {
            mingleCodeArr += `${val.code}`
          }
          cnt += 1
        })
        this.$store.state.mingleCodeArr = mingleCodeArr
        this.$store.dispatch('loadPointSumApi')
      }
    }
    appEvent.chkCoordinate()
  },
  beforeMount () {
    if (localStorage.setIntroPopup) {
      this.$store.dispatch('setIntroPopup', true)
    }
    // 인트로 페이지로
    let mingleN = ''
    this.stampCodeInfo.map((data, idx) => {
      if (this.mingleCode === data.code) {
        mingleN = idx
      }
    })
    if (!this.$cookie.get(`setIntro${mingleN}`) && this.$route.query.mingleCode) {
      const query = Object.assign({}, this.$route.query)
      delete query.mingleCode
      this.$router.replace({ query })
      localStorage.setIntroPopup = 'Y'
      this.$store.dispatch('setIntroPopup', true)
    }
  },
  mounted () {
    if (this.$cookie.get('tour_100') === 'Y') {
      this.$store.state.wonjuPopup4 = false
    }
    if (this.$cookie.get('wonju_pop1') === 'Y') {
      this.$store.state.wonjuPopup1 = false
    }
    if (this.$cookie.get('kogas_pop') === 'Y') {
      this.$store.state.KoGasPopup = false
    }
    if (this.$cookie.get('wonju_pop') === 'Y') {
      this.$store.state.wonjuPopup = false
    }
    this.$store.state.lon = localStorage.getItem('setLon')
    this.$store.state.lat = localStorage.getItem('setLat')
    setTimeout(() => {
      const mingleCodeArr = this.$cookie.get('service_code')
      this.$store.state.mingleCodeArr = mingleCodeArr
      if (this.$store.state.token !== '') {
        this.$store.dispatch('loadPointSumApi')
      }
      this.$store.dispatch('loadMainData', this.params)
    }, 100)
  }
}
</script>
