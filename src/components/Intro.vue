<template>
  <div class="intro">
    <!-- 헤더 -->
    <Head type='logo' name='intro' />
    <PopupIntro :visible='visible' :count='count'  />
    <Popupimage v-if="this.zoomPop === true" :initNo="ino" />
    <div class="tour_start_wrap">
        <div class="title">
            {{introData.mingle_title}}
        </div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              class="slide"
              v-for="(img, idx) in introImage"
              v-bind:key="idx">
                <img :src="img" @click="onSelected(img)">
            </swiper-slide>
        </swiper>
        <div class="content" v-html="introData.mingle_desc"></div>
        <div class="tour_start_box">
            <div class="chkbox">
                <input type="checkbox" id="tour_off"  name="tour_off"> <label for="tour_off">다시 보지 않기</label>
            </div>
            <button @click="tourStartButton">투어 시작하기</button>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import PopupIntro from '@/components/popup/PopupIntro.vue'
import Popupimage from '@/components/popup/Popupimage.vue'
export default {
  name: 'Intro',
  components: {
    Head,
    PopupIntro,
    Popupimage
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      visible: false,
      count: 5,
      pageOut: false,
      ino: 0
    }
  },
  computed: {
    ...mapState(['introData', 'introImage', 'mingleCode', 'stampCodeInfo', 'zoomPop'])
  },
  methods: {
    tourStartButton () {
      const check = document.getElementById('tour_off')
      if (check.checked) {
        this.stampCodeInfo.map((data, idx) => {
          if (this.mingleCode === data.code) {
            this.$cookie.set(`setIntro${idx}`, 'Y', 9999)
          }
        })
        this.visible = !this.visible
        this.closeCount()
      } else {
        // 메인 이동
        this.$store.dispatch('setIntroPopup', false)
        localStorage.removeItem('setIntroPopup')
      }
    },
    closeCount () {
      const interval = setInterval(() => {
        this.count--
        if (this.count === 0) {
          clearInterval(interval)
          this.$store.dispatch('setIntroPopup', false)
          localStorage.removeItem('setIntroPopup')
        } else if (this.pageOut) {
          clearInterval(interval)
        }
      }, 1000)
    },
    onSelected (obj) {
      // let split_ = obj.style.backgroundImage.split('(')
      // split_ = split_[1].split(')')
      // let image = split_[0].replace(/"/g, '')
      const image = obj.replace('thumb', 'origin')
      this.$store.state.zoomPop = !this.$store.state.zoomPop
      document.body.style.overscrollBehaviorY = 'contain'
      this.introImage.map((data, idx) => {
        if (data.replace('thumb', 'origin') === image) {
          this.ino = idx
          console.log(this.ino)
        }
      })
    }
  },
  mounted () {
    // this.$store.dispatch('loadIntroImage')
  },
  destroyed () {
    this.pageOut = true
  }
}
</script>
<style scoped>
  .swiper {
    padding-left: 25px!important;
    width: 100%;
  }
  .swiper .slide {
    width: auto;
    height:140px;
  }
  .swiper .slide img {
      height:100%;
  }
</style>
