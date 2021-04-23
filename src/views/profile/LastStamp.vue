<template>
  <div class="profile_detail">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='최근 찍은 스탬프' />
    <div class="course_box laststamp_wrap">
      <p>* 최근 1달간의 획득 스탬프가 표시됩니다.</p>
      <p v-if="badgeStamp.length === 0" class="no_result">최근 획득 스탬프가 없습니다.</p>
      <ul>
        <li v-for="(data, idx) in badgeStamp" v-bind:key="idx">
          <div class="mystamp" @click="RecentStampPopup(data)">
            <img :src="data.mingle_stamp_image" alt="mystamp">
          </div>
          <span>{{data.info_badge_name}}</span>
          <div class="star">
            <img :src="starIcon(data.star_point)" alt="" />
            {{(data.star_point === '0.0') ? '별점없음' : data.star_point}}
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
    },
    starIcon (star) {
      const starScore = (star === '0.0') ? 'n' : 'p'
      return require(`@/assets/images/star_${starScore}.png`)
    }
  },
  watch: {
    badgeStamp () {
      console.log(this.badgeStamp)
    }
  },
  mounted () {
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['badgeStamp', 'openProfileStamp'])
  }
}
</script>
<style>
  body {
    background-color: #f7f8f9;
  }
</style>
