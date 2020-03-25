<template>
  <div class="service_info type4">
      <div class="title">관련 서비스</div>
      <ul class="servie_list">
          <li v-for="(data, idx) in serviceLinkData" v-bind:key="idx" v-on:click="serviceLink(data.mingle_link_url)">
            {{data.mingle_link_title}}
          </li>
      </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'TourService',
  methods: {
    serviceLink (link) {
      if (this.$cookie.get('total_stamp_yn') === 'Y') {
        appEvent.externalLinks(link)
      } else {
        window.open(link)
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadServiceLinkData')
  },
  computed: {
    ...mapState(['serviceLinkData'])
  }
}
</script>
