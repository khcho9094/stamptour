<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title="스탬프명" />
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
  name: 'Stamp',
  components: {
    Head,
    StampSwiper,
    StampInfo
  }
}
</script>
