<template>
    <div v-if="commonPopupBool">
        <div v-for="(list, idx) in popupList" :key="idx"  class="pop_overay">
            <div class="pop_cont">
                <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
                <div class="text_2 noviewpop">
                    <div class="stamp_success wonju">
                    <b class="wonju3tit">[{{ list.notice_popup_title}}]</b><br>
                    <div v-html="list.notice_popup_content"></div>
                    </div>
                    <div v-if="list.notice_popup_close_yn == 'Y'" class="chkbox">
                    <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="check"><label for="noviewpop1">다시 보지 않기</label>
                    </div>
                </div>
                <button v-if="list.notice_popup_url" class="type1" @click="closeBtn">닫기</button>
                <button v-if="list.notice_popup_url" class="type2" @click="viewDetail">자세히 보기</button>
                <button v-if="!list.notice_popup_url" @click="closeBtn">닫기</button>
            </div>
        </div>
    </div>
</template>
<script>
/*
  체크해야할 것들
  1. 한페이지 안에 팝업이 여러개일 경우 생각하기
     현재는 commonPopupBool을 통해 한개의 팝업으로만 관리
  2. 쿠키 저장할때 쿠키명어떻게 저장시킬지
  3. 상세보기 링크가 외부가 아닌 내부에 레이어팝업으로 이미지만 띄울 경우
     url 받아와서 외부에 띄우기로함
*/
import { mapState } from 'vuex'
export default {
  name: 'CommonPopup',
  props: ['mingleCode'],
  computed: {
    ...mapState(['popupList', 'commonPopupBool'])
  },
  data () {
    return {
      check: false
    }
  },
  mounted () {
    this.$store.state.commonPopupBool = true
  },
  methods: {
    closeBtn () {
      if (this.check) {
        this.$cookie.set(this.mingleCode, 'Y', 9999)
      }
      this.$store.state.commonPopupBool = false
    }
  }
}
</script>
