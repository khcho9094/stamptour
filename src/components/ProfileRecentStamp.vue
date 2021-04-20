<template>
  <article class="stamp_list">
    <div class="title cf">
      <h2>최근 찍은 스탬프</h2>
      <span v-if="badgeStamp && badgeStamp.length" @click="fnLink('/profile/laststamp')">모두보기</span>
    </div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        v-for="(item, idx) in badgeStamp" :key="idx"
      >
        <div class="stamp_img" @click="RecentStampPopup(item)">
          <img :src="item.mingle_stamp_image" alt="">
        </div>
        <h3>{{item.user_mingle_badge_stamp_date.substr(0,10).replaceAll('-','.')}}</h3>
        <div class="star">
          <img src="@/assets/images/star_n.png" alt="" />
          <img src="@/assets/images/star_p.png" alt="" />
          4.0
        </div>
      </swiper-slide>
    </swiper>
    <div v-if="badgeStamp && !badgeStamp.length" class="no_stamp">
      <p>최근 한달간 찍은 스탬프가 없습니다.</p>
    </div>
    <PopupProfileStamp :stampInfo="stampInfo"/>
  </article>
</template>
<script>
import PopupProfileStamp from '@/components/popup/PopupProfileStamp.vue'
export default {
  name: 'ProfileRecentStamp',
  props: ['badgeStamp', 'openProfileStamp'],
  components: {
    PopupProfileStamp
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      },
      stampInfo: null
    }
  },
  methods: {
    fnLink (url) {
      this.$router.push(url)
    },
    RecentStampPopup (item) {
      this.$store.state.openProfileStamp = true
      this.stampInfo = item
    }
  },
  mounted () {
    // console.log(2)
  }
}
</script>
