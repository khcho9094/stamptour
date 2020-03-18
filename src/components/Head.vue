<template>
  <header>
      <div class="logo" v-if="type == 'logo'" >
          <img :src="introData.image_logo" alt="title_logo">
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
        tour: 'share'
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
    ...mapState(['introData'])
  },
  methods: {
    moreClick () {
      if (this.name === 'main') {
        this.$emit('moreBtn')
      } else if (this.name === 'tour') {
        const openChk = this.$store.state.snsOpen
        this.$store.dispatch('loadSnsPopup', openChk)
      }
    },
    goHome () {
      let tranggle3
      if (/Android/i.test(navigator.userAgent)) {
        tranggle3.tranggle_callback('go_home_event', '{}')
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = 'tranggle_callback://go_home_event'
      } else {
        return false
      }
    },
    goBack () {
      let tranggle3
      if (document.referrer !== '') {
        this.$router.go(-1)
      } else {
        if (/Android/i.test(navigator.userAgent)) {
          tranggle3.tranggle_callback('back_btn_event', '{}')
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = 'tranggle_callback://back_btn_event'
        } else {
          return false
        }
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
    this.$store.dispatch('loadTotalData')
  }
}
</script>
