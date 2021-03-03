<template>
  <div class="profile_detail">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='최근 찍은 스탬프' />
    <div class="course_box laststamp_wrap">
      <p>* 최근 1달간의 방문 스탬프가 표시됩니다.</p>
      <ul>
        <li v-for="(data, idx) in profile.badge_stamp" v-bind:key="idx">
          <div class="mystamp">
            <img :src="data.mingle_stamp_image" alt="mystamp">
          </div>
          <span>{{data.info_badge_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'LastStamp',
  components: {
    Head
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['profile'])
  }
}
</script>
<style>
  body {
    background-color: #f7f8f9;
  }
</style>
