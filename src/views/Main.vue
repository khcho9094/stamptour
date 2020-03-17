<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
    <MainStamp v-on:giftBtn='handleGiftButton' />
    <MainGiftView />
    <MainRecommend />
    <MainList />
    <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
    <PopupGift />
  </div>
</template>
<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import MainStamp from '@/components/MainStamp.vue'
import MainGiftView from '@/components/MainGiftView.vue'
import MainRecommend from '@/components/MainRecommend.vue'
import MainList from '@/components/MainList.vue'
import Popup from '@/components/PopupMenu.vue'
import PopupGift from '@/components/PopupGift.vue'
export default {
  name: 'Main',
  components: {
    Head,
    MainStamp,
    MainGiftView,
    MainRecommend,
    MainList,
    Popup,
    PopupGift
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      visible: false,
      visibleGift: false,
      params: {
        order: 'pop',
        status: 'ALL'
      }
    }
  },
  methods: {
    handleMoreButton () {
      this.visible = !this.visible
    },
    handleGiftButton () {
      this.visibleGift = true
    }
  },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
