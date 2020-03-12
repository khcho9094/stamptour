<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              class="slide"
              :style="{ 'backgroundImage': `url(${img})` }"
              v-for="(img) in imgArray()"
              v-bind:key="img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="notice_box">
            <div class="notice">Notice</div>
            <div class="txt">
              {{method.mingle_badge_type_desc}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'StampSwiper',
  props: {
    method: Object,
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
  methods: {
    imgArray () {
      const arr = []
      for (const key in this.images) {
        if (key !== 'total') {
          arr.push(this.images[key].originimgurl)
        }
      }
      return arr
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
