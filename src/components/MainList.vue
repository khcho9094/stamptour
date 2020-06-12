<template>
    <div class="course_box">
        <div class="sort">
            <span :class="{on: data.active}" @click="sortBtn(data.param, $event)" v-for="(data, idx) in sortList" v-bind:key="idx">{{data.name}}</span>
            <div class="complete_hide">
                <input type="checkbox" id="complete_off"  name="complete_off" @change="checkStatus($event)"> <label for="complete_off">완료 코스 숨기기</label>
            </div>
        </div>
        <div class="area_box" v-if="mingleCode === 'SzActcWN5QXozxDixoG4zQ==' || mingleCode === 'iQxiUpF8ZfaGodRQJ6s0mg==' || mingleCode === 'YQTt4DYGRx7iBHRXs2IlPA=='">
            <select name="areaInfo" id="areaInfo" v-model="params.areaCode" @change="setArea">
              <option v-bind:value="'0'">전체</option>
              <option v-for="(data, idx) in areaList" v-bind:key="idx" v-bind:value="data.mingle_area_code">
                {{data.mingle_area_title}}
              </option>
            </select>
        </div>
        <ul class="list">
            <li v-for="(data, idx) in mainStampList" v-bind:key="idx" @click="stampDetail(data)">
                <div
                  class="box_lt"
                  :style="{ 'background-image': `url(${data.mingle_badge_image})` }">
                    <img :class="(data.user_mingle_badge_get_stamp_yn === 'N')?'p_icon':'c_icon'" :src="iconImg(data.mingle_badge_type, data.user_mingle_badge_get_stamp_yn)" alt="course_icon">
                    <span v-show="data.user_mingle_badge_get_stamp_yn === 'N' && setStamp()">{{data.user_mingle_badge_point}}P</span>
                    <div class="layer"></div>
                </div>
                <div class="box_rt">
                    <h2>{{data.info_badge_name}}</h2>
                    <p class="txt">여기에서 {{parseInt(data.distance)}}km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">{{stampKind(data)}}</span>
                        <span class="snum">{{data.mingle_stat_badge_count || 0}}</span>
                        <span v-if="data.mingle_badge_category === 'BICYCLE'" class="cycle">자전거</span>
                    </div>
                    <div class="position" v-if="(data.mingle_badge_type === 'STAMP' || mingleCode === 'vSi8Z9QlNS5wushabGnrhA==') && data.user_mingle_badge_get_stamp_yn !== 'Y' && token" @click="stampAuth($event, data)">전자스탬프</div>
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
            <div class="loading_box" v-if="this.allStampCount > this.params.view_count">
              <img src="@/assets/images/ajax-loader.gif" alt="loader">
            </div>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'MainList',
  data () {
    return {
      sortList: [
        { name: '인기순', active: true, param: 'pop' },
        { name: '거리순', active: false, param: 'distance' }
      ],
      params: {
        order: 'pop',
        status: 'ALL',
        areaCode: '0',
        page: 1,
        view_count: 10
      },
      progressData: this.localData()
    }
  },
  computed: {
    ...mapState(['mainStampList', 'areaList', 'mingleCode', 'token', 'stampCodeInfo', 'allStampCount'])
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
    iconImg (type, stamp) {
      let iType = `couse_icon_${type.toLowerCase()}`
      if (stamp === 'Y') {
        iType = 'complete'
      }
      return require(`@/assets/images/${iType}.png`)
    },
    sortBtn (param, ev) {
      for (const i in this.sortList) {
        if (ev.target.className !== 'on') {
          this.sortList[i].active = !this.sortList[i].active
          this.params.order = param
          if (ev.target.innerText === this.sortList[i].name) {
            this.listCall()
          }
        }
      }
    },
    checkStatus (ev) {
      if (ev.target.checked) {
        this.params.status = 'FINISH'
      } else {
        this.params.status = 'ALL'
      }
      this.listCall()
    },
    setArea () {
      this.$store.dispatch('setAreaCode', this.params.areaCode)
      this.listCall()
    },
    listCall () {
      // this.$store.dispatch('loadMainData', this.params)
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
      setTimeout(() => {
        this.$store.dispatch('loadMainData', this.params)
      }, 100)
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
          window.location = `tranggle_callback://stamp_loc?lat=${sid.info_org_lat}&lon=${sid.info_org_lon}&badge_Id=${sid.mingle_badge_id}`
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
    stampAuth (e, data) {
      e.stopPropagation()
      // window.history.pushState({}, 'modal', '/modal')
      // this.$store.dispatch('loadBadgeRegister', data)
      // eslint-disable-next-line no-undef
      esp.setBackgroundColor('#000000')
      // eslint-disable-next-line no-undef
      esp.setBackgroundOpacity('0.6')
      // eslint-disable-next-line no-undef
      esp.setDescription('<p style="color:black;background-color:#FFFFFF">화면에 스탬프를 찍어 주세요.<br/>닫기 버튼(X)이 보이지 않을 경우<br/> 어두운 바탕으로 이동해 보세요.</p>')
      // eslint-disable-next-line no-undef
      esp.setLoadingYn('Y')
      // eslint-disable-next-line no-undef
      esp.setIconYn('Y')
      // eslint-disable-next-line no-undef
      esp.showEchossCertificationPage({
        // eslint-disable-next-line no-undef
        regionCode: esp.REGION_CODE_TYPE.KOREA,
        // eslint-disable-next-line no-undef
        languageCode: esp.LANGUAGE_CODE_TYPE.KOREAN,
        userCode: 'stamptour',
        licenseId: 'p6d441067c76f43bdb5767dee1b85d742',
        authKey: '',
        extData: { }
      }, function (errorCode, errorMessage) {
        alert('스템프 인증 호출에 실패하였습니다.')
      })
      // eslint-disable-next-line no-undef
      esp.certSuccess = (result) => {
        if (result.merchant) {
          if (result.merchant === data.mingle_merchant_code) {
            var today = new Date()
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
            var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
            var dateTime = date + ' ' + time
            this.$store.dispatch('loadStampUserApply', data, dateTime)
            this.$store.dispatch('loadBadgeRegister', data).then(() => {
              if (/Android/i.test(navigator.userAgent)) {
                // eslint-disable-next-line no-undef
                tranggle3.tranggle_callback('stamp_get', '{}')
              } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                window.location = 'tranggle_callback://stamp_get'
              } else {
                return false
              }
            })
          } else {
            alert('찍은 전자 스탬프 정보가 다릅니다.')
          }
        } else {
          alert('merchant 코드가 없습니다.')
        }
      }
      // eslint-disable-next-line no-undef
      esp.certError = (errorCode, errorMessage) => {
        console.log(errorCode)
        console.log(errorMessage)
      }
    },
    getTime () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      const dateTime = date + ' ' + time
      return dateTime
    },
    scrollBottom () {
      if ((Math.ceil(window.scrollY + window.innerHeight) === document.body.scrollHeight || Math.floor(window.scrollY + window.innerHeight) === document.body.scrollHeight) && this.allStampCount > this.params.view_count) {
        this.params.view_count += 10
        this.$store.dispatch('loadMainData', this.params)
      }
    }
  },
  beforeCreate () {
    appEvent.trackProgress()
  },
  created () {
    window.addEventListener('scroll', this.scrollBottom)
  },
  mounted () {
    this.$store.dispatch('loadAreaList')
    this.$store.dispatch('loadMingleVersionChk')
    // window.onpopstate = history.onpushstate = (e) => {
    //   if (window.location.href.split('/').pop().indexOf('modal') === -1) {
    //     // this.$store.dispatch('openPopupGift', {})
    //   }
    // }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBottom)
  }
}
</script>
