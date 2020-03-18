<template>
    <ul class="gift_list">
        <li v-for="(data, idx) in giftData" v-bind:key="idx">
            <div class="point">{{data.mingle_count}}P</div>
            <img class="gift_img" :src="'https://m.tranggle.com/html/images/mingle/'+data.mingle_gift_image" alt="gift">
            <span>{{data.mingle_gift_title}}</span>
            <div class="gift_icon" :class="dotOn(data)" @click="giftReceive(data)">
                <!-- <img src="@/assets/images/icon_gift.png" alt="gift"> -->
                <img :src="giftOn(data)" alt="gift">
                <div class="dot"></div>
            </div>
            <div class="line"></div>
        </li>
    </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'GiftList',
  computed: {
    ...mapState(['giftData'])
  },
  methods: {
    // 점 표시
    dotOn (data) {
      let dot = ''
      if (data.mingle_gift_receive === 'Y') {
        dot = 'on'
      }
      return dot
    },
    // 선물 아이콘 on/off
    giftOn (data) {
      let img = ''
      if (data.mingle_gift_receive === 'Y') {
        img = 'icon_gift'
      } else {
        img = 'icon_gift_off'
      }
      return require(`@/assets/images/${img}.png`)
    },
    giftReceive (data) {
      if (data.mingle_gift_receive === 'Y') {
        this.$store.dispatch('openPopupGift', data)
      }
    }
  },
  mounted () {
  }
}
</script>
