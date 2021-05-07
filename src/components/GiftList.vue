<template>
    <div>
        <ul class="gift_list">
            <li v-for="(data, idx) in giftData" v-bind:key="idx">
                <div class="point" v-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='/GN62eV1c4Q78ghWNMWRsQ=='"><span class="stxt">잼버리<br/>코스</span></div>
                <div class="point" v-else-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='M0ZRcktVl8H3kJaRKq3Irg=='"><span class="stxt">{{auth(data)}}</span></div>
                <div class="point" v-else>{{data.mingle_count}}{{unit}}</div>
                <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+data.mingle_gift_image" alt="gift">
                <span>{{data.mingle_gift_title}}<b class="limit_gift">(100/2000)</b></span>
                <div v-if="(data.user_gift_send_date !== null || data.user_gift_request_date !== null) && data.mingle_gift_request_date !== '' && data.mingle_gift_receive !== 'Y'" class="gift_complete">
                  완료
                </div>
                <div v-else-if="data.mingle_gift_receive === 'E'" class="gift_complete">
                  마감
                </div>
                <div v-else class="gift_icon" :class="dotOn(data)" @click="giftReceive(data)">
                    <img :src="giftOn(data)" alt="gift">
                    <div class="dot"></div>
                </div>
                <div class="line"></div>
                <div class="giftDday" v-if="(dotOn(data) === 'on' || dotOn(data) === 'end') && data.mingle_gift_end_date !== null && data.user_gift_send_date === null && data.user_gift_request_date === null && data.mingle_gift_seq !== 'vgzyuHho9L7fX0sxzjDZhQ==' && mingleCode !== 'UQ3+JiYENuJBR+gw6zSYPA=='">{{dDay(data)}}</div>
            </li>
        </ul>
        <PopupBlackList v-if="blackListPop" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import PopupBlackList from '@/components/popup/PopupBlackList.vue'
export default {
  name: 'GiftList',
  components: {
    PopupBlackList
  },
  data () {
    return {
      unit: '',
      load: false,
      blackList: [ // 머니콘 부정 발급자들 임시 막기
        '010-3723-4410',
        '010-4573-6178',
        '010-4886-7932',
        '010-5163-0422',
        '010-6227-8799',
        '010-6239-6504',
        '010-7107-7179',
        '010-7135-7504',
        '010-8660-3636',
        '010-8960-8201',
        '010-9999-9999'
      ]
    }
  },
  watch: {
    giftData () {
      if (!this.load) {
        // 페이지 로딩시 방문소감 작성해야 되는 선물 있을때
        if (this.mingleCode === 'ClJDKcCIq5mBFLdPmkYwPQ==') {
          var giftIdx = 0
          for (giftIdx; giftIdx < this.giftData.length; giftIdx++) {
            if (this.$route.query.impression !== 'y' && this.giftData[giftIdx].mingle_gift_receive === 'Y' && this.giftData[giftIdx].mingle_comment_no === '') {
              this.$store.state.impressionOpen = true
              this.$store.state.imporessionGiftCode = this.giftData[giftIdx].mingle_user_gift_no
              break
            }
          }
          this.giftData.map((v, idx) => {
            if (idx === giftIdx) {
              localStorage.impressionData = JSON.stringify(v)
            }
          })
        }
      }
    }
  },
  computed: {
    ...mapState(['giftData', 'stampCodeInfo', 'mingleCode', 'blackListPop'])
  },
  methods: {
    // 점 표시
    dotOn (data) {
      let dot = ''
      if (data.mingle_gift_receive === 'Y') {
        dot = 'on'
      } else if (data.mingle_gift_receive === 'N' && data.mingle_gift_end_date !== '0000-00-00 00:00:00') {
        dot = 'end'
      }
      return dot
    },
    // 선물 아이콘 on/off
    giftOn (data) {
      let img = ''
      if (data.mingle_gift_receive === 'Y') {
        img = 'icon_gift'
      } else {
        img = 'icon_gift_off'
      }
      return require(`@/assets/images/${img}.png`)
    },
    giftReceive (data) {
      let flag = false
      this.blackList.map((val) => {
        if (data.member_mobile === val) {
          this.$store.state.blackListPop = true
          flag = true
        }
      })
      if (data.mingle_gift_receive === 'Y' && !flag) {
        if (this.mingleCode === 'ClJDKcCIq5mBFLdPmkYwPQ==') { // 경기서부 7길
          if (data.mingle_comment_no === '') { // 방문소감을 안 썼음
            // 방문소감 링크 팝업 팝업 띄우기
            this.$store.state.impressionOpen = true
            this.$store.state.imporessionGiftCode = data.mingle_user_gift_no
            localStorage.impressionData = JSON.stringify(data)
          } else { // 방문소감을 썼음
            this.$store.dispatch('openPopupGift', data)
          }
        } else {
          this.$store.dispatch('openPopupGift', data)
        }
        // window.history.pushState({}, 'modal', '/modal')
      }
    },
    setStamp () {
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode && data.info === 'point') {
          this.unit = 'P'
        } else if (data.code === this.mingleCode && data.info === 'number') {
          this.unit = '개'
        }
      })
    },
    auth (data) {
      let val = ''
      if (data.mingle_user_gift_no === '433145') {
        val = 4
      } else {
        val = 7
      }
      return `${val}개 획득시`
    },
    dDay (data) {
      const text1 = data.mingle_gift_end_date.split(' ')[0].split('-')
      const text2 = data.mingle_gift_end_date.split(' ')[1].split(':')
      const Dday = new Date(
        parseInt(text1[0]),
        parseInt(text1[1]) - 1, // 월 -1
        parseInt(text1[2]),
        parseInt(text2[0]),
        parseInt(text2[1]),
        parseInt(text2[2])
      )
      const now = new Date()
      const gap = now.getTime() - Dday.getTime()
      let text = ''
      let result = 0
      result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1
      if (result > 1) {
        text = `${result}일전`
      } else {
        result = Math.floor(gap / (1000 * 60 * 60)) * -1
        if (result > 1) {
          text = `${result}시간전`
        } else {
          result = Math.floor(gap / (1000 * 60)) * -1
          if (result > 1) {
            text = `${result}분전`
          } else {
            text = ''
          }
        }
      }
      if (data.mingle_gift_add_point !== 'AUTH') {
        return `신청 유효 기간 만료 ${text}`
      } else {
        if (data.mingle_gift_end_date !== '0000-00-00 00:00:00' && data.mingle_gift_receive === 'N' && data.mingle_no === '1') {
          return '인증서 신청 완료'
        } else {
          return ''
        }
      }
    }
  },
  mounted () {
    // console.log(this.giftData.every(el => el.mingle_comment_no === ''))
    // if(this.giftData.every(el => el.mingle_comment_no === '')) {
    // }
    if (localStorage.giftopen) {
      this.$store.dispatch('openPopupGift', JSON.parse(localStorage.giftopen))
      localStorage.removeItem('giftopen')
    }
    // 경기서부 7길
    if (this.mingleCode === 'ClJDKcCIq5mBFLdPmkYwPQ==') {
      if (!this.$route.query.impression) {
        localStorage.removeItem('impressionData')
      }
      // 방문소감 작성 완료후 돌아오자마자 선물 받기 팝업
      if (this.$route.query && localStorage.impressionData) {
        this.$store.dispatch('openPopupGift', JSON.parse(localStorage.impressionData))
        localStorage.removeItem('impressionData')
      }
    }
    this.setStamp()
  }
}
</script>
