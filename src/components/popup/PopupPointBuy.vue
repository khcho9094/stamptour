<template>
    <div class="pop_overay pop_point_buy">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_gift.png" alt="icon">
            <div class="text_2">
                <strong>{{totalSelectGift.mingle_tot_gift_title}}</strong>
                <div class="img_box">
                    <img :src="`https://stamp.tranggle.com/${totalSelectGift.mingle_tot_gift_image}`" alt="" />
                </div>
                <p>{{comma(totalSelectGift.mingle_tot_gift_count)}}P가 차감되며, 회원정보에 등록된<br/>휴대폰 메시지로 모바일 상품권이<br/>발송됩니다. 지금 받으시겠습니까?</p>
                <div class="agree_pop">
                    <div class="agree_info">
                        <div class="tit">휴대폰</div>
                        <span>{{totalMemberInfo.member_mobile || '정보 없음'}}</span>
                    </div>
                </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="receiveItem">받기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupPointBuy',
  computed: {
    ...mapState(['totalMemberInfo', 'totalSelectGift', 'totalGiftPoint'])
  },
  methods: {
    closeBtn () {
      this.$store.state.totalBuyPop = false
    },
    receiveItem () {
      if (this.totalSelectGift.mingle_tot_gift_count > this.totalGiftPoint) {
        this.$store.state.totalBuyPop = false
        this.$store.state.totalLackPop = true
      } else {
        this.$store.state.totalBuyPop = false
        console.log(this.totalSelectGift)
        this.$store.dispatch('ApplyTotalMall', { pGift: this.totalSelectGift, mInfo: this.totalMemberInfo })
      }
    },
    comma (val) {
      return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
    }
  }
}
</script>
