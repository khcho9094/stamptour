<template>
  <div class="profile_detail">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='최근 찍은 스탬프' />
    <div class="course_box laststamp_wrap">
      <p>* 최근 1달간의 방문 스탬프가 표시됩니다.</p>
      <ul>
        <li v-for="(data, idx) in profile.badge_stamp" v-bind:key="idx">
          <div class="mystamp" @click="RecentStampPopup(data)">
            <img :src="data.mingle_stamp_image" alt="mystamp">
          </div>
          <span>{{data.info_badge_name}}</span>
          <div class="star">
            <img src="@/assets/images/star_n.png" alt="" />
            <img src="@/assets/images/star_p.png" alt="" />
            4.0
          </div>
        </li>
      </ul>
    </div>
    <PopupProfileStamp :stampInfo="stampInfo"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import PopupProfileStamp from '@/components/popup/PopupProfileStamp.vue'
export default {
  name: 'LastStamp',
  components: {
    Head,
    PopupProfileStamp
  },
  data () {
    return {
      stampInfo: null
    }
  },
  methods: {
    RecentStampPopup (item) {
      this.$store.state.openProfileStamp = true
      this.stampInfo = item
    }
  },
  mounted () {
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['profile', 'openProfileStamp'])
  }
}
</script>
<style>
  body {
    background-color: #f7f8f9;
  }
</style>
