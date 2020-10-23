<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='member' :title='titleCount()' />
    <div class="tour_sub_wrap back_gray">
      <ul class="user_list">
        <li class="first">
            <div
              class="user_img"
              :style="{ 'background-image': memberProfile(memberMyList) }">
            </div>
            <p>{{(memberMyList.member_nickname)?memberMyList.member_nickname:memberMyList.user_mingle_member_id}}</p>
            <span>{{memberMyList.user_mingle_gift_point}}</span>
        </li>
        <li v-for="(data, idx) in memberList" v-bind:key="idx">
            <div
              class="user_img"
              :style="{ 'background-image': memberProfile(data) }">
            </div>
            <p>{{(data.member_nickname)?data.member_nickname:data.user_mingle_member_id}}</p>
            <span>{{data.user_mingle_gift_point}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'Member',
  components: {
    Head
  },
  data () {
    return {
      memberPage: 1,
      lodding: false
    }
  },
  computed: {
    ...mapState(['memberList', 'memberCount', 'memberMyList'])
  },
  methods: {
    memberProfile (data) {
      let url = ''
      if (data.profile && (data.profile.indexOf('jpg') > -1 || data.profile.indexOf('png') > -1)) {
        url = `https://resource.tranggle.com/profile/${data.profile}`
      } else {
        url = require('@/assets/images/default.png')
      }
      return `url(${url})`
    },
    handleScroll (ev) {
      if (window.scrollY + 50 >= document.documentElement.scrollHeight - window.innerHeight && !this.lodding) {
        this.memberPage += 1
        this.lodding = true
        this.$store.dispatch('loadMemberData', this.memberPage)
      }
    },
    titleCount () {
      return `참가자 보기 (${this.memberCount}명)`
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.$store.state.memberList = []
    this.$store.dispatch('loadMemberData', this.memberPage)
  },
  updated () {
    this.lodding = false
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
