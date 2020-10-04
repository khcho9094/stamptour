<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' id='t_head' :title="headTitle()" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list" v-if="!this.$route.query.type">
             <li v-for="(data, idx) in tourListData" v-bind:key="idx" @click="apiDetailOn(data)">
                <div class="back_img" :style="{ 'backgroundImage': `url(${data.image})` }" ></div>
                <h2>{{data.title}}</h2>
                <p>{{chkDist(data.dist)}}</p>
             </li>
        </ul>
        <ul class="view_list" v-else>
             <li v-for="(data, idx) in TourPoiData" v-bind:key="idx" @click="poiDetailOn(data)">
                <div class="back_img" :style="{ 'backgroundImage': `url(${data.mingle_poi_img})` }" ></div>
                <h2>{{data.mingle_poi_main_title}}</h2>
                <p>{{parseInt(data.distance)}}km</p>
             </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Head from '@/components/Head.vue'
export default {
  name: 'List',
  components: {
    Head
  },
  data () {
    return {
    }
  },
  methods: {
    apiDetailOn (data) {
      localStorage.tourDetail = JSON.stringify(data)
      this.$router.push('/tour/detail')
    },
    poiDetailOn (data) {
      this.$router.push(`/stamp?badge_id=99&contentTypeId=99&contentId=99&mingle_poi_no=${data.mingle_poi_no}&back=y`)
    },
    headTitle () {
      return JSON.parse(localStorage.tourType).name
    },
    chkDist (dist) {
      if (parseInt(dist) > 999) {
        dist = (parseInt(dist) / 1000).toFixed(1)
        dist = dist + 'km'
      } else {
        dist = dist + 'm'
      }
      return dist
    }
  },
  beforeCreate () {
    // 로그인페이지에서 total_stamp_yn 쿠키값 세팅
    if (this.$cookie.get('total_stamp_yn') === 'Y') {
      appEvent.chkCoordinate()
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
    }
  },
  mounted () {
    this.$store.dispatch('loadTourListData', JSON.parse(localStorage.tourType))
  },
  computed: {
    ...mapState(['tourListData', 'TourPoiData'])
  },
  destroyed () {
    this.$store.state.tourListData = []
  }
}
</script>
