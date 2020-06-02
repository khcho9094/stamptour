<template>
    <div class="pop_overay" v-if="popupGift.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <span>
                    <img :src="imgIcon()" alt="gs25">
                    {{popupGift.mingle_gift_title}}
                </span>
                <div v-if="setStamp()">해당 선물 획득까지<br/>{{this.popupGift.mingle_count - this.myPoint}} POINT 남았습니다.</div>
                <div v-else>해당 선물 획득까지<br/>{{this.popupGift.mingle_count - this.getStampCount}}개의 스탬프가 남았습니다.</div>
            </div>
            <button @click="closeBtn">닫기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupGift',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['popupGift', 'getStampCount', 'stampCodeInfo', 'mingleCode', 'myPoint'])
  },
  methods: {
    closeBtn () {
      // window.history.back()
      this.$store.dispatch('openPopupGift', {})
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    },
    setStamp () {
      let tg = false
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode && data.info === 'point') {
          tg = true
        } else if (data.code === this.mingleCode && data.info === 'number') {
          tg = false
        }
      })
      return tg
    }
  },
  mounted () {
    // window.onpopstate = history.onpushstate = (e) => {
    //   if (window.location.href.split('/').pop().indexOf('modal') === -1) {
    //     this.$store.dispatch('openPopupGift', {})
    //   }
    // }
  }
}
</script>
