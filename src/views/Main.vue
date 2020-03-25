<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' v-on:moreBtn='handleMoreButton' />
    <MainStamp />
    <MainGiftView v-if="this.mingleCode !== 'iQxiUpF8ZfaGodRQJ6s0mg=='" />
    <MainRecommend />
    <MainList />
    <Popup :visible='visible' v-on:moreBtn='handleMoreButton' />
    <PopupGift />
    <PopupSns />
    <PopupStampSuccess v-if="popupStampSuccess" />
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import MainStamp from '@/components/MainStamp.vue'
import MainGiftView from '@/components/MainGiftView.vue'
import MainRecommend from '@/components/MainRecommend.vue'
import MainList from '@/components/MainList.vue'
import Popup from '@/components/PopupMenu.vue'
import PopupGift from '@/components/PopupGift.vue'
import PopupSns from '@/components/PopupSns.vue'
import PopupStampSuccess from '@/components/PopupStampSuccess.vue'
// import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'Main',
  components: {
    Head,
    MainStamp,
    MainGiftView,
    MainRecommend,
    MainList,
    Popup,
    PopupGift,
    PopupSns,
    PopupStampSuccess
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      visible: false,
      visibleGift: false,
      snsVisible: false,
      params: {
        order: 'pop',
        status: 'ALL',
        areaCode: '0'
      }
    }
  },
  computed: {
    ...mapState(['popupStampSuccess', 'mingleCode'])
  },
  methods: {
    handleMoreButton () {
      this.visible = !this.visible
    },
    handleMoreSnsButton () {
      this.snsVisible = !this.snsVisible
    }
  },
  beforeCreate () {
    // 합산 해야 하는 스탬프투어 코드 쿠키 존재 여부 체크
    if (this.$cookie.get(this.$store.state.enc_member)) {
      const data = JSON.parse(this.$cookie.get(this.$store.state.enc_member))
      let mingleCodeArr = ''
      let cnt = 1
      data.content.map(val => {
        if (data.content.length > cnt) {
          mingleCodeArr += `${val.mingleCode},`
        } else {
          mingleCodeArr += `${val.mingleCode}`
        }
        cnt += 1
      })
      this.$store.state.mingleCodeArr = mingleCodeArr
    }
  },
  // beforeMount () {
  //   this.$store.dispatch('setMingleCode', this.$cookie.get('service_code'))
  // },
  mounted () {
    this.$store.dispatch('loadMainData', this.params)
  }
}
</script>
