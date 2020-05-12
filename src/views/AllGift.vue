<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title='전체 선물보기' />
    <div class="all_gift">
      <ul class="tour_list">
        <li>
          <div class="tit" @click="giftList">원주 구석구석 어디까지 가봤니?</div>
          <ul class="all_list" v-show="isShow">
            <li>
                <div class="point"><span class="stxt">10p</span></div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_1.png" alt="gift">
                <span>2천원 상당의 쿠폰</span>
                <div class="line"></div>
            </li>
            <li>
                <div class="point"><span class="stxt">10p</span></div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_1.png" alt="gift">
                <span>2천원 상당의 쿠폰</span>
                <div class="line"></div>
            </li>
          </ul>
        </li>
        <li>
          <div  class="tit">원주 구석구석 어디까지 가봤니?</div>
        </li>
        <li>
          <div  class="tit">원주 구석구석 어디까지 가봤니?</div>
        </li>
      </ul>
    </div>
    <PopupSns />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
export default {
  name: 'AllGift',
  components: {
    Head,
    PopupSns
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
  },
  methods: {
    giftList () {
      this.isShow = !this.isShow
    }
  }
}
</script>
