<template>
  <article class="visit_list">
    <div class="title cf">
      <h2>최근 조회 스탬프</h2>
      <span v-if="badgeSearch && badgeSearch.length" @click="fnLink('/profile/lastsearch')">모두보기</span>
    </div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide
        v-for="(item, idx) in badgeSearch" :key="idx"
      >
        <div class="stamp_img"
          :style="{'background': `url(${item.mingle_badge_image}) center / cover no-repeat`}"
          @click="RecentLookUpPopup(item)"
        >
        </div>
        <h3>{{item.info_badge_name}}</h3>
        <p>여기에서 {{Math.floor(item.distance)}}km</p>
      </swiper-slide>
    </swiper>
    <div v-if="badgeSearch && !badgeSearch.length" class="no_stamp">
      <p>최근 한달간 조회 스탬프가 없습니다.</p>
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileLookUpStamp',
  // props: ['badgeSearch'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      }
    }
  },
  computed: {
    ...mapState(['badgeSearch'])
  },
  methods: {
    fnLink (url) {
      this.$router.push(url)
    },
    RecentLookUpPopup (data) {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_loc', `{lat:${data.info_org_lat} ,lon:${data.info_org_lon} ,badge_id:${data.mingle_badge_id} }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_loc?lat=${data.info_org_lat}&lon=${data.info_org_lon}&badge_id=${data.mingle_badge_id}`
      } else {
        return false
      }
    }
  },
  mounted () {
  }
}
</script>
