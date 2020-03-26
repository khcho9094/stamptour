<template>
  <div class="tour_detail">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' :title='stampCommon.title' />
    <div class="tour_sub_wrap">
        <StampSwiper :images='stampImage'  />
        <StampInfo :intro='stampIntro' :common='stampCommon' />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import StampSwiper from '@/components/StampSwiper.vue'
import StampInfo from '@/components/StampInfo.vue'
export default {
  name: 'Detail',
  components: {
    Head,
    StampSwiper,
    StampInfo
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['stampCommon', 'stampIntro', 'stampImage'])
  },
  methods: {
  },
  created () {
    this.$store.dispatch('loadTourDetail', JSON.parse(localStorage.tourDetail))
  },
  destroyed () {
    this.$store.state.stampCommon = {}
    this.$store.state.stampIntro = {}
    this.$store.state.stampImage = {}
  }
}
</script>
