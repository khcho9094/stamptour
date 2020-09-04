<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          :style="{ 'backgroundImage': `url(${data})` }"
          v-for="(data, idx) in imageData()"
          v-bind:key="idx">
        </swiper-slide>
    </swiper>
    <div class="desc_box">
        <p id="elli" v-html="introData.mingle_desc_basic">
          <!-- {{introData.mingle_desc_basic}} -->
        </p>
        <span v-on:click="moreContent()" v-text="allView"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TourSwiper',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      allView: '투어 소개 전체 보기 +'
    }
  },
  props: {
    introData: Object,
    introImage: Array
  },
  methods: {
    imageData () {
      const arr = []
      for (const key in this.introImage) {
        const element = this.introImage[key]
        arr.push(element)
      }
      return arr
    },
    moreContent () {
      if (document.getElementById('elli').style.display === 'block') {
        document.getElementById('elli').style.display = '-webkit-box'
        this.allView = '투어 소개 전체 보기 +'
      } else {
        document.getElementById('elli').style.display = 'block'
        this.allView = '투어 소개 닫기 -'
      }
    }
  }
}
</script>
<style scoped>
    .swiper {
      padding-left: 25px!important;
      width: 100%;
      margin-top: 5px;
    }
    .swiper .slide {
        width: 240px;
        height:140px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>
