<template>
    <!-- 팝업 -->
   <div class="pop_overay" v-show="stampOpen">
        <div class="pop_cont">
            <div class="pop_stamp">
              <div class="sbox">
                <!-- <img src="@/assets/images/dummy_img/stamp.png" alt="stamp"> -->
                <img :src="getStampImage()" alt="stamp">
              </div>
              <!-- <div class="stxt">반계리 은행나무</div>
              <div class="sdate">2020/04/27 PM 03:45</div> -->
              <div class="stxt">{{getStampName}}</div>
              <div class="sdate">{{getStampDate}}</div>
            </div>
            <button v-on:click="closeBtn()">닫기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupMyStamp',
  data () {
    return {
      stamp_image: '',
      stamp_name: '',
      stamp_get_time: ''
    }
  },
  computed: {
    ...mapState(['stampOpen', 'getStampName', 'getStampDate'])
  },
  methods: {
    closeBtn () {
      const openChk = this.$store.state.stampOpen
      this.$store.dispatch('loadStampPopup', openChk)
    },
    getStampImage () {
      return this.$store.state.getStampImage
    }
  },
  mounted () {
  }
}
</script>
