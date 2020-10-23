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
    const mArr = [
      'SzActcWN5QXozxDixoG4zQ==',
      '/GN62eV1c4Q78ghWNMWRsQ==',
      // 'QAAPpA7foDPqF3zEzdvHrw==', 구로 서비스 종료
      'M0ZRcktVl8H3kJaRKq3Irg==',
      'HvbQjGJR2yF9vTu8m2TUZQ==',
      'iQxiUpF8ZfaGodRQJ6s0mg==',
      'vSi8Z9QlNS5wushabGnrhA==',
      '4k68KEPNtv/xCP0/x2Hirw==',
      'YQTt4DYGRx7iBHRXs2IlPA==',
      'xYwbII8pDWTT1VzPbK3E1g==',
      'Nvn2hlG+v6mVAUJsmrbJ8w==',
      '+0DVeHum2c+rBgEjLoPi6Q==',
      'UQ3+JiYENuJBR+gw6zSYPA==',
      '0lDg6JT7iYoHXLAPV4p8wA=='
    ]
    if (this.$route.query.minglecode) {
      mArr.map((data) => {
        if (data.toLowerCase() === this.$route.query.minglecode) {
          this.$route.query.mingleCode = data
        }
      })
    }
    // this.$store.dispatch('GetStampTourList')
    if (this.$route.query.mingleCode) {
      this.$cookie.set('service_code', this.$route.query.mingleCode, 9999)
    }
  },
  beforeMount () {
    if (this.$cookie.get('login_token') !== null && this.$cookie.get('login_token') !== '') {
      this.$store.dispatch('setToken', this.$cookie.get('login_token'))
      this.$store.state.guestChk = 'N'
    } else {
      this.$store.dispatch('setToken', this.$cookie.get('guest_token'))
      this.$store.state.guestChk = 'Y'
    }
    this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
    this.$store.state.enc_member = this.$cookie.get('set_enc')
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  @import './assets/css/style.css?202007141145';
</style>
