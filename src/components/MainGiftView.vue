<template>
  <div>
    <swiper :options="swiperOption" class="swiper swiperbut">
        <swiper-slide>
            <div
              class="themaBanner"
              :style="{ 'background-image': themaBanner() }"
              @click="goThema10Event">
            </div>
        </swiper-slide>
        <swiper-slide v-if="this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg=='">
            <div v-if="parseInt(sumPrice) > 0" class="gift_box" @click="goGift">
                <div class="gift_price">
                    {{sumPrice}}원 상당의 선물이 가득!!
                </div><br/>
                <button class="view">선물 모두보기</button>
            </div>
            <div v-else class="gift_box" @click="goGift">
                <div class="gift_price">
                    {{giftAuth()}}
                </div><br/>
                <button class="view">신청 바로가기</button>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-if="this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg=='"></div>
    </swiper>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import router from '@/router'
export default {
  name: 'MainGiftView',
  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  },
  computed: {
    ...mapState(['sumPrice', 'mingleCode', 'stampCodeInfo'])
  },
  methods: {
    goGift () {
      router.push('/gift')
    },
    giftAuth () {
      let cMsg = ''
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode) {
          cMsg = data.msg
        }
      })
      return cMsg
    },
    goThema10Event () {
      console.log('thema10event')
      appEvent.thema10Page()
    },
    themaBanner () {
      const url = require('@/assets/images/event/allthat_main_banner.png')
      return `url(${url})`
    }
  },
  mounted () {
    this.$store.dispatch('loadGiftDataNew')
  }
}
</script>
<style>
    .swiper {
        width: 100%;
    }
    .swiperbut {
      padding-bottom:10px!important;
    }
    .swiper-pagination-bullet {
      width:4px!important;
      height:4px!important;
      background:#333!important;
    }
    .swiper-pagination-bullet-active {
      background:#333!important;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 2px!important;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom:0px!important;
    }
</style>
