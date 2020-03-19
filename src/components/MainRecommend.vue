<template>
    <div class="recom_stamp">
        <div class="title">
            <h1> <img src="@/assets/images/stamp_icon_1.png" alt="icon"> 완주를 위한 추천 스탬프</h1>
            <span @click="mapView">지도보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            <span><button @click="stampAuth()">전자스탬프 호출테스트</button></span>
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
                            <span class="snum">{{val.mingle_stat_badge_count}}</span>
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
import router from '@/router'
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
    ...mapState(['mainRecommendList'])
  },
  methods: {
    stampDetail (sid) {
      localStorage.stampDetail = JSON.stringify(sid)
      router.push('/stamp')
    },
    mapView () {
      let tranggle3
      if (/Android/i.test(navigator.userAgent)) {
        tranggle3.tranggle_callback('map_view_event', '{}')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://map_view_event'
      } else {
        return false
      }
    },
    stampAuth () {
      // eslint-disable-next-line no-undef
      esp.setBackgroundColor('#000000')
      // eslint-disable-next-line no-undef
      esp.setBackgroundOpacity('0.6')
      // eslint-disable-next-line no-undef
      esp.setDescription('<p style="color:black;background-color:#FFFFFF">화면에 스탬프를 찍어 주세요.<br/>닫기 버튼(X)이 보이지 않을 경우<br/> 어두운 바탕으로 이동해 보세요.</p>')
      // eslint-disable-next-line no-undef
      esp.setLoadingYn('Y')
      // eslint-disable-next-line no-undef
      esp.setIconYn('Y')
      // eslint-disable-next-line no-undef
      esp.showEchossCertificationPage({
        // eslint-disable-next-line no-undef
        regionCode: esp.REGION_CODE_TYPE.KOREA,
        // eslint-disable-next-line no-undef
        languageCode: esp.LANGUAGE_CODE_TYPE.KOREAN,
        userCode: 'stamptour',
        licenseId: 'p6d441067c76f43bdb5767dee1b85d742',
        authKey: '',
        extData: { }
      }, function (errorCode, errorMessage) {
        alert('스템프 인증 호출에 실패하였습니다.')
      })
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
