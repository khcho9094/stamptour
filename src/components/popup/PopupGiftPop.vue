<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="noti_txt">
                  <div v-html="popupNoti.tit1"></div>
                  <span v-if="popupNoti.tit2">{{popupNoti.tit2}}</span>
                </div>
            </div>
            <button :class="(popupNoti.tit2) ? 'type1' : ''" @click="closeBtn">닫기</button>
            <button class="type2" v-if="popupNoti.tit2" @click="receiveInfo">계정정보 입력</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupGiftPop',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['popupNoti'])
  },
  methods: {
    closeBtn () {
      window.history.back()
      this.$store.dispatch('openNotiPopup', {})
    },
    receiveInfo () {
      location.href = 'https://m.tranggle.com/mingle/intro/total_account_setting'
    }
  },
  mounted () {
    // window.onpopstate = history.onpushstate = (e) => {
    //   if (window.location.href.split('/').pop().indexOf('modal2') === -1) {
    //     this.$store.dispatch('openPopupGift', {})
    //   }
    // }
  }
}
</script>
