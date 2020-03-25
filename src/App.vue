<template>
  <div id="app">
    <router-view/>
    <div class="go_top" v-if="this.topBtn" @click="topBtnClick">
      <img src="@/assets/images/top_btn_n.png" alt="">
    </div>
  </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'App',
  data () {
    return {
      topBtn: false
    }
  },
  methods: {
    handleScroll () {
      this.topBtn = window.scrollY > 50
    },
    topBtnClick () {
      window.scrollTo(0, 0)
    }
  },
  beforeCreate () {
    if (this.$route.query.minglecode) {
      this.$route.query.mingleCode = this.$route.query.minglecode
    }
    if (this.$route.query.mingleCode) {
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
    }
    // 로그인페이지에서 total_stamp_yn 쿠키값 세팅
    if (this.$cookie.get('total_stamp_yn') === 'Y') {
      appEvent.chkCoordinate()
      this.$store.state.lon = localStorage.getItem('setLon')
      this.$store.state.lat = localStorage.getItem('setLat')
    }
  },
  beforeMount () {
    this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
    this.$store.dispatch('setToken', this.$cookie.get('login_token'))
    // this.$store.state.enc_member = this.$cookie.get('set_enc')
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  @import './assets/css/style.css';
</style>
