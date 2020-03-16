<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' :title='introData.mingle_title' />
    <div class="tour_sub_wrap">
        <TourSwiper :introData='introData' :introImage='introImage'/>
        <TourPlace />
        <TourService />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import TourSwiper from '@/components/TourSwiper.vue'
import TourPlace from '@/components/TourPlace.vue'
import TourService from '@/components/TourService.vue'
export default {
  name: 'Tour',
  components: {
    Head,
    TourSwiper,
    TourPlace,
    TourService
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
  },
  computed: {
    ...mapState(['introData']),
    ...mapState(['introImage'])
  }
}
</script>
