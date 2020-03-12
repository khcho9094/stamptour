<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' :title='stampCommon.title' />
    <div class="tour_sub_wrap">
        <StampSwiper :method='stampMethod' :images='stampImage'  />
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
    this.$store.dispatch('loadStampData')
  }
}
</script>
