<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              :class="slide()"
              :style="{ 'backgroundImage': `url(${img})` }"
              v-for="(img) in imgArray()"
              v-bind:key="img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="notice_box" v-if="method">
            <div class="notice">Notice</div>
            <div class="txt">
              {{method}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'StampSwiper',
  props: {
    method: String,
    images: Object
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  computed: {
    ...mapState(['stampPoi'])
  },
  methods: {
    imgArray () {
      const arr = []
      if (this.stampPoi && this.stampPoi.length > 0) { // 생태정보
        for (const key in this.stampPoi[0]) {
          if (key.match('mingle_poi_img') && this.stampPoi[0][key]) {
            arr.push(this.stampPoi[0][key])
          }
        }
      } else { // 스탬프
        for (const key in this.images) {
          if (key !== 'total') {
            arr.push(this.images[key].originimgurl)
          }
        }
      }
      return arr
    },
    badgeTypeChk () {
      const typeDesc = this.method
      if (typeDesc !== undefined) {
        return true
      } else {
        return false
      }
    },
    slide () {
      return (this.stampPoi) ? 'slidePoi' : 'slide'
    }
  }
}
</script>
<style scoped>
    .swiper {
        width:100%;
        position: relative;
    }
    .swiper .slide {
        width:100%;
        height: 55vw;
        max-height: 320px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: 100;
    }
    .swiper .slidePoi {
        width:100%;
        height: 55vw;
        max-height: 320px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        z-index: 100;
    }
    .swiper-pagination {
        width:40px;
        height:20px;
        line-height:20px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        font-size: 11px;
        color: #fff;
        font-family: inaviM;
        text-align: center;
        position: absolute;
        bottom: 11px;
        right: 12px;
        left: auto;
    }
</style>
