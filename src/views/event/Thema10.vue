<template>
  <div class="view_stamp">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='테마여행 10선' />
    <div>
      <tabs :options="{ useUrlFragment: false }">
        <tab name="이벤트 소개">
          <Thema10Intro />
        </tab>
        <tab name="인증 현황">
          <Thema10Certify />
        </tab>
      </tabs>
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import Thema10Intro from '@/components/event/Thema10Intro.vue'
import Thema10Certify from '@/components/event/Thema10Certify.vue'
export default {
  name: 'EventThema10',
  components: {
    Head,
    Thema10Intro,
    Thema10Certify
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style>
  .tabs-component {
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
