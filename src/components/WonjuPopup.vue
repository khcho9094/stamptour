<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[이벤트 안내]</b><br>
                  스탬프 인증 시 포인트 2배 적립과
                  원주시 입체 마그넷 증정!!<br>
                  증정장소 : 박경리문학공원/한지문화원
                  /역사박물관/간현관광지 4개소<br><br>
                  이벤트기간 : 7월1일 ~ 19일
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WonjuPopup',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.wonjuPopup = false
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
    padding:0 15px;
  }
</style>
