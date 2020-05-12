<template>
    <!-- 팝업 -->
   <div class="pop_overay" v-show="stampOpen">
        <div class="pop_cont">
            <div class="pop_stamp">
              <div class="sbox">
                <img src="@/assets/images/dummy_img/stamp.png" alt="stamp">
              </div>
              <div class="stxt">반계리 은행나무</div>
              <div class="sdate">2020/04/27 PM 03:45</div>
            </div>
            <button v-on:click="closeBtn()">닫기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupStamp',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['stampOpen'])
  },
  methods: {
    closeBtn () {
      const openChk = this.$store.state.stampOpen
      this.$store.dispatch('loadStampPopup', openChk)
    }
  },
  mounted () {
  }
}
</script>
