<template>
  <div class="main">
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
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import MainStamp from '@/components/MainStamp.vue'
import MainGiftView from '@/components/MainGiftView.vue'
import MainRecommend from '@/components/MainRecommend.vue'
import MainList from '@/components/MainList.vue'
import Popup from '@/components/PopupMenu.vue'
import PopupGift from '@/components/PopupGift.vue'
import PopupSns from '@/components/PopupSns.vue'
import PopupStampSuccess from '@/components/PopupStampSuccess.vue'
// import * as appEvent from '@/assets/js/app_event.js'
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
    PopupStampSuccess
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
    ...mapState(['popupStampSuccess', 'mingleCode'])
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
    // 인트로 페이지로
    if (!this.$cookie.get('setIntro') && this.$route.query.mingleCode) {
      this.$router.push('/intro')
    }
  },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
