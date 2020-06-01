<template>
    <div class="pop_overay" v-if="themaPop.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="noti_txt" v-html="themaPop.tit1"></div>
                <div class="thema_noti" v-if="themaPop.tit2 !== ''">
                  <div class="notice">Notice</div>
                  <div class="txt" v-html="themaPop.tit2"></div>
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Thema10PopupNotice',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['themaPop'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openThemaNoti', {})
    }
  },
  mounted () {
  }
}
</script>
