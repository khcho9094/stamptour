<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success wonju3">
                  <b class="wonju3tit">[안전한 남파랑길 이용안내]</b><br>
                  <span>
                    남파랑길 전 코스는 정식 개통 전이므로 이용시 주의 부탁드립니다.
                  </span>
                  <span>
                    특히 남파랑길 18, 19코스는 위험구간이 다소 분포되어 있는 <b>'미개통 구간'</b><br>
                    이므로, 임시노선 (17-1코스)을 이용하시기 바랍니다.
                  </span>
                  <span>
                    남파랑길 3코스 송도해안산책로 구간은 낙석으로 인해 2020.5.3부터 폐쇄되었습니다.<br>
                    안전점검이 마무리될 때까지 우회로를 이용하시기 바랍니다.
                  </span>
                  <span class="lst">
                    감사합니다.
                  </span>
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
    font-size: 16px;
    font-family:inaviL;
    line-height:1.5;
    padding: 0px 10px;
    word-break: keep-all;
  }
  .wonju3 span {
    display: block;
    text-align: left;
    padding: 0 5px;
    margin-bottom: 10px;
  }
  .wonju3 span.lst {
    margin-bottom: 0;
  }
</style>
