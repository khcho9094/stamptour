<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' :title='introData.mingle_title' />
    <div class="tour_sub_wrap">
        <TourSwiper :introData='introData' :introImage='introImage'/>
        <TourPlace />
        <TourService />
        <PopupSns />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Head from '@/components/Head.vue'
import TourSwiper from '@/components/TourSwiper.vue'
import TourPlace from '@/components/TourPlace.vue'
import TourService from '@/components/TourService.vue'
import PopupSns from '@/components/PopupSns.vue'
export default {
  name: 'Tour',
  components: {
    Head,
    TourSwiper,
    TourPlace,
    TourService,
    PopupSns
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    // 로그인페이지에서 total_stamp_yn 쿠키값 세팅
    if (this.$cookie.get('total_stamp_yn') === 'Y') {
      appEvent.chkCoordinate()
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
    }
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
  },
  computed: {
    ...mapState(['introData', 'introImage'])
  }
}
</script>
