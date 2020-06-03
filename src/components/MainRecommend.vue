<template>
    <div class="recom_stamp">
        <div class="title">
            <h1> <img src="@/assets/images/stamp_icon_1.png" alt="icon"> 완주를 위한 추천 스탬프</h1>
            <span @click="mapView">지도보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
        </div>

        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
              v-for="(data, idx) in mainRecommendList"
              v-bind:key="idx">
                <ul class="next_stamp">
                    <li
                      v-for="(val, index) in data"
                      v-bind:key="index"
                      @click="stampDetail(val)">
                        <div
                          class="backImg"
                          :style="{ 'backgroundImage': `url(${val.mingle_badge_image})` }">
                        </div>
                        <h2>{{val.info_badge_name}}</h2>
                        <p>여기에서 {{parseInt(val.distance)}}km</p>
                        <div class="stamp_count">
                            <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                            <span class="stxt">스탬프</span>
                            <span class="snum">{{val.mingle_stat_badge_count || '0'}}</span>
                        </div>
                        <div class="ns_mark">다음 스탬프</div>
                    </li>
                </ul>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MainRecommend',
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      }
    }
  },
  computed: {
    ...mapState(['mainRecommendList', 'areaCode'])
  },
  methods: {
    stampDetail (sid) {
      localStorage.stampDetail = JSON.stringify(sid)
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_loc', `{lat:${sid.info_org_lat} ,lon:${sid.info_org_lon} ,badge_id:${sid.mingle_badge_id} }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_loc?lat=${sid.info_org_lat}&lon=${sid.info_org_lon}&badge_Id=${sid.mingle_badge_id}`
      } else {
        return false
      }
    },
    mapView () {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('map_view_event', `{area_code:${this.areaCode}}`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://map_view_event?area_code=${this.areaCode}`
      } else {
        return false
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadMainRecommend')
  }
}
</script>
<style scoped>
    .swiper {
        width: 100%;
    }
</style>
