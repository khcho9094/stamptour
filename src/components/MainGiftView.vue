<template>
    <div class="gift_box">
        <div class="gift_price">
            {{sumPrice}}원 상당의 선물이 가득!!
        </div><br/>
        <button class="view" @click="goGift">선물 모두보기</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
export default {
  name: 'MainGiftView',
  computed: {
    ...mapState(['sumPrice'])
  },
  methods: {
    goGift () {
      this.$store.dispatch('setGiftRoute', false)
      router.push('/gift')
    }
  },
  mounted () {
    this.$store.dispatch('setGiftRoute', true)
    this.$store.dispatch('loadGiftDataNew')
  }
}
</script>
