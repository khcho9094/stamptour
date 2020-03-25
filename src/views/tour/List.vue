<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' id='t_head' :title="headTitle()" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="(data, idx) in tourListData" v-bind:key="idx" @click="apiDetailOn(data)">
                <div class="back_img" :style="{ 'backgroundImage': `url(${data.image})` }" ></div>
                <h2>{{data.title}}</h2>
                <p>{{data.dist}}Km</p>
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
    headTitle () {
      return JSON.parse(localStorage.tourType).name
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
    ...mapState(['tourListData'])
  },
  destroyed () {
    this.$store.state.tourListData = []
  }
}
</script>
