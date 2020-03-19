<template>
    <div class="pop_overay" v-if="popupGift.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_gift.png" alt="icon">
            <div class="text_2">
                <div class="gift_receive">
                  <b>{{popupGift.mingle_count}}P</b> 달성!!<br/>
                  <span>축하합니다!!</span>
                </div>
                <span>
                    <img :src="imgIcon()" alt="gs25">
                    {{popupGift.mingle_gift_title}}
                </span>
                <div class="check durunubi" v-if="mingleCode === 'SzActcWN5QXozxDixoG4zQ=='">
                  <input type="checkbox" id="durunubi"  name="durunubi" @change="durunubiCheck($event)"> <label for="durunubi">두루누비 계정확인</label>
                </div>
                <div class="check">
                  <input type="checkbox" id="personal"  name="personal" @change="checkStatus($event)"> <label for="personal">개인정보 제3자 제공동의</label>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="receiveGift">모바일 상품권 받기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupGiftReceive',
  data () {
    return {
      goGift: false
    }
  },
  computed: {
    ...mapState(['popupGift', 'mingleCode'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openPopupGift', {})
    },
    receiveGift () {
      if (this.goGift) {
        alert('선물 받기')
      } else {
        alert('개인정보 제3자 제공동의가 필요합니다.')
      }
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    },
    checkStatus (ev) {
      if (ev.target.checked) {
        this.goGift = true
      } else {
        this.goGift = false
      }
    },
    durunubiCheck (ev) {
      if (ev.target.checked) {
        alert('두루누비 계정 확인')
      }
    }
  },
  mounted () {
  }
}
</script>
