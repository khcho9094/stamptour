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
  beforeCreate () {
    if (this.$route.query.mingleCode) {
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
      this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
    }
  },
  mounted () {
    this.$store.dispatch('loadStampData', {
      mingle_badge_id: this.$route.query.badge_id,
      mingle_badge_content_type: this.$route.query.contentTypeId,
      mingle_badge_content_id: this.$route.query.contentId
    })
    // this.$store.dispatch('loadStampData', JSON.parse(localStorage.stampDetail))
  },
  destroyed () {
    this.$store.state.stampCommon = {}
    this.$store.state.stampIntro = {}
    this.$store.state.stampImage = {}
    this.$store.state.stampMethod = {}
  }
}
</script>
