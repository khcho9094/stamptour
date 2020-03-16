<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' :title='stampCommon.title' />
    <div class="tour_sub_wrap">
        <StampSwiper :method='stampMethod.mingle_badge_type_desc' :images='stampImage'  />
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
  name: 'Stamp',
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
    ...mapState(['stampCommon', 'stampIntro', 'stampImage', 'stampMethod'])
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('loadStampData', JSON.parse(localStorage.stampDetail))
  },
  destroyed () {
    this.$store.state.stampCommon = {}
    this.$store.state.stampIntro = {}
    this.$store.state.stampImage = {}
    this.$store.state.stampMethod = {}
  }
}
</script>
