<template>
    <ul class="gift_list">
        <li v-for="(data, idx) in giftData" v-bind:key="idx">
            <div class="point" v-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='/GN62eV1c4Q78ghWNMWRsQ=='"><span class="stxt">잼버리<br/>코스</span></div>
            <div class="point" v-else-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='M0ZRcktVl8H3kJaRKq3Irg=='"><span class="stxt">{{auth(data)}}</span></div>
            <div class="point" v-else>{{data.mingle_count}}{{unit}}</div>
            <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+data.mingle_gift_image" alt="gift">
            <span>{{data.mingle_gift_title}}</span>
            <div v-if="data.user_gift_request_date !== null && data.mingle_gift_request_date !== ''" class="gift_complete">
              완료
            </div>
            <div v-else class="gift_icon" :class="dotOn(data)" @click="giftReceive(data)">
                <img :src="giftOn(data)" alt="gift">
                <div class="dot"></div>
            </div>
            <div class="line"></div>
            <div class="giftDday" v-if="(dotOn(data) === 'on' || dotOn(data) === 'end') && data.mingle_gift_end_date !== null && data.user_gift_request_date === null">{{dDay(data)}}</div>
        </li>
    </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'GiftList',
  data () {
    return {
      unit: ''
    }
  },
  computed: {
    ...mapState(['giftData', 'stampCodeInfo', 'mingleCode'])
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
      if (data.mingle_gift_receive === 'Y') {
        // window.history.pushState({}, 'modal', '/modal')
        this.$store.dispatch('openPopupGift', data)
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
      return `신청 유효 기간 만료 ${text}`
    }
  },
  mounted () {
    if (localStorage.giftopen) {
      this.$store.dispatch('openPopupGift', JSON.parse(localStorage.giftopen))
      localStorage.removeItem('giftopen')
    }
    this.setStamp()
  }
}
</script>
