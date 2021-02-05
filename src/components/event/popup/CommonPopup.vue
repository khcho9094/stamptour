<template>
    <div>
        <div v-for="(list, idx) in popupList" :key="idx">
          <div class="pop_overay" v-if="$cookie.get(`popup_${list.notice_popup_seq}`) !== 'Y'">
            <div class="pop_cont">
              <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
              <div class="text_2 noviewpop">
                  <div class="stamp_success">
                  <b>[{{ list.notice_popup_title}}]</b>
                  <div v-html="list.notice_popup_content"></div>
                  </div>
                  <div v-if="list.notice_popup_close_yn == 'Y'" class="chkbox">
                  <input type="checkbox" id="noviewpop1"  name="noviewpop1" checked="checked" v-model="list.pop_check"><label for="noviewpop1">일주일 동안 보지 않기</label>
                  </div>
              </div>
              <button :class="list.notice_popup_url ? 'type1' : ''" @click="closeBtn(list, idx)">닫기</button>
              <button v-if="list.notice_popup_url" class="type2" @click="viewDetail(list)">자세히 보기</button>
            </div>
          </div>
        </div>
        <div class="popDetailImage" v-if="popImg">
          <img class="vimg" :src="popImg" alt="">
          <div class="cbox" @click="popImg = ''">
            <img class="close" src="@/assets/images/close.png" alt="close">
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
import * as appEvent from '@/assets/js/app_event.js'
import { mapState } from 'vuex'
export default {
  name: 'CommonPopup',
  props: ['mingleCode'],
  computed: {
    ...mapState(['popupList'])
  },
  data () {
    return {
      popImg: ''
    }
  },
  mounted () {
  },
  methods: {
    closeBtn (list, idx) {
      if (list.pop_check) {
        this.$cookie.set(`popup_${list.notice_popup_seq}`, 'Y', 7)
      }
      this.popupList.splice(idx, 1)
    },
    viewDetail (list) {
      if (list.notice_popup_url.indexOf('stamp.tranggle.com') > -1 && (list.notice_popup_url.indexOf('jpg') > -1 || list.notice_popup_url.indexOf('png') > -1)) {
        this.popImg = list.notice_popup_url
      } else if (list.notice_popup_url.indexOf('mstamp.tranggle.com') > -1 || list.notice_popup_url.indexOf('stagestamp.tranggle.com') > -1) {
        appEvent.interiorLink(list.notice_popup_url.split('.com')[1])
      } else {
        appEvent.externalLinks(list.notice_popup_url)
      }
    }
  }
}
</script>
