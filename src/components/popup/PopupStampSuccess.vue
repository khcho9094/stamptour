<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_stamp.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success">
                     <h3>스탬프 미션 성공!</h3>
                     <span>
                       축하합니다!
                     </span>
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupStampSuccess',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['badgeRegister'])
  },
  methods: {
    closeBtn () {
      this.$store.state.popupStampSuccess = false
    }
    // imgIcon () {
    //   return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    // }
  },
  mounted () {
  },
  destroyed () {
    this.$router.go()
  }
}
</script>
