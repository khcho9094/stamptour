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
import router from '@/router'
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
      }
    },
    goHome () {
      console.log('gohome')
    },
    goBack () {
      router.go(-1)
    }
  },
  mounted () {
    this.$store.dispatch('loadIntroData')
    this.$store.dispatch('loadTotalData')
  }
}
</script>
