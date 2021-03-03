<template>
  <div class="userProfile">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='프로필' />
    <article class="user">
      <div class="profile">
        <div class="img" :style="{'background': `url(${profile.member_profile}) center / cover no-repeat`}">
        <!-- <div class="img"> -->
          <!-- <img :src="profile.member_profile" alt="프로필 이미지"> -->
        </div>
        <input id="profileUpload" type="file" accept="image/*" @change="profileUpload($event, '')">
        <label for="profileUpload">프로필 업로드</label>
      </div>
      <h2>{{ profile.member_nickname ? profile.member_nickname : profile.member_id }}</h2>
      <p>{{profile.member_joindate}}</p>
    </article>
    <ul class="user_stamp cf">
      <li>
        <strong>완주</strong>
        <p>{{profile.success_cnt}}회</p>
      </li>
      <li>
        <strong>미 획득</strong>
        <p>{{profile.badge_get_n}}개</p>
      </li>
      <li>
        <strong>획득</strong>
        <p>{{profile.badge_get_y}}개</p>
      </li>
    </ul>
    <article v-if="false" class="t_point">
      <!-- 포인트 관련은 일단 숨김 -->
      <div class="title cf">
        <h2>T 포인트</h2>
        <span>사용하기</span>
      </div>
      <strong>사용 가능한 포인트</strong>
      <p>25,000P</p>
    </article>
    <ProfileVisitStamp v-if="false" :badgeTrack="profile.badge_track"/>
    <ProfileRecentStamp :badgeStamp="profile.badge_stamp"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import ProfileVisitStamp from '@/components/ProfileVisitStamp.vue'
import ProfileRecentStamp from '@/components/ProfileRecentStamp.vue'
export default {
  name: 'Profile',
  components: {
    Head,
    ProfileVisitStamp,
    ProfileRecentStamp
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    profileUpload (event) {
      this.$store.dispatch('proFileImageUpload', {
        imageFile: event.target.files ? event.target.files[0] : ''
      })
    }
  }
}
</script>
<style>
  body {
    background-color: #f7f8f9;
  }
</style>
