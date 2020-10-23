<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='KOGAS와 즐기는 대구 스탬프투어' />
    <div>
      <tabs :options="{ useUrlFragment: false }" @changed="tabChanged">
        <tab name="이벤트 소개">
          <KogasIntro />
        </tab>
        <tab name="이벤트 참여" id="second-tab">
          <KogasCertify />
        </tab>
      </tabs>
    </div>
    <KogasPopupNotice />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
import Head from '@/components/Head.vue'
import KogasIntro from '@/components/event/kogas/KogasIntro.vue'
import KogasCertify from '@/components/event/kogas/KogasCertify.vue'
import KogasPopupNotice from '@/components/event/kogas/KogasPopupNotice.vue'
export default {
  name: 'Kogas',
  components: {
    Head,
    KogasIntro,
    KogasCertify,
    KogasPopupNotice
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    tabChanged (selectedTab) {
      if (window.location.hash) {
        window.location.hash = ''
      }
      if (selectedTab.tab.name === '이벤트 참여') {
        appEvent.thema10GpsStatus()
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
    font-weight: bold;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab.is-active {
    border-bottom: 3px solid #c86550;
  }
  .tabs-component ul.tabs-component-tabs .tabs-component-tab.is-active .tabs-component-tab-a {
    color:#c86550;
  }
</style>
