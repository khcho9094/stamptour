<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success wonju3">
                  <b class="wonju3tit">[안전한 남파랑길 이용안내]</b><br>
                  남파랑길 전 코스는 정식 개통 전이므로 이용시 주의 부탁드립니다.<br>
                  특히 남파랑길 18, 19코스는 위험구간이 다소 분포되어 있는 <b>'미개통 구간'</b><br>
                  이므로, 임시노선 (17-1코스)를 이용하시기 바랍니다.<br>
                  감사합니다.
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WonjuPopup3',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.wonjuPopup3 = false
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
  .wonju3 {
    color:#000;
    font-size: 17px;
    font-family:inaviL;
    line-height:1.5;
    padding: 0px 15px;
    word-break: keep-all;
  }
</style>
