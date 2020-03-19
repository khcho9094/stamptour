<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  beforeCreate () {
    if (this.$route.query.mingleCode) {
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
    }
  },
  beforeMount () {
    this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
  }
}
</script>
<style>
  @import './assets/css/style.css';
</style>
