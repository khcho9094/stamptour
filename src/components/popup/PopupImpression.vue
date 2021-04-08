<template>
    <div class="pop_overay pop_impression" v-show="impressionOpen">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text">
                <span>{{ title }}</span>
                방문 소감 등록하고<br/>선물 받으세요
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="impressionURL()">등록</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
// import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'PopupImpression',
  props: {
    title: String
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['impressionOpen', 'imporessionGiftCode'])
  },
  methods: {
    closeBtn () {
      this.$store.state.impressionOpen = !this.$store.state.impressionOpen
    },
    impressionURL () {
      router.push(`/impression/write?giftCode=${this.imporessionGiftCode}`)
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
