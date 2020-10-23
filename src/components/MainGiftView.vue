<template>
  <div>
    <swiper :options="swiperOption" class="swiper swiperbut">
        <!-- <swiper-slide v-if="this.mingleCode === 'iQxiUpF8ZfaGodRQJ6s0mg=='">
            <div
              class="themaBanner"
              :style="{ 'background-image': BannerImage('event/allthat_main_banner.png') }"
              @click="goThema10Event">
            </div>
        </swiper-slide> -->
        <!-- 원주 배너 주석.. 추후 삭제 예정 -->
        <!-- <swiper-slide v-if="this.mingleCode === '4k68KEPNtv/xCP0/x2Hirw=='">
            <div
              class="themaBanner"
              :style="{ 'background-image': BannerImage('allthat_main_banner_wonju2.png') }"
              @click="goExternalEvent('https://drive.google.com/file/d/1zOTtpdUUuKXGQMTfhCeuyVomc8zr-gGY/view?usp=sharing')">
            </div>
        </swiper-slide> -->
        <!-- <swiper-slide v-if="this.mingleCode === '0lDg6JT7iYoHXLAPV4p8wA=='">
            <div
              class="themaBanner"
              :style="{ 'background-image': BannerImage('allthat_main_banner_kogas_1.png') }"
              @click="goKogasEvent">
            </div>
        </swiper-slide> -->
        <swiper-slide v-if="this.mingleCode === '0lDg6JT7iYoHXLAPV4p8wA=='">
            <div
              class="themaBanner"
              :style="{ 'background-image': BannerImage('allthat_main_banner_kogas_2.png') }"
              @click="goKogasEvent">
            </div>
        </swiper-slide>
        <swiper-slide v-if="this.mingleCode === 'YQTt4DYGRx7iBHRXs2IlPA=='">
            <div
              class="themaBanner"
              :style="{ 'background-image': BannerImage('allthat_main_banner_kor100_2.png') }"
              @click="goExternalEvent('https://korean.visitkorea.or.kr/detail/event_detail.do?cotid=641e4780-112c-4da2-af27-87648c0be27b')">
            </div>
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
      appEvent.thema10Page()
    },
    goKogasEvent () {
      appEvent.kogasPage()
    },
    goExternalEvent (url) {
      appEvent.externalLinks(url)
    },
    BannerImage (name) {
      const url = require(`@/assets/images/${name}`)
      return `url(${url})`
    },
    fullPathChk () {
      let chk = false
      if (location.href.indexOf('stagestamp') > -1) {
        chk = true
      } else {
        chk = false
      }
      return chk
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
