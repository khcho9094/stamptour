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
    }
  },
  computed: {
    ...mapState(['popupGift'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openPopupGift', {})
    },
    receiveGift () {
      alert('선물 받기')
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    }
  },
  mounted () {
  }
}
</script>
