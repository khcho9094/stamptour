<template>
    <div class="course_box">
        <div class="sort">
            <span :class="{on: data.active}" @click="sortBtn(data.param, $event)" v-for="(data, idx) in sortList" v-bind:key="idx">{{data.name}}</span>
            <div class="complete_hide">
                <input type="checkbox" id="complete_off"  name="complete_off" @change="checkStatus($event)"> <label for="complete_off">완료 코스 숨기기</label>
            </div>
        </div>
        <div class="area_box" v-if="mingleCode === 'SzActcWN5QXozxDixoG4zQ==' || mingleCode === 'iQxiUpF8ZfaGodRQJ6s0mg=='">
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
                    <img :class="(data.user_mingle_badge_get_stamp_yn === 'N')?'p_icon':'c_icon'" :src="iconImg(data.mingle_badge_type, data.user_mingle_badge_get_stamp_yn)" alt="course_icon"><br/>
                    <span v-show="data.user_mingle_badge_get_stamp_yn === 'N' && setStamp()">{{data.user_mingle_badge_point}}P</span>
                </div>
                <div class="box_rt">
                    <h2>{{data.info_badge_name}}</h2>
                    <p class="txt">여기에서 {{parseInt(data.distance)}}km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">{{data.mingle_stat_badge_count}}</span>
                    </div>
                    <div class="position" v-if="data.mingle_badge_type === 'STAMP' && data.user_mingle_badge_get_stamp_yn !== 'Y' && token" @click="stampAuth($event, data)">위치보기</div>
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
        areaCode: '0'
      },
      progressData: this.localData()
    }
  },
  computed: {
    ...mapState(['mainStampList', 'areaList', 'mingleCode', 'token', 'stampCodeInfo'])
  },
  methods: {
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
      this.$store.dispatch('loadMainData', this.params)
    },
    stampDetail (sid) {
      localStorage.stampDetail = JSON.stringify(sid)
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_loc', `{lat:${sid.info_org_lat} ,lon:${sid.info_org_lon} ,badge_id:${sid.mingle_badge_id} }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_loc?lat=${sid.info_org_lat}&lon=${sid.info_org_lon}&badge_Id=${sid.mingle_badge_id}`
      } else {
        return false
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
      if (this.progressData) {
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
      if (this.progressData) {
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
      if (/Android/i.test(navigator.userAgent)) {
        val = JSON.parse(localStorage.united_android)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        val = JSON.parse(localStorage.united_ios)
      }
      return val
    },
    stampAuth (e, data) {
      e.stopPropagation()
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
    }
  },
  beforeCreate () {
    appEvent.trackProgress()
  },
  mounted () {
    this.$store.dispatch('loadAreaList')
    this.$store.dispatch('loadMingleVersionChk')
  }
}
</script>
