<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
    <MainStamp />
    <MainGiftView />
    <MainRecommend />
    <MainList />
    <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
    <PopupGift />
    <PopupSns />
    <PopupStampSuccess />
  </div>
</template>
<script>
// @ is an alias to /src
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
  methods: {
    handleMoreButton () {
      this.visible = !this.visible
    },
    handleMoreSnsButton () {
      this.snsVisible = !this.snsVisible
    }
  },
  beforeCreate () {
    // console.log(this.$cookie.get('setIntro'))
    // if (!this.$cookie.get('setIntro')) {
    //   this.$router.push('/intro')
    // }
    // if (this.$cookie.get('total_stamp_yn') === 'Y') {
    //   appEvent.chkCoordinate()
    //   this.$store.state.lon = localStorage.getItem('setLon')
    //   this.$store.state.lat = localStorage.getItem('setLat')
    // }
  },
  // beforeMount () {
  //   this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
  // },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
