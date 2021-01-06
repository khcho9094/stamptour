<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[이벤트 당첨자 발표]</b><br>
                  2021년 새해를 맞이하여 건강과<br>행운이 가득하시길 바랍니다.<br>
                  대한민국 안전여행 참여이벤트<br>당첨자는 '상세보기'에서<br>확인하실 수 있습니다.
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
  name: 'Thema10Popup',
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
        this.$cookie.set('thema10_pop', 'Y', 7)
      }
      this.$store.state.thema10Popup = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('thema10_pop', 'Y', 7)
      }
      this.$store.state.thema10Popup = false
      const url = 'https://www.moneycon.co.kr/MCon-DataCollection/static/Client/view/index.html#/prize'
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
