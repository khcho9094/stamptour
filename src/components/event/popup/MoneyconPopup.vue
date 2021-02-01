<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[머니콘 서버 업데이트]</b><br>
                  머니콘 서버 업데이트로 인하여<br>모바일 기프티콘의 실시간 발송,<br>발급이 일시 중단될 예정입니다.<br>
                  <b style="display:inline-block; margin: 5px 0;">2021년 02월 02일(화)<br>00:00 ~ 04:00 (약 4시간)</b><br>
                  실시간 발송이 안된 경우, 해당<br>시간 경과 후 '선물' 리스트에서<br>직접 기프티콘 발급 신청을<br>하실 수 있습니다.<br>
                  감사합니다.
                </div>
            </div>
            <button @click="closeBtn">닫기</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MoneyconPopup',
  data () {
    return {
      check: false
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.moneyconPopup = false
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
<style>
  .wonju3tit {
    display: inline-block;
    margin-bottom:5px;
    font-size: 1.1em;
  }
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
    padding:0 5px;
    word-break: keep-all;
  }
</style>
