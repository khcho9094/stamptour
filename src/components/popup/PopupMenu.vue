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
import { mapState } from 'vuex'
import router from '@/router'
import * as appEvent from '@/assets/js/app_event.js'
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
        '주변 관광정보',
        '스탬프 획득방법',
        '투어 참가자',
        '방문 소감',
        '공유하기'
      ]
    }
  },
  computed: {
    ...mapState(['mingleCode'])
  },
  watch: {
    mingleCode () {
      if (this.mingleCode === 'Nvn2hlG+v6mVAUJsmrbJ8w==') {
        this.btnArr.push('e현충시설 국민제보')
      }
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
      } else if (data === '주변 관광정보') {
        router.push('/tour')
      } else if (data === '공유하기') {
        const openChk = this.$store.state.snsOpen
        this.$store.dispatch('loadSnsPoint')
        this.$store.dispatch('loadSnsPopup', openChk)
      } else if (data === '스탬프 획득방법') {
        if (/Android/i.test(navigator.userAgent)) {
          // eslint-disable-next-line no-undef
          tranggle3.tranggle_callback('tutorial_event', '{}')
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = 'tranggle_callback://tutorial_event'
        } else {
          return false
        }
      } else if (data === 'e현충시설 국민제보') {
        const url = 'http://mfis.mpva.go.kr/report_center.do'
        appEvent.externalLinks(url)
      } else if (data === '방문 소감') {
        router.push('/impression/list')
      }
    }
  },
  mounted () {
    if (this.mingleCode) {
      if (this.mingleCode === 'Nvn2hlG+v6mVAUJsmrbJ8w==') {
        this.btnArr.push('e현충시설 국민제보')
      } else if (this.mingleCode === 'ClJDKcCIq5mBFLdPmkYwPQ==' || this.mingleCode === 'eQrgky8nqusaT5/PVbxMjw==') { // 경기서부 7길
        this.btnArr.splice(3, 0, '방문 소감')
      }
    }
  }
}
</script>
