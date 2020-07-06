<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju3">
                  <b class="wonju3tit">[보Go, 찍Go, 받Go]</b><br>
                  한국관광100선 스탬프투어 이벤트<br><br>
                  이벤트 기간 : 2020.07.01~8.31<br>
                  당첨자 발표 : 2020. 09.04.<br>
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop"  name="noviewpop" checked="checked" v-model="check"><label for="noviewpop">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="viewDetail">상세보기</button>
        </div>
    </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'WonjuPopup4',
  data () {
    return {
      check: false
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      if (this.check) {
        this.$cookie.set('tour_100', 'Y', 9999)
      }
      this.$store.state.wonjuPopup4 = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('tour_100', 'Y', 9999)
      }
      const url = 'https://korean.visitkorea.or.kr/other/stamptour.do'
      appEvent.externalLinks(url)
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
