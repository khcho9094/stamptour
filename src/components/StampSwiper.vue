<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              class="slide"
              :style="{ 'backgroundImage': `url(${data.originimgurl})` }"
              v-for="(data, idx) in apiDetailData.IMAGE"
              v-bind:key="idx">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- <div class="swiper_img_box">
            <div class="swiper_img"></div>
            <div class="num">1 / 8</div>
        </div> -->
        <div class="notice_box">
            <div class="notice">Notice</div>
            <div class="txt">
                태양의 후예 촬영지 관광 안내소에서<br/>
                전자 스탬프로 획득가능
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'StampSwiper',
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      imgs: [
        require('@/assets/images/dummy_img/img_1.jpg'),
        require('@/assets/images/dummy_img/img_2.jpg'),
        require('@/assets/images/dummy_img/img_4.jpg'),
        require('@/assets/images/dummy_img/img_5.jpg')
      ]
    }
  },
  mounted () {
    // const contentId = this.$route.query.contentId
    // const contentTypeId = this.$route.query.contentTypeId
    // this.$store.state.contentId = contentId
    // this.$store.state.contentTypeId = contentTypeId
    this.$store.dispatch('loadApiDetailData')
  },
  computed: {
    ...mapState(['apiDetailData'])
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
