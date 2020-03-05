<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' />
    <MainStamp />
    <MainGiftView />
    <MainRecommend />
    <MainList />
  </div>
</template>
<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import MainStamp from '@/components/MainStamp.vue'
import MainGiftView from '@/components/MainGiftView.vue'
import MainRecommend from '@/components/MainRecommend.vue'
import MainList from '@/components/MainList.vue'
export default {
  name: 'Main',
  components: {
    Head,
    MainStamp,
    MainGiftView,
    MainRecommend,
    MainList
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      }
    }
  }
}
</script>
