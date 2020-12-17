<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[완주기념패 전달 안내]</b><br>
                  ‘꼭 가봐야 할 현중시설 100’<br>
                  스탬프투어에 참여해 주신<br>
                  모든 분들께 감사드립니다.<br><br>
                  완주기념패 전달 안내는<br>
                  상세보기에서 확인하시기 바랍니다.<br>
                  [‘꼭 가봐야 할 현충시설 100’]<br>
                  2021년에도 많은 관심과<br>
                  참여 부탁 드립니다.
                </div>
                <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="viewDetail">자세히 보기</button>
        </div>
        <div class="popDetailImage" v-if="popImg">
          <img class="vimg" src="@/assets/images/event/popup/hyunchung_pop.jpg" alt="현충 팝업">
          <div class="cbox" @click="popImg = false">
            <img class="close" src="@/assets/images/close.png" alt="close">
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Hyunchung100',
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
        this.$cookie.set('hyunchung_pop', 'Y', 9999)
      }
      this.$store.state.hyunchungPopup = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('hyunchung_pop', 'Y', 9999)
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
