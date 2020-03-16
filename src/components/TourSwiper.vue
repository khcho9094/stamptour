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
        <div v-html="mingleDesc()"></div>
        <span v-on:click="moreContent()" id="moreBtn">지역 설명 전체 보기+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TourSwiper',
  props: {
    introData: Object,
    introImage: Array
  },
  methods: {
    mingleDesc () {
      const content = this.introData.mingle_desc_basic
      const showChar = 80
      const ellipsestext = '...'

      if (content !== undefined) {
        if (content.length > showChar) {
          const c = content.substr(0, showChar)
          const h = content.substr(showChar, content.length - showChar)
          const html = c + '<div id="moreellipses">' + ellipsestext + '&nbsp;</div><div id="morecontent" style="display:none;"><div>' + h + '</div>&nbsp;&nbsp;</div>'
          return html
        } else {
          return content
        }
      }
    },
    imageData () {
      const arr = []
      for (const key in this.introImage) {
        const element = this.introImage[key]
        arr.push(element)
      }
      return arr
    },
    moreContent () {
      document.getElementById('moreellipses').style.display = 'none'
      document.getElementById('morecontent').style.display = 'block'
      document.getElementById('moreBtn').style.display = 'none'
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
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
