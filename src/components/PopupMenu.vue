<template>
    <div class="pop_overay_2" v-show="visible" @click="moreClick">
        <div class="pop_cont">
            <ul>
                <li v-for="(data, idx) in btnArr" v-bind:key="idx" @click="menuBtn(idx, $event)">
                    {{data}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
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
    menuBtn (idx, e) {
      e.stopPropagation()
    }
  }
}
</script>
