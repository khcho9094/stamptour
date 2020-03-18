<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
    <MainStamp />
    <MainGiftView />
    <MainRecommend />
    <MainList />
    <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
    <PopupGift />
    <PopupSns />
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
import PopupSns from '@/components/PopupSns.vue'
export default {
  name: 'Main',
  components: {
    Head,
    MainStamp,
    MainGiftView,
    MainRecommend,
    MainList,
    Popup,
    PopupGift,
    PopupSns
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      visible: false,
      visibleGift: false,
      snsVisible: false,
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
    handleMoreSnsButton () {
      console.log('in')
      this.snsVisible = !this.snsVisible
    }
  },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
