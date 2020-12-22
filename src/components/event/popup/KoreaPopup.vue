<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[설문 이벤트 당첨자 발표]</b><br>
                  2020년 올 한해도 코리아둘레길을<br>
                  방문해 주셔서 감사드리며<br>
                  2021년에도 변함없는 관심과<br>
                  사랑 부탁드리겠습니다.<br><br>
                  코리아둘레길 설문이벤트<br>
                  당첨자는 '상세보기'에서<br>
                  확인하실 수 있습니다.<br><br>
                  2021년도에도 많은 관심과<br>
                  참여 부탁드립니다.
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="viewDetail">상세 보기</button>
        </div>
    </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'KoreaPopup',
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
        this.$cookie.set('korea_pop', 'Y', 9999)
      }
      this.$store.state.koreaPopup = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('korea_pop', 'Y', 9999)
      }
      this.$store.state.koreaPopup = false
      const url = 'https://docs.google.com/spreadsheets/d/1syAwO1R9FR1YTZZt6KazIBllebAGaZ8xDftgmDubzgA/edit?usp=sharing'
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
