<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          :style="{ 'backgroundImage': `url(${data})` }"
          v-for="(data, idx) in introImage"
          v-bind:key="idx">
        </swiper-slide>
    </swiper>
    <div class="desc_box">
        <p>
          {{introData.mingle_desc_basic}}
        </p>
        <span>지역 설명 전체 보기+</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TourSwiper',
  methods: {
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      mingle_basic_desc: this.$store.state.introData.mingle_desc_basic,
      desc: ''
    }
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
  },
  computed: {
    ...mapState(['introData']),
    ...mapState(['introImage'])
    // ...mapGetters(['tourInfoImage'])
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
