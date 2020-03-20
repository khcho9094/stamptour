<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='gift' title="스탬프 교환 상품" />
    <div class="tour_sub_wrap">
        <GiftPoint />
        <GiftList />
        <GiftGuide />
        <PopupGiftReceive />
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import GiftPoint from '@/components/GiftPoint.vue'
import GiftList from '@/components/GiftList.vue'
import GiftGuide from '@/components/GiftGuide.vue'
import PopupGiftReceive from '@/components/PopupGiftReceive.vue'
import { mapState } from 'vuex'
export default {
  name: 'Gift',
  components: {
    Head,
    GiftPoint,
    GiftList,
    GiftGuide,
    PopupGiftReceive
  },
  computed: {
    ...mapState(['token'])
  },
  mounted () {
    if (this.token) {
      this.$store.dispatch('loadGiftData')
    } else {
      this.$store.dispatch('loadGiftNoToken')
    }
  }
}
</script>
