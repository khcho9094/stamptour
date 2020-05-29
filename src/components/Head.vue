<template>
  <header>
      <div class="logo" v-if="type == 'logo'" >
          <img :src="introData.image_logo" alt="">
      </div>
      <div class="head_back" v-else>
          <div class="back_box" @click="goBack">
            <img src="@/assets/images/back.png" alt="back">
          </div>
          <span>{{title}}</span>
      </div>
      <button v-show="name === 'main'" class="r_type2 home" @click="goHome">홈가기</button>
      <button v-bind:class="headBtn" @click="moreClick">{{btnType[name]}}</button>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'haed',
  props: {
    type: String,
    name: String,
    title: String
  },
  data () {
    return {
      btnType: {
        intro: 'close',
        main: 'more',
        tour: 'share',
        gift: 'share'
      }
    }
  },
  computed: {
    headBtn () {
      const arr = Object.keys(this.btnType)
      let btnClass = 'r_type1 '
      arr.map((val) => {
        if (this.name === val) {
          btnClass += this.btnType[val]
        }
      })
      return btnClass
    },
    ...mapState(['introData', 'giftSolo'])
  },
  methods: {
    moreClick () {
      if (this.name === 'main') {
        this.$emit('moreBtn')
      } else if (this.name === 'tour' || this.name === 'gift') {
        const openChk = this.$store.state.snsOpen
        this.$store.dispatch('loadSnsPoint')
        this.$store.dispatch('loadSnsPopup', openChk)
      } else if (this.name === 'intro') {
        this.goHome()
      }
    },
    goHome () {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('go_home_event', '{}')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://go_home_event'
      } else {
        return false
      }
    },
    goBack () {
      if ((this.$route.name === 'Gift' && !this.giftSolo) || this.$route.name === 'Stamp' || this.$route.name === 'AllGift') {
        if (/Android/i.test(navigator.userAgent)) {
          // eslint-disable-next-line no-undef
          tranggle3.tranggle_callback('back_btn_event', '{}')
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = 'tranggle_callback://back_btn_event'
        } else {
          return false
        }
      } else {
        if (this.$route.name === 'Gift') {
          this.$router.push('/')
        } else {
          this.$router.go(-1)
        }
      }
    }
  },
  mounted () {
    // this.$store.dispatch('loadIntroData')
  }
}
</script>
