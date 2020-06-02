<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="stamp_success wonju">
                  코로나19로 스탬프투어<br>
                  스탬프 더블 적립 이벤트 기간이<br>
                  변경되었습니다.<br><br>
                  <b>5. 30. ~ 6. 14. <img class="arrows" src="@/assets/images/arrow_2.png" alt="icon"> 6. 20. ~ 7. 19.</b>
                </div>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WonjuPopup',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.wonjuPopup = false
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
<style>
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
  }
</style>
