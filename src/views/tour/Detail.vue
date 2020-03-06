<template>
  <div class="tour_detail">
    <!-- 헤더 -->
    <Head type='back' name='tour_detail' title="채석강 (전북 서해안권 국가지질공원)" />
    <div class="tour_sub_wrap">
        <StampSwiper />
        <StampInfo />
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import StampSwiper from '@/components/StampSwiper.vue'
import StampInfo from '@/components/StampInfo.vue'
export default {
  name: 'Detail',
  components: {
    Head,
    StampSwiper,
    StampInfo
  }
}
</script>
