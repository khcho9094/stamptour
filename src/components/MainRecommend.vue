<template>
    <div class="recom_stamp">
        <div class="title">
            <h1> <img src="@/assets/images/stamp_icon_1.png" alt="icon"> 완주를 위한 추천 스탬프</h1>
            <span>지도보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
        </div>

        <swiper :options="swiperOption" class="swiper">
            <swiper-slide>
                <ul class="next_stamp">
                    <li>
                        <img class="simg" src="@/assets/images/dummy_img/img_1.jpg" alt="img">
                        <h2>해파랑 1길 노을따라 걷기</h2>
                        <p>여기에서 28km</p>
                        <div class="stamp_count">
                            <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                            <span class="stxt">스탬프</span>
                            <span class="snum">26</span>
                        </div>
                        <div class="ns_mark">다음 스탬프</div>
                    </li>
                    <li>
                        <img class="simg" src="@/assets/images/dummy_img/img_2.jpg" alt="img">
                        <h2>해파랑 3길 노을보며 걷기</h2>
                        <p class="txt">여기에서 9km</p>
                        <div class="stamp_count">
                            <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                            <span class="stxt">스탬프</span>
                            <span class="snum">42</span>
                        </div>
                    </li>
                </ul>
            </swiper-slide>
            <swiper-slide>
                <ul class="next_stamp">
                    <li>
                        <img class="simg" src="@/assets/images/dummy_img/img_1.jpg" alt="img">
                        <h2>해파랑 1길 노을따라 걷기</h2>
                        <p>여기에서 28km</p>
                        <div class="stamp_count">
                            <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                            <span class="stxt">스탬프</span>
                            <span class="snum">26</span>
                        </div>
                        <div class="ns_mark">다음 스탬프</div>
                    </li>
                    <li>
                        <img class="simg" src="@/assets/images/dummy_img/img_2.jpg" alt="img">
                        <h2>해파랑 3길 노을보며 걷기</h2>
                        <p class="txt">여기에서 9km</p>
                        <div class="stamp_count">
                            <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                            <span class="stxt">스탬프</span>
                            <span class="snum">42</span>
                        </div>
                    </li>
                </ul>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'MainRecommend',
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 25
      }
    }
  }
}
</script>
<style scoped>
    .swiper {
        width: 100%;
    }
</style>
