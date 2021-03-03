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
        <div class="stamp_img">
        <img :src="item.mingle_stamp_image" alt="">
        </div>
        <h3>{{item.user_mingle_badge_stamp_date.substr(0,10).replaceAll('-','.')}}</h3>
      </swiper-slide>
    </swiper>
    <div v-if="badgeStamp && !badgeStamp.length" class="no_stamp">
      <p>최근 한달간 찍은 스탬프가 없습니다.</p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'ProfileRecentStamp',
  props: ['badgeStamp'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      }
    }
  },
  methods: {
    fnLink (url) {
      this.$router.push(url)
    }
  },
  mounted () {
    console.log(2)
  }
}
</script>
