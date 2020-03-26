<template>
  <div>
    <div class="main" v-if="!introPopup">
      <!-- 헤더 -->
      <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
      <MainStamp />
      <MainGiftView v-if="this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg=='" />
      <MainRecommend />
      <MainList />
      <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
      <PopupGift />
      <PopupSns />
      <PopupStampSuccess v-if="popupStampSuccess" />
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
import Popup from '@/components/PopupMenu.vue'
import PopupGift from '@/components/PopupGift.vue'
import PopupSns from '@/components/PopupSns.vue'
import PopupStampSuccess from '@/components/PopupStampSuccess.vue'
import Intro from '@/components/Intro.vue'
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
    Intro
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
        areaCode: '0'
      }
    }
  },
  computed: {
    ...mapState(['popupStampSuccess', 'mingleCode', 'introPopup'])
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
        console.log(mingleCodeArr)
        this.$store.state.mingleCodeArr = mingleCodeArr
        this.$store.dispatch('loadPointSumApi')
      }
    }
    // 로그인페이지에서 total_stamp_yn 쿠키값 세팅
    if (this.$cookie.get('total_stamp_yn') === 'Y') {
      appEvent.chkCoordinate()
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
    }
  },
  beforeMount () {
    // 인트로 페이지로
    if (!this.$cookie.get('setIntro') && this.$route.query.mingleCode) {
      const query = Object.assign({}, this.$route.query)
      delete query.mingleCode
      this.$router.replace({ query })
      this.$store.dispatch('setIntroPopup', true)
    }
  },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
