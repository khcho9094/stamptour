<template>
    <div class="pop_overay_2">
      <div>
        <!-- <v-zoomer
          ref="zoomer"
          :max-scale="10"
          :zoomed.sync="zoomed">
          <img :src="this.zoomPopImg" style="object-fit: contain; height: 50vh;"/>
        </v-zoomer> -->
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              class="slide"
              v-for="(img, idx) in impressionPopupImg"
              v-bind:key="idx">
                <div class="swiper-zoom-container">
                  <img :src="img.replace('thumb', 'origin')">
                </div>
            </swiper-slide>
        </swiper>
        <div class="close_pop" @click="closeBtn">
          <img src="@/assets/images/close_pop.png" alt="close">
        </div>
        <!-- <button class="closeBtn" v-on:click="closeBtn()">닫기</button> -->
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupImpressionImage',
  props: {
    initNo: Number
  },
  data () {
    return {
      zoomed: false,
      swiperOption: {
        slidesPerView: 'auto',
        zoom: {
          maxRatio: 5
        }
      }
    }
  },
  computed: {
    ...mapState(['zoomPop', 'zoomPopImg', 'impressionPopupImg'])
  },
  methods: {
    closeBtn () {
      document.body.style.overscrollBehaviorY = ''
      this.$store.state.zoomPop = !this.$store.state.zoomPop
    }
  },
  created () {
    this.swiperOption.initialSlide = this.initNo
  },
  mounted () {
  }
}
</script>
<style scoped>
  .closeBtn {
    width:100%;
    height: 50px;
    background-color:#c86550;
    color:#fff;
    text-align:center;
  }
  .swiper {
    width: 100%;
  }
  .swiper .slide {
    width: 100%;
  }
  .swiper .slide img {
      width:auto;
      object-fit: contain;
      height: 50vh;
  }
</style>
