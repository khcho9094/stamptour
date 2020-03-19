<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  beforeCreate () {
    console.log(this.$route.query.mingleCode)
    if (this.$route.query.mingleCode) {
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
    }
  },
  created () {
    this.getCoordData()
  },
  beforeMount () {
    this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
  },
  methods: {
    getCoordData () {
      let tranggle3
      if (this.$cookie.get('total_stamp_yn') === 'Y') {
        if (/Android/i.test(navigator.userAgent)) {
          tranggle3.tranggle_callback('chk_coordinate', '{}')
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = 'tranggle_callback://chk_coordinate'
        } else {
          return false
        }
      }
    }
  }
}
</script>
<style>
  @import './assets/css/style.css';
</style>
