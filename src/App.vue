<template>
  <div id="app">
    <router-view/>
    <div class="go_top" v-if="this.topBtn" @click="topBtnClick">
      <img src="@/assets/images/top_btn_n.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      topBtn: false,
      mArr: []
    }
  },
  watch: {
    stampCodeInfo () {
      if (this.$route.query.minglecode) {
        this.stampCodeInfo.map((data) => {
          if (data.code.toLowerCase() === this.$route.query.minglecode) {
            this.$route.query.mingleCode = data.code
          }
        })
      }
      if (this.$route.query.mingleCode) {
        const mcArr = this.$route.query.mingleCode.replace(/ /gi, '+').split('|')
        this.$cookie.set('service_code', mcArr[0], 9999)
      }
      this.$store.dispatch('setMingleCode', this.$route.query.mingleCode || this.$cookie.get('service_code'))
      this.$store.dispatch('loadIntroData', this.$route.query.mingleCode || this.$cookie.get('service_code'))
    }
  },
  computed: {
    ...mapState(['stampCodeInfo'])
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
    this.$store.dispatch('GetStampTourList')
  },
  beforeMount () {
    if (this.$cookie.get('login_token') !== null && this.$cookie.get('login_token') !== '') {
      this.$store.dispatch('setToken', this.$cookie.get('login_token'))
      this.$store.state.guestChk = 'N'
    } else {
      this.$store.dispatch('setToken', this.$cookie.get('guest_token'))
      this.$store.state.guestChk = 'Y'
    }
    // this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
    this.$store.state.enc_member = this.$cookie.get('set_enc')
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  @import './assets/css/style.css?202104270924';
</style>
