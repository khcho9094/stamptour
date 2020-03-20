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
                    <span v-show="data.user_mingle_badge_get_stamp_yn === 'N'">{{data.user_mingle_badge_point}}P</span>
                </div>
                <div class="box_rt">
                    <h2>{{data.info_badge_name}}</h2>
                    <p class="txt">여기에서 {{parseInt(data.distance)}}km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">{{data.mingle_stat_badge_count}}</span>
                    </div>
                    <div class="position" v-if="data.mingle_badge_type === 'STAMP' && data.user_mingle_badge_get_stamp_yn !== 'Y'" @click="stampAuth($event, data)">위치보기</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
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
      }
    }
  },
  computed: {
    ...mapState(['mainStampList', 'areaList', 'mingleCode'])
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
      console.log(sid)
      localStorage.stampDetail = JSON.stringify(sid)
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_loc', `{\\'lat\\':\\'${sid.info_org_lat} \\',\\'lon\\':\\'${sid.info_org_lon} \\',\\'badge_id\\':\\'${sid.mingle_badge_id} \\'}`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_loc?lat=${sid.info_org_lat}&lon=${sid.info_org_lon}&badge_Id=${sid.mingle_badge_id}`
      } else {
        return false
      }
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
            this.$store.dispatch('loadBadgeRegister', this.electroStampInfo)
          } else {
            alert('찍은 전자 스탬프 정보가 다릅니다.')
          }
        }
      }
    },
    getPlatformInfo (method, url, params, succFunc, failFunc) {
      let xmlhttp
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line no-undef
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      }
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            const response = JSON.parse(xmlhttp.response)
            if (response.resCd !== '0000') {
              failFunc()
              return
            }
            succFunc(response.result)
          } else {
            failFunc()
          }
        }
      }
      xmlhttp.open(method, url, true)
      xmlhttp.setRequestHeader('Content-type', 'application/json')
      xmlhttp.setRequestHeader('Accept', 'application/json')
      xmlhttp.setRequestHeader('Accept-Language', 'ko')
      xmlhttp.setRequestHeader('Authorization', 'Basic ' + btoa('74bc2962-6856-41b6-b523-7f16baabb856:32356635343964622D363736312D343332382D383766392D343139346131656564323839'))
      if (method === 'GET') {
        xmlhttp.send()
      } else {
        xmlhttp.send(JSON.stringify(params))
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadAreaList')
  }
}
</script>
