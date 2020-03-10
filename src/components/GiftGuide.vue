<template>
    <div class="service_info type1">
        <div class="title">이용안내</div>
        <div class="info">
            <h3>1. 선물 관련</h3>
            <p v-html="introData.mobile_desc"></p><br/>
            <h3>2. 인증 관련</h3>
            <p v-html="introData.notice_desc"></p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'GiftGuide',
  computed: {
    ...mapState(['introData'])
  }
}
</script>
