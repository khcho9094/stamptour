<template>
    <div class="pop_overay_2" v-show="visible" @click="moreClick">
        <div class="pop_cont">
            <ul>
                <li v-for="(data, idx) in btnArr" v-bind:key="idx" @click="menuBtn(data, idx, $event)">
                    {{data}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import router from '@/router'
export default {
  name: 'PopupMenu',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data () {
    return {
      btnArr: [
        '주번 관광정보',
        '스탬프 획득방법',
        '투어 참가자',
        '공유하기'
      ]
    }
  },
  methods: {
    moreClick (e) {
    //   e.stopPropagation()
      this.$emit('moreBtn')
    },
    menuBtn (data, idx, e) {
      e.stopPropagation()
      if (data === '투어 참가자') {
        router.push('/member')
      } else if (data === '주번 관광정보') {
        router.push('/tour')
      } else if (data === '공유하기') {
        // this.$emit('moreSnsBtn')
        const openChk = this.$store.state.snsOpen
        this.$store.dispatch('loadSnsPopup', openChk)
      }
    }
  }
}
</script>
