<template>
  <div class="profile_detail">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='최근 조회 스탬프' />
    <div class="course_box">
      <p>* 최근 1달간의 조회 스탬프가 표시됩니다.</p>
      <p v-if="badgeSearch.length === 0" class="no_result">최근 조회 스탬프가 없습니다.</p>
      <ul v-else class="list recent">
        <li v-for="(data, idx) in badgeSearch" v-bind:key="idx">
          <div
            class="box_lt"
            :style="{ 'background-image': `url(${data.mingle_badge_image})` }">
              <img :class="(data.user_mingle_badge_get_stamp_yn === 'N')?'p_icon':'c_icon'" :src="iconImg(data.mingle_badge_type, data.user_mingle_badge_get_stamp_yn)" alt="course_icon">
              <span v-show="data.user_mingle_badge_get_stamp_yn === 'N' && setStamp()">{{data.user_mingle_badge_point}}P</span>
              <div class="layer"></div>
          </div>
          <div class="box_rt">
              <h2>{{data.info_badge_name}}</h2>
              <p class="txt">여기에서 {{parseFloat(data.distance).toFixed(2)}}km</p>
              <div class="stamp_count">
                  <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                  <span class="stxt">{{stampKind(data)}}</span>
                  <span class="snum">{{data.mingle_stat_badge_count || 0}}</span>
                  <span v-if="data.mingle_badge_category === 'BICYCLE'" class="cycle">자전거</span>
              </div>
              <div class="position" v-if="(data.mingle_badge_type === 'STAMP' || mingleCode === 'vSi8Z9QlNS5wushabGnrhA==' || mingleCode === 'xYwbII8pDWTT1VzPbK3E1g==') && data.user_mingle_badge_get_stamp_yn !== 'Y' && token" @click="stampAuth($event, data)">전자스탬프</div>
              <div class="stamp_badge" v-else-if="data.user_mingle_badge_get_stamp_yn === 'Y'" @click="stampClick($event ,data)">
                <!-- <img src="@/assets/images/dummy_img/stamp.png" alt=""> -->
                <img :src="data.mingle_stamp_image" alt="">
              </div>
              <div class="progress_box" v-if="progressOn(data)">
                  <div class="p_back">
                      <div class="progress" :style="{'width':progressWidth(data)}"></div>
                  </div>
                  <span>{{progressWidth(data)}}</span>
              </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'LastVisit',
  components: {
    Head
  },
  data () {
    return {
      progressData: this.localData()
    }
  },
  methods: {
    stampClick (e, data) {
      e.stopPropagation()
      this.$store.state.getStampImage = data.mingle_stamp_image
      this.$store.state.getStampName = data.info_badge_name
      this.$store.state.getStampDate = data.user_mingle_badge_stamp_date
      this.$store.state.getStampWhence = data.mingle_badge_img_whence
      const openChk = this.$store.state.stampOpen
      this.$store.dispatch('loadStampPopup', openChk)
    },
    iconImg (type, stamp) {
      let iType = `couse_icon_${type.toLowerCase()}`
      if (stamp === 'Y') {
        iType = 'complete'
      }
      return require(`@/assets/images/${iType}.png`)
    },
    setStamp () {
      let tg = false
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode && data.info === 'point') {
          tg = true
        } else if (data.code === this.mingleCode && data.info === 'number') {
          tg = false
        }
      })
      return tg
    },
    stampKind (data) {
      let stamp = ''
      if (data.mingle_badge_type === 'BADGE') {
        stamp = '방문 스탬프'
      } else if (data.mingle_badge_type === 'TRACK') {
        stamp = '코스 스탬프'
      } else {
        stamp = '전자 스탬프'
      }
      return stamp
    },
    progressWidth (data) {
      let pdata = 0
      if (Object.keys(this.progressData).length) {
        this.progressData.content.map((val) => {
          if (data.mingle_badge_id === val.badge && val.rate > 0) {
            pdata = val.rate
          }
        })
      }
      return `${pdata}%`
    },
    progressOn (data) {
      let pOn = false
      if (Object.keys(this.progressData).length) {
        this.progressData.content.map((val) => {
          if (data.mingle_badge_id === val.badge && val.rate > 0) {
            pOn = true
          }
        })
      }
      return pOn
    },
    localData () {
      let val = {}
      if (/Android/i.test(navigator.userAgent) && localStorage.united_android) {
        val = JSON.parse(localStorage.united_android)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && localStorage.united_ios) {
        val = JSON.parse(localStorage.united_ios)
      }
      return val
    }
  },
  mounted () {
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['badgeSearch', 'mingleCode'])
  }
}
</script>
<style>
  body {
    background-color: #f7f8f9;
  }
</style>
