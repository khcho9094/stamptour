<template>
  <div class="stamp_box">
      <div class="title">
          내가 찍은 스탬프
          <span class="count">
              <em>{{this.getStampCount}}</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>{{this.allStampCount}}</em>
          </span>
      </div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          v-for="index in swiperPaging()"
          v-bind:key="index">
            <ul class="stamp_list">
                <li v-for="(data, idx) in stampList(index)" v-bind:key="idx">
                    <div class="box">
                        <img class="round" :style="{ zIndex : zIn(data.num) }" :src="completeChk(data.num)">
                        <img class="gift" v-if="giftChk(data.num)" :src="giftIcon(data.num)" @click="giftClick(data.num)">
                        <span v-else>{{data.num}}</span>
                    </div>
                </li>
            </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
      }
    }
  },
  computed: {
    ...mapState(['allStampCount', 'getStampCount', 'giftData', 'mainStampList'])
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
      return this.mainStampList.slice(start, end)
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
    completeChk (num) {
      let complete = ''
      if (num > this.getStampCount) {
        complete = require('@/assets/images/dot_round.png')
      } else {
        complete = require('@/assets/images/complete.png')
      }
      return complete
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
    }
  },
  mounted () {
    this.$store.dispatch('loadGiftData')
  }
}
</script>
<style scoped>
    .swiper {
        width: 100%;
    }
</style>
