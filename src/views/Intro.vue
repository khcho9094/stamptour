<template>
  <div class="intro">
    <!-- 헤더 -->
    <Head type='logo' name='intro' />
    <PopupIntro :visible='visible' />
    <div class="tour_start_wrap">
        <div class="title">
            {{introData.mingle_title}}
        </div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              class="slide"
              :style="{ 'backgroundImage': `url(${img})` }"
              v-for="(img, idx) in introImage"
              v-bind:key="idx">
            </swiper-slide>
        </swiper>
        <div class="content">
            {{introData.mingle_desc}}
        </div>
        <div class="tour_start_box">
            <div class="chkbox">
                <input type="checkbox" id="tour_off"  name="tour_off"> <label for="tour_off">일주일동안 보지않기</label>
            </div>
            <button @click="tourStartButton">투어 시작하기</button>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import PopupIntro from '@/components/PopupIntro.vue'
export default {
  name: 'Intro',
  components: {
    Head,
    PopupIntro
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      visible: false
    }
  },
  computed: {
    ...mapState(['introData']),
    ...mapState(['introImage'])
  },
  methods: {
    tourStartButton () {
      this.visible = !this.visible
    }
  },
  mounted () {
    // this.$store.dispatch('loadIntroImage')
    console.log(this.introImage)
  }
}
</script>
<style scoped>
  .swiper {
    padding-left: 25px!important;
    width: 100%;
  }
  .swiper .slide {
      width: 240px;
      height:140px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  }
</style>
