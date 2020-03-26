<template>
    <ul class="gift_list">
        <li v-for="(data, idx) in giftData" v-bind:key="idx">
            <div class="point" v-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='/GN62eV1c4Q78ghWNMWRsQ=='"><span class="stxt">잼버리<br/>코스</span></div>
            <div class="point" v-else-if="data.mingle_gift_add_point === 'AUTH' && mingleCode ==='M0ZRcktVl8H3kJaRKq3Irg=='"><span class="stxt">{{test(data)}}</span></div>
            <div class="point" v-else>{{data.mingle_count}}{{unit}}</div>
            <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+data.mingle_gift_image" alt="gift">
            <span>{{data.mingle_gift_title}}</span>
            <div class="gift_icon" :class="dotOn(data)" @click="giftReceive(data)">
                <!-- <img src="@/assets/images/icon_gift.png" alt="gift"> -->
                <img :src="giftOn(data)" alt="gift">
                <div class="dot"></div>
            </div>
            <div class="line"></div>
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
    test (data) {
      let val = ''
      if (data.mingle_user_gift_no === '433145') {
        val = 4
      } else {
        val = 7
      }
      return `${val}개 획득시`
    }
  },
  mounted () {
    this.setStamp()
  }
}
</script>
