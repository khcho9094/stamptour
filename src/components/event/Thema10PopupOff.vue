<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju3">
                  <b class="wonju3tit">[긴급안내]</b><br>
                  대한민국 안전여행 참여 이벤트는<br>
                  사회적 거리두기 강화에 따라<br>
                  8월 24일부로 잠정 중단됨을 알립니다.<br>
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
