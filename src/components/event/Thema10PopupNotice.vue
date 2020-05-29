<template>
    <div class="pop_overay" v-if="themaPop.open">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="noti_txt" v-html="themaPop.tit1"></div>
                <div class="thema_noti" v-if="themaPop.tit2 !== ''">
                  <div class="notice">Notice</div>
                  <div class="txt" v-html="themaPop.tit2"></div>
                </div>
            </div>
            <button :class="(themaPop.gps) ? 'type1' : ''" @click="closeBtn">{{themaPop.gps ? '닫기' : '확인'}}</button>
            <button class="type2" v-if="themaPop.gps" @click="settingGps">계정정보 입력</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'Thema10PopupNotice',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['themaPop'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openThemaNoti', {})
    },
    settingGps () {
      console.log('gpssetting')
      appEvent.thema10GpsSetting()
    }
  },
  mounted () {
  }
}
</script>
