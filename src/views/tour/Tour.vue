<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title="스탬프 투어로 즐기는 부안관광" />
    <div class="tour_sub_wrap">
        <TourSwiper />
        <TourPlace />
        <TourService />
    </div>
  </div>
</template>
<script>
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
  }
}
</script>
