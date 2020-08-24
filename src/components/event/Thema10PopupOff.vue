<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju3">
                  <b class="wonju3tit">[긴급안내]</b><br>
                  코로나19 감염병 확산방지를 위하여<br>
                  '대한민국 안전여행 참여이벤트'는<br>
                  8/24일부터 잠정중지 됩니다.<br>
                  (단, 9/7일 당첨자 발표는 예정대로 진행)<br>
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
  name: 'Thema10PopupOff',
  data () {
    return {
      check: false
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.thema10Stop = false
    },
    viewDetail () {
      const url = 'http://ktourtop10.kr/kr/index.php'
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
