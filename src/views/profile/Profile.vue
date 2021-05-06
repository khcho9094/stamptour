<template>
  <div class="userProfile">
    <!-- 헤더 -->
    <Head type='back' name='view_stamp' title='프로필' />
    <article class="user">
      <div class="profile">
        <div class="img" :style="{'background': `url(${profile.member_profile ? profile.member_profile : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAIAAADKL7ZfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMi0yMVQxNToxODozOCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDItMjFUMTU6MjA6MjArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDItMjFUMTU6MjA6MjArMDk6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWM1MTI3MzItYTFmOS1lMDRlLWFhMzMtZDQ4NGZhODY1MzExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZGQjRBMEI3NTQ3MTExRUE5RURGOTUzOEZCODNEMDc5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6RkZCNEEwQjc1NDcxMTFFQTlFREY5NTM4RkI4M0QwNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRkI0QTBCNDU0NzExMUVBOUVERjk1MzhGQjgzRDA3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRkI0QTBCNTU0NzExMUVBOUVERjk1MzhGQjgzRDA3OSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YzUxMjczMi1hMWY5LWUwNGUtYWEzMy1kNDg0ZmE4NjUzMTEiIHN0RXZ0OndoZW49IjIwMjAtMDItMjFUMTU6MjA6MjArMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Y6TzyAAADNklEQVR4nO2cbZOaMBDHdxNUxKKeXmun0xf9/h+p7zrTmes9qSgi8pS+0EZOT4+GJEjgP+MMOLLkxy7JbgLiz18PoF0IAAiM6T8zWBWcE4AdPhWISLeIN2mKSz6wRM+pCAL5wDeuFth01RgYhfq0GgOLDeM1BhZTC2y6WmDT1QKbrhbYFF1Kw4wFvpSGGQt8SS2w6ZI2ifd9Nun3ugCw3UW/H+dSDhS2eUXSPLxvWX6j/IHCNq+ocSHdApuuA7DY/FAddQCuZJmnEjU1pJujFth0SQPe7qKTjdu0KS2XlpXrqrbZhrTpaoFNF8HmpNEAAEBYc9JoAEKQkCZ5mGWMZE3yMKu809Lfg1QMbNFjA/TEWsXAjt3j20mSajhjlcCUkslwwHeDUFqFcEUVPE2LCBaljt2bjAYWpfx7zw80nF0fMF9GeFeeH0RxoqEZ+kL6Cm0QRs+LtZ5mVPOAeF6eHzwv1toSPn3A213EnZwxliRpEEbaIplLH7CK6YviQsR9EDWlPOS3TFOAuY7ADSmajvewlF4SERD5RWRZJmKVkKMbBE1c1ptOC0u/PIWIP77d038t/vOyXAfhf1kYfXK+TIb77ThJfz28yF3pe3MPl7ecZexpvuK7s+nYHfSLH56nBYCnuSd9fJbfaflBuFwfsmJE+Dodfb4b5qP0XVFCZtNRnnbu+SrKCSXj8PNiRSlxHXu/O3Yd17GXfrDabM9rwI5Fh4P+2HXyF8Xzg1fPV9E2VPey5f3YvctVf3tFcRLFSZplAEAJ6XU7HYue/Gbu+Ypo4ZKHUUan/bJcB2E0m47y0xrdjtXtXAyrOEkfXz0pS2c8tTr9XvXrtARx5Dpj18mXvueKk3S5Djw/UF1FKM+lM8YWq81itenbXcfu2d2ORQklhAFkWZakabiLN+Eu3MWqW7KXxmopjLZaJnGu64PRwrx88wPgek3SF3GPOdVSwZGlKPDtx3bBYCwKXK/YviJzQrqgRIBvJLzFFuJEgG8kvMVyslIhXYmrSy6wlgKuxNUlc21pnZZSb0tcNpcGrMLbHFNiBaVwWBL2Cvdnzf6a5ry5iKdX4d1YVVoRa109PCfR/wjRX1oDJHJk3Hg8AAAAAElFTkSuQmCC'}) center / cover no-repeat`}">
        <!-- <div class="img"> -->
          <!-- <img :src="profile.member_profile" alt="프로필 이미지"> -->
        </div>
        <!-- 프로필 업로드 버튼 -->
        <button v-if="token" class="btn_upload" type="button" @click="profileUploadPopup">프로필 업로드</button>
        <!-- 프로필 사진 업로드 팝업 -->
        <!-- <div class="profile_upload_layer"> -->
        <div class="pop_overay profile_upload_layer" v-if="openProfilePopup">
          <div class="pop_cont" style="background-color: #fff">
            <ul>
              <li>
                <input id="profileCamera" type="file" accept="image/*" capture="camera" @change="profileUpload($event, '')">
                <label for="profileCamera">사진 촬영</label>
              </li>
              <li>
                <input id="profileAlbum" type="file" accept="image/*" @change="profileUpload($event, '')">
                <label for="profileAlbum">앨범에서 사진 선택</label>
              </li>
            </ul>
            <button type="button" @click="closeUploadLayer">닫기</button>
          </div>
        </div>
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
    <article class="t_point">
      <!-- 포인트 관련은 일단 숨김 -->
      <div class="title cf">
        <h2>T 포인트</h2>
        <span @click="fnLink('/point')">사용하기</span>
      </div>
      <strong>사용 가능한 포인트</strong>
      <p><strong>{{comma(profile.total_point)}}</strong>P</p>
    </article>
    <ProfileLookUpStamp :badgeSearch="badgeSearch"/>
    <ProfileRecentStamp :badgeStamp="badgeStamp"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import ProfileLookUpStamp from '@/components/ProfileLookUpStamp.vue'
import ProfileRecentStamp from '@/components/ProfileRecentStamp.vue'
export default {
  name: 'Profile',
  components: {
    Head,
    ProfileLookUpStamp,
    ProfileRecentStamp
  },
  data () {
    return {
      openProfilePopup: false
    }
  },
  watch: {
    app_profile () {
      if (this.app_profile) {
        if (/Android/i.test(navigator.userAgent)) {
          // eslint-disable-next-line no-undef
          tranggle3.tranggle_callback('profile_change', `{ url:'${this.app_profile}' }`)
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location = `tranggle_callback://profile_change?url=${this.app_profile}`
        } else {
          return false
        }
      }
    }
  },
  mounted () {
    document.getElementById('app').classList.add('full_height')
    this.$store.dispatch('GetProfile')
  },
  computed: {
    ...mapState(['profile', 'badgeStamp', 'badgeSearch', 'token', 'app_profile'])
  },
  methods: {
    profileUpload (event) {
      this.$store.dispatch('proFileImageUpload', {
        imageFile: event.target.files ? event.target.files[0] : ''
      })
      this.openProfilePopup = false
    },
    profileUploadPopup () {
      this.openProfilePopup = true
    },
    closeUploadLayer () {
      this.openProfilePopup = false
    },
    fnLink (url) {
      this.$router.push(url)
    },
    comma (val) {
      return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
    }
  }
}
</script>
