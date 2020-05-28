<template>
    <div class="pop_overay" v-show="restartOpen">
        <div class="pop_cont">
            <div class="text_2" v-if="getGiftChk === false">
                <!-- <div class="gift_receive" v-if="popupGift.mingle_gift_add_point === 'AUTH' && mingleCode ==='/GN62eV1c4Q78ghWNMWRsQ=='"> -->
                <!-- <div class="gift_receive" v-if="popupGift.mingle_gift_add_point === 'AUTH' && popupGift.mingle_no === '1'">
                  <b>잼버리 코스</b> 완성!!<br/>
                  <span>축하합니다!!</span>
                </div> -->
                <!-- <div class="gift_receive" v-else-if="popupGift.mingle_gift_add_point === 'AUTH' && mingleCode ==='M0ZRcktVl8H3kJaRKq3Irg=='"> -->
                  <!-- <div class="gift_receive" v-else-if="popupGift.mingle_gift_add_point === 'AUTH' && popupGift.mingle_no === '14'">
                  <b>봉사점수 신청하기</b><br/>
                </div> -->
                획득한 스탬프가<br/>
                모두 초기화 됩니다.
            </div>
            <div class="text_2" v-else>
                수령할 선물이 <br/>
                {{this.getGiftCnt}}개 남았습니다.
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <!-- <button class="type2" @click="receiveGift">모바일 상품권 받기</button> -->
            <!-- <button class="type2" @click="receiveGift">{{receiveBtn(popupGift)}}</button> -->
            <button class="type2" @click="restartURL()">{{returnValue()}}</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
// import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'PopupRestart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['restartOpen', 'mingleCode', 'memberInfo', 'getGiftChk', 'getGiftCnt'])
  },
  methods: {
    returnValue () {
      if (this.getGiftChk === false) {
        return '초기화'
      } else {
        return '선물 보기'
      }
    },
    closeBtn () {
      this.$store.state.restartOpen = !this.$store.state.restartOpen
    },
    restartURL () {
      if (this.getGiftChk === false) {
        this.$store.dispatch('loadRestartTour')
      } else {
        this.$store.state.restartOpen = !this.$store.state.restartOpen
        router.push('/gift')
      }
    }

  },
  mounted () {
  },
  destroyed () {
  }
}
</script>
