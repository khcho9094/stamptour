<template>
    <div class="pop_overay" v-show="visible">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text">
                해당 투어정보는<br/>
                스탬프 투어의 관광정보<br/>
                페이지에서 다시<br/>
                보실 수 있습니다.
            </div>
            <button @click="closeBtn"><span>{{count}}</span>초후 자동 닫기</button>
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
    },
    count: Number
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('setIntroPopup', false)
      localStorage.removeItem('setIntroPopup')
    }
  },
  mounted () {
  }
}
</script>
