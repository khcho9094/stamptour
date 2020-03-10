<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='gift' title="스탬프 교환 상품" />
    <div class="tour_sub_wrap">
        <GiftPoint />
        <GiftList />
        <GiftGuide />
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import GiftPoint from '@/components/GiftPoint.vue'
import GiftList from '@/components/GiftList.vue'
import GiftGuide from '@/components/GiftGuide.vue'
export default {
  name: 'Gift',
  components: {
    Head,
    GiftPoint,
    GiftList,
    GiftGuide
  },
  mounted () {
    this.$store.dispatch('loadGiftData')
  }
}
</script>
