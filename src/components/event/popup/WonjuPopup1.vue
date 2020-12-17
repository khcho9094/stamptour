<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[기프티콘 발급 종료]</b><br>
                  『2020년도 원주구석구석 어디까지 가봤니? 』<br>
                  스탬프투어 기프티콘 발급이<br>
                  2020년 12월 4일(금) 자정부터 종료됩니다.<br><br>
                  2021년 새로운 모습으로 다시 만나요~
                </div>
                <!-- <div class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                </div> -->
            </div>
            <button @click="closeBtn">닫기</button>
            <!-- <button class="type2" @click="viewDetail">자세히 보기</button> -->
        </div>
    </div>
</template>
<script>
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
      this.$store.state.wonjuPopup1 = false
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
