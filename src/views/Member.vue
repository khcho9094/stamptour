<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='member' :title='titleCount()' />
    <div class="tour_sub_wrap back_gray">
      <ul class="my_info">
        <li>
            <div
              class="user_img"
              :style="{ 'background-image': memberProfile(memberMyList) }">
            </div>
            <p>{{ (memberMyList.member_nickname) ? memberMyList.member_nickname : memberMyList.user_mingle_member_id }}</p>
            <div class="badge_count">
              <p class="stamp">
                <span>스탬프</span>
                <strong>{{memberMyList.mingle_badge_get_count}}개</strong>
              </p>
              <p class="finish">
                <span>완주</span>
                <strong>{{memberMyList.mingle_s_count}}회</strong>
              </p>
            </div>
        </li>
      </ul>
      <ul class="member_list_tab">
        <li :class="listStatus == 'CHALLENGE'? 'active': ''" @click="memberListing('CHALLENGE')">스탬프 획득 순</li>
        <li :class="listStatus == 'SUCCESS'? 'active': ''" @click="memberListing('SUCCESS')">완주 횟수 순</li>
      </ul>
      <ul class="user_list">
        <li v-for="(data, idx) in memberList" v-bind:key="idx">
            <div
              class="user_img"
              :style="{ 'background-image': memberProfile(data) }">
            </div>
            <p>{{ (data.member_nickname)? data.member_nickname : data.user_mingle_member_id || data.mingle_s_member_id }}</p>
            <div class="badge_count">
              <p class="stamp">
                <span>스탬프</span>
                <strong>{{ data.mingle_badge_get_count }}개</strong>
              </p>
              <p class="finish">
                <span>완주</span>
                <strong>{{ data.mingle_s_count }}회</strong>
              </p>
            </div>
        </li>
      </ul>
      <div v-if="memberList && !memberList.length && listStatus == 'SUCCESS'">
        <p class="no_memeber">완주한 참가자가 없습니다.</p>
      </div>
    </div>
    <div class="loading_upload member_list" v-if="loadingMainList">
      <img src="@/assets/images/intro_loading.gif" alt="loader">
      <p>리스트를 불러오고 있습니다.</p>
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
      listStatus: 'CHALLENGE',
      tabActive: '',
      lodding: false
    }
  },
  watch: {
    listStatus () {
      this.$store.state.memberList = []
      this.getApi()
    }
  },
  computed: {
    ...mapState(['memberList', 'memberCount', 'memberMyList', 'loadingMainList'])
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
        this.getApi()
      }
    },
    titleCount () {
      return `참가자 보기 (${this.memberCount}명)`
    },
    memberListing (status) {
      this.listStatus = status
      this.memberPage = 1
    },
    getApi () {
      this.$store.dispatch('loadMemberData', {
        pageCount: this.memberPage,
        status: this.listStatus
      })
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.$store.state.memberList = []
    this.getApi()
  },
  updated () {
    this.lodding = false
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
