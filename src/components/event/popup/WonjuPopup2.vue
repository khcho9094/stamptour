<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success wonju">
                  코로나19 확산 예방을 위해,<br>
                  고성 통일전망대가 잠정 폐쇄<br>
                  (2020년 2월 25일 ~ 무기한)<br>
                  되었으므로 50코스 이용시<br>
                  참고하여 주시기 바랍니다.
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WonjuPopup2',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.wonjuPopup2.open = false
      localStorage.stampDetail = JSON.stringify(this.$store.state.wonjuPopup2.data)
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_loc', `{lat:${this.$store.state.wonjuPopup2.data.info_org_lat} ,lon:${this.$store.state.wonjuPopup2.data.info_org_lon} ,badge_id:${this.$store.state.wonjuPopup2.data.mingle_badge_id} }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_loc?lat=${this.$store.state.wonjuPopup2.data.info_org_lat}&lon=${this.$store.state.wonjuPopup2.data.info_org_lon}&badge_id=${this.$store.state.wonjuPopup2.data.mingle_badge_id}`
      } else {
        return false
      }
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
<style>
  .arrows {
    width:10px;
    position: relative;
    top: 2px;
    margin:0 5px;
  }
  .wonju {
    color:#000;
    font-size: 17px;
    font-family:inaviL;
    line-height:1.5;
  }
</style>
