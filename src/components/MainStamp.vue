<template>
  <div>
    <!---------------------------------------------------------------- 포인트일 경우 -------------------------------------------------------------------->
    <div class="stamp_box" v-if="setStamp()">
      <div class="title" v-if="(this.token || this.$cookie.get('login_token')) && (this.getStampCount !== this.allStampCount)">
          <span @click="goMyStamp">{{guestCheck()}}<img src="@/assets/images/arrow_3.png" alt="arrow" class="myStamp"></span>
          <span class="count" v-if="this.getStampCount !== this.allStampCount">
              <em>{{this.myPoint}}</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>{{this.allStampPoint}}</em>
          </span>
          <span class="restart" v-else>
            <button @click="restartPopup()">
              <img src="@/assets/images/restart.png" alt="restart">
              다시시작
            </button>
          </span>
      </div>
      <div class="title" @click="loginOpen" v-else>스탬프를 찍기 위해 로그인이 필요합니다</div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          v-for="index in swiperPaging()"
          v-bind:key="index">
            <ul class="stamp_list" id="stampId">
                <li v-for="index_in in stampCount(index)" v-bind:key="index_in">
                    <div class="box">
                        <img class="round" :style="{ zIndex : zIn(index_in+(index*10-10)) }" :src="completeChk(index_in+(index*10-10))">
                        <img class="gift" v-if="giftChkPoint(index_in+(index*10-10))" :src="giftIconPoint(index_in+(index*10-10))" @click="giftClickPoint(index_in+(index*10-10))">
                        <span v-else>{{index_in+(index*10-10)}}</span>
                    </div>
                    <div class="line" :class="lineChk(index_in+(index*10-10))" :style="{ width : `${dotW}px` }">line</div>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!----------------------------------------------------------------- 갯수일 경우 -------------------------------------------------------------->
    <div class="stamp_box" v-else>
      <div class="title" v-if="this.token || this.$cookie.get('login_token')">
          <span @click="goMyStamp">{{guestCheck()}}<img src="@/assets/images/arrow_3.png" alt="arrow" class="myStamp"></span>
          <span class="count" v-if="(this.getStampCount !== this.allStampCount)">
              <em>{{this.getStampCount}}</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>{{this.allStampCount}}</em>
          </span>
           <span class="restart" v-else>
            <button @click="restartPopup()">
              <img src="@/assets/images/restart.png" alt="restart">
              다시시작
            </button>
          </span>
      </div>
      <div class="title" @click="loginOpen" v-else>스탬프를 찍기 위해 로그인이 필요합니다</div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          v-for="index in swiperPaging()"
          v-bind:key="index">
            <ul class="stamp_list" id="stampId">
                <li v-for="index_in in stampCount(index)" v-bind:key="index_in" class="dot_box">
                    <div class="box">
                        <img class="round" :style="{ zIndex : zIn(index_in+(index*10-10)) }" :src="completeChk(index_in+(index*10-10))">
                        <img class="gift" v-if="giftChk(index_in+(index*10-10))" :src="giftIcon(index_in+(index*10-10))" @click="giftClick(index_in+(index*10-10))">
                        <span v-else>{{index_in+(index*10-10)}}</span>
                    </div>
                    <div class="line" :class="lineChk(index_in+(index*10-10))" :style="{ width : `${dotW}px` }">line</div>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'MainStamp',
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      dotW: 0
    }
  },
  computed: {
    ...mapState(['allStampCount', 'getStampCount', 'giftData', 'token', 'stampAll', 'stampCodeInfo', 'mingleCode', 'myPoint', 'allStampPoint', 'guestChk'])
  },
  methods: {
    swiperPaging () {
      let count = 0
      if (this.allStampCount) {
        count = Math.ceil(this.allStampCount / 10)
      }
      return count
    },
    stampList (idx) {
      const end = idx * 10
      const start = end - 10
      return this.stampAll.slice(start, end)
    },
    stampCount (idx) {
      let count = 10
      if (Math.ceil(this.allStampCount / 10) === idx) {
        count = this.allStampCount % 10
      }
      return count
    },
    giftChk (num) {
      let chk = false
      this.giftData.map((data) => {
        if (parseInt(data.mingle_count) === num) {
          chk = true
        }
      })
      return chk
    },
    giftIcon (num) {
      let gift = ''
      this.giftData.map((data) => {
        if (parseInt(data.mingle_count) === num) {
          gift = `https://m.tranggle.com/html/images/mingle/${data.mingle_gift_image}`
        }
      })
      return gift
    },
    giftIconPoint (num) {
      let gift = ''
      this.giftData.map((data) => {
        if (data.mingle_count - this.myPoint < 6 && data.mingle_count - this.myPoint > 0 && this.getStampCount + 1 === num) {
          gift = `https://m.tranggle.com/html/images/mingle/${data.mingle_gift_image}`
        }
      })
      return gift
    },
    completeChk (num) {
      let complete = ''
      if (num > this.getStampCount) {
        complete = require('@/assets/images/dot_round.png')
      } else {
        complete = require('@/assets/images/complete.png')
      }
      return complete
    },
    lineChk (num) {
      let check = ''
      if (num <= this.getStampCount) {
        check = 'completeLine'
      }
      return check
    },
    zIn (num) {
      let zindex = 0
      if (num > this.getStampCount) {
        zindex = 0
      } else {
        zindex = 999
      }
      return zindex
    },
    giftClick (num) {
      // window.history.pushState({}, 'modal', '/modal')
      this.giftData.map((data) => {
        if (parseInt(data.mingle_count) === num) {
          this.$store.dispatch('openPopupGift', data)
        }
      })
    },
    giftClickPoint (num) {
      // window.history.pushState({}, 'modal', '/modal')
      this.giftData.map((data) => {
        if (data.mingle_count - this.myPoint < 6 && data.mingle_count - this.myPoint > 0 && this.getStampCount + 1 === num) {
          this.$store.dispatch('openPopupGift', data)
        }
      })
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
    giftChkPoint (num) {
      let chk = false
      this.giftData.map((data) => {
        if (data.mingle_count - this.myPoint < 6 && data.mingle_count - this.myPoint > 0 && this.getStampCount + 1 === num) {
          chk = true
        }
      })
      return chk
    },
    loginOpen () {
      appEvent.thema10Login()
      // if (/Android/i.test(navigator.userAgent)) {
      //   // eslint-disable-next-line no-undef
      //   tranggle3.tranggle_callback('go_home_event', '{}')
      // } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      //   window.location = 'tranggle_callback://go_home_event'
      // } else {
      //   return false
      // }
    },
    getResize () {
      this.dotW = document.getElementById('stampId').offsetWidth / 4 - 53
    },
    goMyStamp () {
      router.push('/mystamp')
    },
    restartPopup () {
      // this.$store.dispatch('chkRestartTour')
      let giftCnt = 0
      let i = 0
      for (i; i < this.giftData.length; i++) {
        if (this.giftData[i].mingle_gift_receive === 'Y') {
          giftCnt++
        }
      }

      if (giftCnt > 0 && this.$store.state.getGiftChk === false) {
        this.$store.state.getGiftChk = !this.$store.state.getGiftChk
      }
      this.$store.state.getGiftCnt = giftCnt
      this.$store.state.restartOpen = !this.$store.state.restartOpen
    },
    guestCheck () {
      let text = ''
      if (this.guestChk === 'Y') {
        text = '손님으로 찍은 스탬프'
      } else {
        text = '내가 찍은 스탬프'
      }
      return text
    }
  },
  created () {
    if (this.token) {
      this.$store.dispatch('loadGiftData')
    } else {
      this.$store.dispatch('loadGiftNoToken')
    }
    // this.$store.dispatch('loadMainAll')
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getResize)
    })
    window.onload = () => {
      this.getResize()
    }
    this.getResize()
  }
}
</script>
<style scoped>
    .swiper {
        width: 100%;
    }
    .swiper-pagination {
      bottom: 0px;
    }
</style>
