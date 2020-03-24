<template>
  <div id="app">
    <router-view/>
    <div class="go_top" v-if="this.topBtn" @click="topBtnClick">
      <img src="@/assets/images/top_btn_n.png" alt="">
    </div>
  </div>
</template>
<script>
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
  },
  beforeMount () {
    this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
    this.$store.dispatch('setToken', this.$cookie.get('login_token'))
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
