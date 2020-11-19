<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2 noviewpop">
                <div class="stamp_success wonju">
                  <b class="wonju3tit">[남파랑길 개통 기념<br/>대국민 온라인 이벤트]</b><br>
                  남파랑길 여행도 하고 '국민관광상품권'도 받으세요.<br><br>
                  <span class="tal">
                    2020.10.31~2020.11.30
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
  name: 'WonjuPopup3',
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
        this.$cookie.set('korea_pop1', 'Y', 9999)
      }
      this.$store.state.wonjuPopup3 = false
    },
    viewDetail () {
      if (this.check) {
        this.$cookie.set('korea_pop1', 'Y', 9999)
      }
      this.$store.state.wonjuPopup3 = false
      const url = 'https://www.durunubi.kr/8-3-1-info-event-view.do?event_id=10016'
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
