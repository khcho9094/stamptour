<template>
    <div class="app_layer stamp_finish">
        <div class="layer_con">
            <!-- 스탬프 이름 -->
            <h2>“반계리 은행나무”</h2>
            <!-- 스탬프이미지 -->
            <div class="img_wrap">
                <img :src="stampInfo.mingle_stamp_image" alt="" />
            </div>
            <p class="get_info">스탬프와 300P를 획득했습니다.<br/>투어의 별점을 선택해주세요.</p>
            <!-- 별점별점 -->
            <ul class="star_rating">
                <li><input id="starRating1" type="radio" name="stars" value="1" @change="starRating(1)"><label for="starRating1"></label></li>
                <li><input id="starRating2" type="radio" name="stars" value="2" @change="starRating(2)"><label for="starRating2"></label></li>
                <li><input id="starRating3" type="radio" name="stars" value="3" @change="starRating(3)"><label for="starRating3"></label></li>
                <li><input id="starRating4" type="radio" name="stars" value="4" @change="starRating(4)"><label for="starRating4"></label></li>
                <li><input id="starRating5" type="radio" name="stars" value="5" @change="starRating(5)"><label for="starRating5"></label></li>
            </ul>
            <em class="tip">* 내 별점은 이후 ‘내가 찍은 스탬프’ 화면에서도<br/>등록/ 수정 가능합니다.</em>
        </div>
        <div class="btn_wrap">
            <button class="type1">방문 소감 등록</button>
            <button class="type2">공유하기</button>
        </div>
        <button type="button" class="close"></button>
    </div>
</template>
<script>
export default {
  name: 'StampFinish',
  data () {
    return {
      stampInfo: {
      }
    }
  },
  methods: {
    closeBtn () {},
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
