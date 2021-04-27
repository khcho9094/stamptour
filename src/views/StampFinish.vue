<template>
    <div class="app_layer stamp_finish">
        <div class="layer_con">
            <!-- 스탬프 이름 -->
            <h2>“{{stampCommon.title}}”</h2>
            <!-- 스탬프이미지 -->
            <div class="img_wrap">
                <img :src="stampCommon.mingle_stamp_image" :alt="stampCommon.title" />
            </div>
            <p class="get_info">스탬프와 {{stampCommon.mingle_badge_point}}P를 획득했습니다.<br/>투어의 별점을 선택해주세요.</p>
            <!-- 별점별점 -->
            <ul class="star_rating">
                <li v-for="(item, idx) in 5" :key="idx"><input :id="`starRating${item}`" type="radio" name="stars" :value="item" @change="starRating(item, 'change')" ><label :for="`starRating${item}`"></label></li>
            </ul>
            <em class="tip">* 내 별점은 이후 ‘내가 찍은 스탬프’ 화면에서도<br/>등록/ 수정 가능합니다.</em>
        </div>
        <div class="btn_wrap">
            <button class="type1">방문 소감 등록</button>
            <button class="type2">공유하기</button>
        </div>
        <button type="button" class="close" @click="closeBtn"></button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'StampFinish',
  data () {
    return {
      stampInfo: {
      }
    }
  },
  computed: {
    ...mapState(['stampCommon', 'stampIntro', 'stampImage', 'stampMethod', 'stampPoi'])
  },
  methods: {
    closeBtn () {
      // close 앱이벤트
    },
    starRating (val, change) {
      if (change) {
        this.stampInfo.badge_id = this.$route.query.badge_id
        this.stampInfo.change_star = val
        this.$store.dispatch('setStarPoint', this.stampInfo)
      }
      document.querySelectorAll('[id^="starRating"]').forEach(v => {
        v.classList.remove('on')
      })
      for (var i = 1; i <= val; i++) {
        document.getElementById('starRating' + i).classList.add('on')
      }
    }
  },
  mounted () {
    this.$store.dispatch('loadStampData', {
      mingle_badge_id: this.$route.query.badge_id,
      mingle_badge_content_type: this.$route.query.contentTypeId,
      mingle_badge_content_id: this.$route.query.contentId,
      mingle_poi_no: this.$route.query.mingle_poi_no
    })
  }
}
</script>
