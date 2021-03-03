<template>
  <article class="visit_list">
    <div class="title cf">
      <h2>최근 방문 스탬프</h2>
      <span v-if="badgeTrack && badgeTrack.length" @click="fnLink('/profile/lastvisit')">모두보기</span>
    </div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        v-for="(item, idx) in badgeTrack" :key="idx"
      >
        <div class="stamp_img"
          :style="{'background': `url(${item.mingle_badge_image}) center / cover no-repeat`}"
        >
        </div>
        <h3>{{item.info_badge_name}}</h3>
        <p>여기에서 {{Math.floor(item.distance)}}km</p>
      </swiper-slide>
    </swiper>
    <div v-if="badgeTrack && !badgeTrack.length" class="no_stamp">
      <p>최근 한달간 방문 스탬프가 없습니다.</p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'ProfileVisitStamp',
  props: ['badgeTrack'],
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
  }
}
</script>
