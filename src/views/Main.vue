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
    // 인트로 페이지로
    if (!this.$cookie.get('setIntro') && this.$route.query.mingleCode) {
      this.$router.push('/intro')
    }
    // 로그인페이지에서 total_stamp_yn 쿠키값 세팅
    if (this.$cookie.get('total_stamp_yn') === 'Y') {
      appEvent.chkCoordinate()
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
    }
  },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
