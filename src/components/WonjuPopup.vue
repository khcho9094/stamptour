<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[이벤트 당첨자 발표]</b><br>
                  2020 원주 Smart 스탬프 투어<br>
                  하반기 스탬프왕 당첨자를 발표합니다.<br><br>
                  <span class="tal">
                    <b>1등 1명</b> 15만원상당 미니빔프로젝터<br>
                    <b>2등 2명</b> 10만원 상당 스마트밴드<br>
                    <b>3등 3명</b> 5만원 강원(원주)상품
                  </span>
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="viewDetail">자세히 보기</button>
        </div>
        <div class="popDetailImage" v-if="popImg">
          <img class="vimg" src="@/assets/images/event/popup/wonju_pop2.jpg" alt="원주 이벤트">
          <div class="cbox" @click="popImg = false">
            <img class="close" src="@/assets/images/close.png" alt="close">
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WonjuPopup',
  data () {
    return {
      check: false,
      popImg: false
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      if (this.check) {
        this.$cookie.set('wonju_pop', 'Y', 9999)
      }
      this.$store.state.wonjuPopup = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('wonju_pop', 'Y', 9999)
      }
      this.popImg = true
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
  .popDetailImage {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: auto;
    background: #eee;
  }
  .popDetailImage img.vimg {
    width: 100%;
  }
  .popDetailImage .cbox {
    position: fixed;
    top: 15px;
    right: 15px;
    width:50px;
    height:50px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 10px;
  }
  .popDetailImage .cbox img.close {
    width: 30px;
    margin-top: 10px;
  }
</style>
