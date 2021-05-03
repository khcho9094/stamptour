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
          <img :src="starIcon(item.star_point)" alt="" />
          {{(item.star_point === '0.0') ? '별점없음' : item.star_point}}
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
import { mapState } from 'vuex'
import PopupProfileStamp from '@/components/popup/PopupProfileStamp.vue'
export default {
  name: 'ProfileRecentStamp',
  props: ['openProfileStamp'],
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
  computed: {
    ...mapState(['badgeStamp'])
  },
  methods: {
    fnLink (url) {
      this.$router.push(url)
    },
    RecentStampPopup (item) {
      this.$store.state.openProfileStamp = true
      this.stampInfo = item
    },
    starIcon (star) {
      const starScore = (star === '0.0') ? 'n' : 'p'
      return require(`@/assets/images/star_${starScore}.png`)
    }
  },
  mounted () {
    // console.log(this.badgeStamp)
  }
}
</script>
