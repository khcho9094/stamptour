<template>
  <div>
    <!-- 포인트일 경우 -->
    <div class="stamp_box" v-if="setStamp()">
      <div class="title" v-if="this.token">
          내가 찍은 스탬프
          <span class="count">
              <em>{{this.myPoint}}</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>{{this.allStampPoint}}</em>
          </span>
      </div>
      <div class="title" @click="loginOpen" v-else>스탬프를 찍기 위해 로그인이 필요합니다</div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          v-for="index in swiperPaging()"
          v-bind:key="index">
            <ul class="stamp_list" id="stampId">
                <li v-for="(data, idx) in stampList(index)" v-bind:key="idx">
                    <div class="box">
                        <img class="round" :style="{ zIndex : zIn(data.num) }" :src="completeChk(data.num)">
                        <img class="gift" v-if="giftChkPoint(data.num)" :src="giftIconPoint(data.num)" @click="giftClickPoint(data.num)">
                        <span v-else>{{data.num}}</span>
                    </div>
                    <div class="line" :class="lineChk(data.num)" :style="{ width : `${dotW}px` }">line</div>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 갯수일 경우 -->
    <div class="stamp_box" v-else>
      <div class="title" v-if="this.token">
          내가 찍은 스탬프
          <span class="count">
              <em>{{this.getStampCount}}</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>{{this.allStampCount}}</em>
          </span>
      </div>
      <div class="title" @click="loginOpen" v-else>스탬프를 찍기 위해 로그인이 필요합니다</div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          v-for="index in swiperPaging()"
          v-bind:key="index">
            <ul class="stamp_list" id="stampId">
                <li v-for="(data, idx) in stampList(index)" v-bind:key="idx" class="dot_box">
                    <div class="box">
                        <img class="round" :style="{ zIndex : zIn(data.num) }" :src="completeChk(data.num)">
                        <img class="gift" v-if="giftChk(data.num)" :src="giftIcon(data.num)" @click="giftClick(data.num)">
                        <span v-else>{{data.num}}</span>
                    </div>
                    <div class="line" :class="lineChk(data.num)" :style="{ width : `${dotW}px` }">line</div>
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
    ...mapState(['allStampCount', 'getStampCount', 'giftData', 'token', 'stampAll', 'stampCodeInfo', 'mingleCode', 'myPoint', 'allStampPoint'])
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
      this.giftData.map((data) => {
        if (parseInt(data.mingle_count) === num) {
          this.$store.dispatch('openPopupGift', data)
        }
      })
    },
    giftClickPoint (num) {
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
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('go_home_event', '{}')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://go_home_event'
      } else {
        return false
      }
    }
  },
  created () {
    if (this.token) {
      this.$store.dispatch('loadGiftData')
    } else {
      this.$store.dispatch('loadGiftNoToken')
    }
    this.$store.dispatch('loadMainAll')
  },
  mounted () {
    window.onload = () => {
      this.dotW = document.getElementById('stampId').offsetWidth / 4 - 53
    }
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
