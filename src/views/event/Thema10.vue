<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='테마여행 10선' />
    <div>
      <tabs :options="{ useUrlFragment: false }" @changed="tabChanged">
        <tab name="이벤트 소개">
          <Thema10Intro />
        </tab>
        <tab name="인증 현황">
          <Thema10Certify />
        </tab>
      </tabs>
    </div>
    <Thema10PopupNotice />
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Head from '@/components/Head.vue'
import Thema10Intro from '@/components/event/Thema10Intro.vue'
import Thema10Certify from '@/components/event/Thema10Certify.vue'
import Thema10PopupNotice from '@/components/event/Thema10PopupNotice.vue'
export default {
  name: 'EventThema10',
  components: {
    Head,
    Thema10Intro,
    Thema10Certify,
    Thema10PopupNotice
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    tabChanged (selectedTab) {
      if (selectedTab.tab.name === '인증 현황') {
        console.log('gps 여부')
        appEvent.thema10GpsStatus()
        // localStorage.setItem('getGps', 'N')
        setTimeout(() => {
          this.gpsPop()
        }, 100)
      }
    },
    gpsPop () {
      console.log(localStorage.getGps)
      if (localStorage.getGps === 'N') {
        this.$store.dispatch('openThemaNoti', {
          open: true,
          tit1: '이벤트에 참여 하시려면<br>GPS를 실행해주세요.',
          tit2: 'GPS 실행 불가 시, 관광지 방문<br>인증 사진을 첨부해주세요.',
          gps: true
        })
      }
    }
  },
  mounted () {
  }
}
</script>
<style>
  .tabs-component {
    height: 100%;
  }
  .tabs-component ul.tabs-component-tabs {
    overflow: hidden;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab {
    float: left;
    width:50%;
    height:50px;
    text-align: center;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab .tabs-component-tab-a {
    display: inline-block;
    font-size: 14px;
    color:#d0a287;
    width: 100%;
    padding: 17px 0;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab.is-active {
    border-bottom: 3px solid #c86550;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab.is-active .tabs-component-tab-a {
    color:#c86550;
  }
</style>
