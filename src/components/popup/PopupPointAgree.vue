<template>
    <div class="pop_overay pop_point_agree">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <strong>포인트 혜택 이용을 위해 개인정보<br/>수집 및 이용 동의가 필요합니다.</strong>
                <div class="agree_pop" v-if="agreeCheck">
                  <div class="notice">Notice</div>
                  <div class="agree_desc">
                    • 수집/이용 목적<br>
                    <span>선물 발급 통계정보 작성</span><br/>
                    • 개인 정보 항목<br>
                    <span>연락처, 주소, 이름, 성별, 생년월일</span><br/>
                    • 보유기간 : <span>1년</span>
                  </div>
                  <div class="agree_info">
                    <div class="tit">휴대폰</div>
                    <span>{{memberInfo.mobile || '정보 없음'}}</span>
                  </div>
                </div>
                <div class="check" v-if="agreeCheck">
                    <div><input type="checkbox" id="collection"  name="collection" v-model="collection"> <label for="collection">개인정보 수집 및 이용 동의</label></div>
                    <div><input type="checkbox" id="personal"  name="personal" v-model="personal"> <label for="personal">개인정보 제3자 제공동의</label></div>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="agreePoint">동의</button>
        </div>
        <div class="loading_back" v-if="submitCheck">
          <img src="@/assets/images/ajax-loader.gif" alt="loader">
        </div>
        <PopupGiftPop v-if="popupNoti.open" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
// import * as appEvent from '@/assets/js/app_event.js'
import PopupGiftPop from '@/components/popup/PopupGiftPop.vue'
export default {
  name: 'PopupPointAgree',
  components: {
    PopupGiftPop
  },
  data () {
    return {
      durunubi: false,
      collection: false,
      personal: false,
      agreeCheck: true,
      unit: ''
    }
  },
  computed: {
    ...mapState(['popupGift', 'memberInfo', 'popupNoti', 'durunubiCheck', 'submitCheck'])
  },
  methods: {
    closeBtn () {
      // this.$store.dispatch('openPopupGift', {})
    },
    agreePoint () {
      if (!this.memberInfo.mobile) {
        this.$store.dispatch('openNotiPopup', {
          tit1: '선물을 받기 위해<br/>아래의 정보가 필요합니다.',
          tit2: '휴대폰 번호'
        })
      } else {
        if (!this.collection) {
          this.$store.dispatch('openNotiPopup', {
            tit1: '선물을 받기 위해<br/>개인정보 수집 및 이용 동의가<br/>필요합니다.',
            tit2: ''
          })
        } else if (!this.personal) {
          this.$store.dispatch('openNotiPopup', {
            tit1: '선물을 받기 위해<br/>개인정보 제3자 제공 동의가<br/>필요합니다.',
            tit2: ''
          })
        }
      }
    },
    agreeBtn (btnType) {
      if (this.memberInfo.mobile) {
        this.$cookie.set(`agree_point_${btnType}`, 'Y', 9999)
      }
    },
    agreeOn () {
      let className = ''
      if (this.memberInfo.address && this.memberInfo.mobile) {
        className = 'on'
      }
      return className
    }
  },
  watch: {
    collection () {
      if (this.collection) {
        this.agreeBtn('collection')
      } else {
        this.$cookie.set('agree_point_collection', 'N', 9999)
      }
    },
    personal () {
      if (this.personal) {
        this.agreeBtn('personal')
      } else {
        this.$cookie.set('agree_point_personal', 'N', 9999)
      }
    }
  },
  mounted () {
    if (this.$cookie.get('agree_point_collection') === 'Y' && this.$cookie.get('agree_point_personal') === 'Y') {
      this.collection = true
      this.personal = true
      this.agreeCheck = false
    }
  }
}
</script>
<style scoped>
  .loading_back {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(15, 14, 14, 0.3);
    z-index: 999999;
  }
  .loading_back img {
    width:40px;
    position:absolute;
    top:315px;
    left:50%;
    margin-left: -20px;
  }
</style>
