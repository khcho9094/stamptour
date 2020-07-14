<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[이벤트 당첨자 발표]</b><br>
                  2020 원주 Smart 스탬프 투어<br>
                  상반기 스탬프왕 당첨자 발표<br><br>
                  <span class="tal">
                    <b>1등 1명</b> 미니빔 프로젝터<br>
                    <b>2등 2명</b> 스마트밴드<br>
                    <b>3등 3명</b> 5만원 강원(원주) 상품권
                  </span>
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="viewDetail">자세히 보기</button>
        </div>
    </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'WonjuPopup1',
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
        this.$cookie.set('wonju_pop1', 'Y', 9999)
      }
      this.$store.state.wonjuPopup1 = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('tour_100', 'Y', 9999)
      }
      const url = 'https://docs.google.com/document/d/1SC5NK_7I1HI-ZTxEn9e-VWzocGiLGbDK-kwJE--h7N4/edit'
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
