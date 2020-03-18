<template>
    <div class="pop_overay" v-if="popupGift.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <span>
                    <img :src="imgIcon()" alt="gs25">
                    {{popupGift.mingle_gift_title}}
                </span>
                해당 선물 획득까지<br/>{{this.popupGift.mingle_count - this.getStampCount}}개의 스탬프가 남았습니다.
            </div>
            <button @click="closeBtn">닫기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupGift',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['popupGift', 'getStampCount'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openPopupGift', {})
    },
    imgIcon () {
      return `https://m.tranggle.com/html/images/mingle/${this.popupGift.mingle_gift_image}`
    }
  },
  mounted () {
  }
}
</script>
