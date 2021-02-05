<template>
  <div>
    <swiper :options="swiperOption" class="swiper swiperbut">
        <swiper-slide v-for="(banner, idx) in bannerList" :key="idx">
          <img class="themaBanner" :src="`https://stamp.tranggle.com/${banner.notice_popup_img_url.replace('html/', '')}`" :alt="banner.notice_popup_title" @click="checkUrl(banner.notice_popup_url)"/>
        </swiper-slide>
        <swiper-slide v-if="this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg==' && this.mingleCode !== 'YQTt4DYGRx7iBHRXs2IlPA==' && this.mingleCode !== '0lDg6JT7iYoHXLAPV4p8wA=='">
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
        <div class="swiper-pagination" slot="pagination"></div>
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
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: {
          delay: 3000
        },
        loop: false
      }
    }
  },
  computed: {
    ...mapState(['sumPrice', 'mingleCode', 'stampCodeInfo', 'bannerList'])
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
    fullPathChk () {
      let chk = false
      if (location.href.indexOf('stagestamp') > -1) {
        chk = true
      } else {
        chk = false
      }
      return chk
    },
    checkUrl (url) {
      if (url.indexOf('mstamp.tranggle.com') > -1) {
        // 내부링크
        appEvent.interiorLink(url.split('.com')[1])
      } else {
        // 외부링크
        appEvent.externalLinks(url)
      }
    }
  },
  created () {
    // if (this.mingleCode === '4k68KEPNtv/xCP0/x2Hirw==') {
    //   this.swiperOption.autoplay.delay = 3000
    //   this.swiperOption.loop = true
    // } else {
    //   this.swiperOption.autoplay.delay = 99999
    //   this.swiperOption.loop = false
    // }
  },
  mounted () {
    if (this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg==') {
      this.$store.dispatch('loadGiftDataNew')
    }
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
