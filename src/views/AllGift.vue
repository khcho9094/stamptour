<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title='전체 선물보기'/>
    <div class="all_gift">
      <ul class="tour_list">
        <li v-for="(data, idx) in changeTourTitle()" v-bind:key="idx">
          <div class="tit" @click="giftList(data.mingle_no)">{{ data.mingle_title }}</div>
          <ul class="all_list" v-show="isShow(data.mingle_no)" v-for="(gdata, gidx) in changeGiftData(data.mingle_no)" v-bind:key="gidx">
            <li>
                <div class="point" v-if="gdata.mingle_gift_add_point === 'AUTH' && gdata.mingle_no ==='1'"><span class="stxt">잼버리<br/>코스</span></div>
                <div class="point" v-else-if="gdata.mingle_gift_add_point === 'AUTH' && gdata.mingle_no ==='14'"><span class="stxt">{{auth(gdata)}}</span></div>
                <div class="point" v-else-if="gdata.mingle_no ==='16' || gdata.mingle_no ==='18'"><span class="stxt">{{gdata.mingle_count}}개</span></div>
                <div class="point" v-else>{{gdata.mingle_count}}{{unit}}P</div>
                <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+gdata.mingle_gift_image" alt="gift">
                <span>{{ gdata.mingle_gift_title }}</span>
                <div class="gift_icon" :class="dotOn(gdata)" @click="giftReceive(gdata)">
                  <img :src="giftOn(gdata)" alt="gift">
                  <div class="dot"></div>
                </div>
                <div class="line"></div>
                <div class="giftDday" v-if="dotOn(gdata) === 'on'">{{dDay(gdata)}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <PopupSns />
    <PopupGiftReceive  v-if="popupGift.open"/>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
import PopupGiftReceive from '@/components/popup/PopupGiftReceive.vue'
import { mapState } from 'vuex'
export default {
  name: 'AllGift',
  components: {
    Head,
    PopupSns,
    PopupGiftReceive
  },
  data () {
    return {
      // isShow: false,
      gift_1_show: false,
      gift_11_show: false,
      gift_14_show: false,
      gift_15_show: false,
      gift_16_show: false,
      gift_18_show: false,
      gift_20_show: false,
      unit: ''
    }
  },
  computed: {
    ...mapState(['allGiftData', 'stampGiftData', 'popupGift'])
  },
  methods: {
    giftList (data) {
      // this.isShow = !this.isShow
      if (data === '1') {
        this.gift_1_show = !this.gift_1_show
      } else if (data === '11') {
        this.gift_11_show = !this.gift_11_show
      } else if (data === '14') {
        this.gift_14_show = !this.gift_14_show
      } else if (data === '15') {
        this.gift_15_show = !this.gift_15_show
      } else if (data === '16') {
        this.gift_16_show = !this.gift_16_show
      } else if (data === '18') {
        this.gift_18_show = !this.gift_18_show
      } else if (data === '20') {
        this.gift_20_show = !this.gift_20_show
      }
    },
    isShow (data) {
      if (data === '1') {
        return this.gift_1_show
      } else if (data === '11') {
        return this.gift_11_show
      } else if (data === '14') {
        return this.gift_14_show
      } else if (data === '15') {
        return this.gift_15_show
      } else if (data === '16') {
        return this.gift_16_show
      } else if (data === '18') {
        return this.gift_18_show
      } else if (data === '20') {
        return this.gift_20_show
      }
    },
    changeTourTitle () {
      return this.stampGiftData.title
    },
    changeGiftData (no) {
      if (no === '1') {
        return this.stampGiftData.content[0][0]
      } else if (no === '11') {
        return this.stampGiftData.content[1][1]
      } else if (no === '14') {
        return this.stampGiftData.content[2][2]
      } else if (no === '15') {
        return this.stampGiftData.content[3][3]
      } else if (no === '16') {
        return this.stampGiftData.content[4][4]
      } else if (no === '18') {
        return this.stampGiftData.content[5][5]
      } else if (no === '20') {
        return this.stampGiftData.content[6][6]
      }
    },
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
        window.history.pushState({}, 'modal', '/modal')
        this.$store.dispatch('openPopupGift', data)
      }
    },
    auth (data) {
      let val = ''
      if (data.mingle_gift_order === '1') {
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
    this.$store.dispatch('loadAllGiftData')
  }
}
</script>
