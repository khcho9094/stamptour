<template>
    <div v-if="openProfileStamp" class="pop_overay pop_star_rating">
        <div class="pop_cont" style="background-color: #fff">
            <!-- 스탬프이미지 -->
            <div class="img_wrap">
                <img :src="stampInfo.mingle_stamp_image" alt="" />
            </div>
            <!-- 스탬프 이름 -->
            <h2>{{ stampInfo.info_badge_name }}</h2>
            <p>{{ stampInfo.user_mingle_badge_stamp_date || stampInfo.user_mingle_badge_badge_date}}</p>
            <!-- 별점별점 -->
            <ul class="star_rating">
                <li v-for="(item, idx) in 5" :key="idx"><input :id="`starRating${item}`" type="radio" name="stars" :value="item" @change="starRating(item, 'change')" ><label :for="`starRating${item}`"></label></li>
            </ul>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="shareBtn">공유하기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  props: ['stampInfo'],
  computed: {
    ...mapState(['openProfileStamp', 'app_star_point'])
  },
  watch: {
    openProfileStamp (open) {
      if (open) {
        // dom이 모두 생성된 후 실행
        this.$nextTick(() => {
          this.starRating(parseInt(this.stampInfo.star_point))
        })
      }
    },
    app_star_point () {
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('star_point', `{ star:${this.app_star_point}, badge_id:${this.stampInfo.mingle_badge_id || this.stampInfo.user_mingle_badge_id} }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://star_point?star=${this.app_star_point}&badge_id=${this.stampInfo.mingle_badge_id || this.stampInfo.user_mingle_badge_id}`
      } else {
        return false
      }
    }
  },
  name: 'PopupProfileStamp',
  methods: {
    closeBtn () {
      this.$store.state.openProfileStamp = false
    },
    starRating (val, change) {
      if (change) {
        this.stampInfo.change_star = val
        this.$store.dispatch('setStarPoint', this.stampInfo)
      }
      document.querySelectorAll('[id^="starRating"]').forEach(v => {
        v.classList.remove('on')
      })
      for (var i = 1; i <= val; i++) {
        document.getElementById('starRating' + i).classList.add('on')
      }
    },
    // 공유하기
    shareBtn () {
      this.$store.state.openProfileStamp = false
      const badgeId = this.stampInfo.mingle_badge_id
      const badgeDate = this.stampInfo.user_mingle_badge_stamp_date
      if (/Android/i.test(navigator.userAgent)) {
        // eslint-disable-next-line no-undef
        tranggle3.tranggle_callback('stamp_share', `{ badge_id:${badgeId} ,badge_date:'${badgeDate}' }`)
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location = `tranggle_callback://stamp_share?badge_id=${badgeId}&badge_date='${badgeDate}'`
      } else {
        return false
      }
    }
  }
}
</script>
