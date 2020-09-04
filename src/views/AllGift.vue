<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title='전체 선물보기'/>
    <div class="all_gift">
      <ul class="tour_list">
        <li v-for="(data, idx) in this.stampGiftData.title" v-bind:key="idx">
          <div class="tit" @click="giftList(data.mingle_no)">{{ data.mingle_title }}</div>
          <ul class="all_list" v-show="isShow(data.mingle_no)">
            <li v-for="(gdata, gidx) in changeGiftData(data.mingle_no, idx)" v-bind:key="gidx">
                <div class="point" v-if="gdata.mingle_gift_add_point === 'AUTH' && gdata.mingle_no ==='1'"><span class="stxt">잼버리<br/>코스</span></div>
                <div class="point" v-else-if="gdata.mingle_gift_add_point === 'AUTH' && gdata.mingle_no ==='14'"><span class="stxt">{{auth(gdata)}}</span></div>
                <div class="point" v-else-if="gdata.mingle_no ==='16' || gdata.mingle_no ==='18'"><span class="stxt">{{gdata.mingle_count}}개</span></div>
                <div class="point" v-else>{{gdata.mingle_count}}{{unit}}P</div>
                <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+gdata.mingle_gift_image" alt="gift">
                <span>{{ gdata.mingle_gift_title }}</span>
                <div v-if="(gdata.user_gift_send_date !== null || gdata.user_gift_request_date !== null) && gdata.mingle_gift_request_date !== ''" class="gift_complete gift_complete_all">
                  완료
                </div>
                <div v-else-if="gdata.mingle_gift_receive === 'E'" class="gift_complete gift_complete_all">
                  마감
                </div>
                <div v-else class="gift_icon" :class="dotOn(gdata)" @click="giftReceive(gdata, gdata.mingle_no)">
                  <img :src="giftOn(gdata)" alt="gift">
                  <div class="dot"></div>
                </div>
                <div class="line"></div>
                <div class="giftDday" v-if="(dotOn(gdata) === 'on' || dotOn(gdata) === 'end') && gdata.mingle_gift_end_date !== null && gdata.user_gift_send_date === null && gdata.user_gift_request_date === null && gdata.mingle_gift_seq !== 'vgzyuHho9L7fX0sxzjDZhQ=='">{{dDay(gdata)}}</div>
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
      unit: '',
      cnt: 0,
      clickNo: '',
      clickTg: false
    }
  },
  computed: {
    ...mapState(['allGiftData', 'stampGiftData', 'popupGift', 'stampCodeInfo', 'mingleCode'])
  },
  methods: {
    giftList (data) {
      if (this.clickNo === data) {
        this.clickTg = true
        this.clickNo = ''
      } else {
        this.clickTg = false
        this.clickNo = data
      }
    },
    isShow (data) {
      let tg = false
      if (this.clickNo === data) {
        tg = true
      } else {
        tg = false
      }
      if (this.clickTg === true) {
        tg = false
      }
      return tg
    },
    changeGiftData (no, idx) {
      return this.stampGiftData.content[idx][0]
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
    giftReceive (data, no) {
      this.stampCodeInfo.map((val) => {
        if (val.no === no) {
          this.$store.state.mingleCode = val.code
        }
      })
      if (data.mingle_gift_receive === 'Y') {
        // window.history.pushState({}, 'modal', '/modal')
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
    this.$store.dispatch('loadGiftDataNew')
    this.$store.dispatch('loadAllGiftData')
  }
}
</script>
<style scoped>
  .gift_complete_all {
    right: 10px;
  }
</style>
