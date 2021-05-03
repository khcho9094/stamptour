<template>
    <div class="search_result course_box">
        <!-- v-for -->
        <ul v-if="searchResult.length !== 0" class="list recent">
            <li v-for="(data, idx) in searchResult" v-bind:key="idx" @click="stampDetail(data)">
            <div
                class="box_lt"
                :style="{ 'background-image': `url(${data.mingle_badge_image})` }">
                <img :class="(data.user_mingle_badge_get_stamp_yn === 'N')?'p_icon':'c_icon'" :src="iconImg(data.mingle_badge_type, data.user_mingle_badge_get_stamp_yn)" alt="course_icon">
                <span v-show="data.user_mingle_badge_get_stamp_yn === 'N' && setStamp()">{{data.user_mingle_badge_point}}P</span>
                <div class="layer"></div>
            </div>
            <div class="box_rt">
                <h2>{{data.info_badge_name}}</h2>
                <p class="txt">여기에서 {{parseFloat(data.distance).toFixed(2)}}km
                  <span class="star">
                    <img :src="starIcon(data.user_mingle_star_cnt)" alt="" />
                    {{(data.user_mingle_star_cnt === '0.0') ? '별점없음' : data.user_mingle_star_cnt}}
                  </span>
                </p>
                <div class="stamp_count">
                    <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                    <span class="stxt">{{stampKind(data)}}</span>
                    <span class="snum">{{data.mingle_stat_badge_count || 0}}</span>
                    <span v-if="data.mingle_badge_category === 'BICYCLE'" class="cycle">자전거</span>
                </div>
                <div class="position" v-if="(data.mingle_badge_type === 'STAMP' || mingleCode === 'vSi8Z9QlNS5wushabGnrhA==' || mingleCode === 'xYwbII8pDWTT1VzPbK3E1g==') && data.user_mingle_badge_get_stamp_yn !== 'Y' && token" @click="stampAuth($event, data)">전자스탬프</div>
                <div class="stamp_badge" v-else-if="data.user_mingle_badge_get_stamp_yn === 'Y'" @click="stampClick($event ,data)">
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
        <p v-else class="no_result">검색 결과가 없습니다.</p>
        <div class="loading_box" v-if="loadingMainList">
          <img src="@/assets/images/ajax-loader.gif" alt="loader">
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'SearchResult',
  data () {
    return {
      progressData: this.localData()
    }
  },
  computed: {
    ...mapState(['profile', 'mingleCode', 'searchResult', 'stampCodeInfo', 'loadingMainList', 'searchInfo'])
  },
  methods: {
    stampClick (e, data) {
      console.log(data)
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
    stampDetail (sid) {
      if (sid.mingle_badge_id === '21524279') {
        // alert('코로나19 확산 예방을 위해, 고성 통일전망대가 잠정 폐쇄(2020년 2월 25일 ~ 무기한) 되었으므로 50코스 이용시 참고하여 주시기 바랍니다.')
        this.$store.state.wonjuPopup2.open = true
        this.$store.state.wonjuPopup2.data = sid
      } else {
        localStorage.stampDetail = JSON.stringify(sid)
        if (/Android/i.test(navigator.userAgent)) {
          // eslint-disable-next-line no-undef
          tranggle3.tranggle_callback('stamp_loc', `{lat:${sid.info_org_lat} ,lon:${sid.info_org_lon} ,badge_id:${sid.mingle_badge_id} }`)
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = `tranggle_callback://stamp_loc?lat=${sid.info_org_lat}&lon=${sid.info_org_lon}&badge_id=${sid.mingle_badge_id}`
        } else {
          return false
        }
      }
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
    },
    scrollBottom () {
      if (Math.ceil(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        this.$store.state.searchInfo.page++
        this.$store.dispatch('getSearchWord', this.searchInfo)
      }
    },
    starIcon (star) {
      const starScore = (star === '0.0') ? 'n' : 'p'
      return require(`@/assets/images/star_${starScore}.png`)
    }
  },
  beforeCreate () {
    appEvent.trackProgress()
  },
  created () {
    window.addEventListener('scroll', this.scrollBottom)
  },
  mounted () {
    // this.$store.dispatch('GetProfile')
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBottom)
    this.$store.state.searchResult = []
  }
}
</script>
