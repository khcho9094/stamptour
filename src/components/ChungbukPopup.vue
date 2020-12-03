<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[신세계 상품권 증정 이벤트]</b><br>
                  충북 나드리 스탬프투어 1개만<br>
                  받아도 2만원 상당 신세계 상품권<br>
                  증정!!<br><br>
                  <span class="tal">
                    <b>이벤트 기간 :</b> 2020.12.01 ~ 12.10<br>
                    <b>대 상 :</b> 800명
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
          <img class="vimg" src="@/assets/images/event/popup/nadri_pop1.jpg" alt="충북 이벤트">
          <div class="cbox" @click="popImg = false">
            <img class="close" src="@/assets/images/close.png" alt="close">
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ChungbukPopup',
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
        this.$cookie.set('chungbuk_pop', 'Y', 9999)
      }
      this.$store.state.chungbukPopup = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('chungbuk_pop', 'Y', 9999)
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
