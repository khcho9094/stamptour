<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          class="slide"
          :style="{ 'backgroundImage': `url(${data})` }"
          v-for="(data, idx) in TourInfoData.image"
          v-bind:key="idx">
        </swiper-slide>
    </swiper>
    <div class="desc_box">
        <p>
            부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
            부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
            부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
            와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
        </p>
        <span>지역 설명 전체 보기+</span>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TourSwiper',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
      }
      // ,
      // imgs: [
      //   require('@/assets/images/dummy_img/img_1.jpg'),
      //   require('@/assets/images/dummy_img/img_2.jpg'),
      //   require('@/assets/images/dummy_img/img_4.jpg'),
      //   require('@/assets/images/dummy_img/img_5.jpg')
      // ]
    }
  },
  mounted () {
    this.$store.dispatch('loadTourInfoData')
  },
  computed: {
    ...mapState(['TourInfoData'])
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
