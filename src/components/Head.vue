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
      <button v-if="!impressionComplete" v-bind:class="headBtn" @click="moreClick">{{btnType[name]}}</button>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'haed',
  props: {
    type: String,
    name: String,
    title: String,
    registData: Object,
    registImg: Array
  },
  data () {
    return {
      btnType: {
        intro: 'close',
        main: 'more',
        tour: 'share',
        gift: 'share',
        write: 'complete'
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
    ...mapState(['introData', 'giftSolo', 'impressionComplete'])
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
      } else if (this.name === 'write') { // 방문소감
        this.registData.imageFile01 = this.registImg[0]
        this.registData.imageFile02 = this.registImg[1] ? this.registImg[1] : ''
        this.registData.imageFile03 = this.registImg[2] ? this.registImg[2] : ''
        // 유효성 체크
        if (!this.registData.title) {
          alert('제목을 입력하세요.')
          return false
        } else if (!this.registData.comment) {
          alert('내용을 입력하세요.')
          return false
        } else if (!this.registData.imageFile01) {
          alert('사진은 최소 1장 등록해야 합니다.')
          return false
        }
        // 버튼 가리기 추가
        this.$store.state.impressionComplete = true
        this.$store.dispatch('setVisitComment', this.registData)
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
      if ((this.$route.name === 'Gift' && !this.giftSolo) || this.$route.name === 'Stamp' || this.$route.name === 'AllGift' || this.$route.name === 'EventThema10' || this.$route.name === 'Kogas') {
        if (this.$route.query.back === 'y') {
          this.$router.go(-1)
          return false
        }
        if (/Android/i.test(navigator.userAgent)) {
          // eslint-disable-next-line no-undef
          tranggle3.tranggle_callback('back_btn_event', '{}')
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = 'tranggle_callback://back_btn_event'
        } else {
          return false
        }
      } else {
        console.log(this.$route.query)
        if (this.$route.name === 'Gift') {
          this.$router.push('/')
        } else if (this.name === 'search' && this.$route.query.length === 0) {
          this.goHome()
        } else {
          this.$router.go(-1)
        }
      }
    }
  },
  mounted () {
    this.$store.state.impressionComplete = false
    // this.$store.dispatch('loadIntroData')
  }
}
</script>
