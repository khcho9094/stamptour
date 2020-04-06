<template>
    <div v-if="sumPrice > 0" class="gift_box" @click="goGift">
        <div class="gift_price">
            {{sumPrice}}원 상당의 선물이 가득!!
        </div><br/>
        <button class="view">선물 모두보기</button>
    </div>
    <div v-else class="gift_box" @click="goGift">
        <div class="gift_price">
            {{giftAuth()}}
        </div><br/>
        <button class="view">신청 바로가기</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
export default {
  name: 'MainGiftView',
  computed: {
    ...mapState(['sumPrice', 'mingleCode', 'stampCodeInfo'])
  },
  methods: {
    goGift () {
      router.push('/gift')
    },
    giftAuth () {
      let cMsg = ''
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode) {
          cMsg = data.msg
        }
      })
      return cMsg
    }
  },
  mounted () {
    this.$store.dispatch('loadGiftDataNew')
  }
}
</script>
