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
                <li><input id="starRating1" type="radio" name="stars" value="1" @change="starRating(1)"><label for="starRating1"></label></li>
                <li><input id="starRating2" type="radio" name="stars" value="2" @change="starRating(2)"><label for="starRating2"></label></li>
                <li><input id="starRating3" type="radio" name="stars" value="3" @change="starRating(3)"><label for="starRating3"></label></li>
                <li><input id="starRating4" type="radio" name="stars" value="4" @change="starRating(4)"><label for="starRating4"></label></li>
                <li><input id="starRating5" type="radio" name="stars" value="5" @change="starRating(5)"><label for="starRating5"></label></li>
            </ul>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2">공유하기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['stampInfo'],
  computed: {
    ...mapState(['openProfileStamp'])
  },
  name: 'PopupProfileStamp',
  methods: {
    closeBtn () {
      this.$store.state.openProfileStamp = false
    },
    starRating (val) {
      document.querySelectorAll('[id^="starRating"]').forEach(v => {
        v.classList.remove('on')
      })
      for (var i = 1; i <= val; i++) {
        document.getElementById('starRating' + i).classList.add('on')
      }
    }
  }
}
</script>
