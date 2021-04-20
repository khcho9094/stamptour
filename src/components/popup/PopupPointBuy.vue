<template>
    <div class="pop_overay pop_point_buy">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon_gift.png" alt="icon">
            <div class="text_2">
                <strong>조지아 오리지널 240ml</strong>
                <div class="img_box">
                    <img src="@/assets/images/dummy_img/gift_img_1.png" alt="" />
                </div>
                <p>1000P가 차감되며, 회원정보에 등록된<br/>휴대폰 메시지로 모바일 상품권이<br/>발송됩니다. 지금 받으시겠습니까?</p>
                <div class="agree_pop">
                    <div class="agree_info">
                        <div class="tit">휴대폰</div>
                        <span>{{memberInfo.mobile || '정보 없음'}}</span>
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
    ...mapState(['memberInfo'])
  },
  methods: {
    closeBtn () {
      // 내용내용
    },
    receiveItem () {
      // 내용내용
    }
  }
}
</script>
