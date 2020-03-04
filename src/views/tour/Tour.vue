<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' />
    <!-- <header>
        <div class="head_back">
            <img src="@/assets/images/back.png" alt="back">
            <span>스탬프 투어로 즐기는 부안관광</span>
        </div>
        <button class="r_type1 share">공유하기</button>
    </header> -->
    <div class="tour_sub_wrap">
        <div class="swiper">
            <img src="@/assets/images/dummy_img/img_1.jpg" alt="임시이미지">
        </div>
        <div class="desc_box">
            <p>
                부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
                부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
                부안군은 군산시와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
                와는 바다로 접경하고, 북동으로 김제시, 남동으로는 정읍시, 남으로는 고창군과 접해있다
            </p>
            <span>지역 설명 전체 보기+</span>
        </div>
        <div class="sur_place">
            <div class="title">
                <h1> <img src="@/assets/images/icon_t_1.png" alt="icon"> 주변 축제 공연행사</h1>
                <span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            </div>
            <ul class="list">
                <li>
                    <img src="@/assets/images/dummy_img/img_4.jpg" alt="">
                    <h2>부안 축제의 날 투모로우 축제의</h2>
                    <p>여기에서 28km</p>
                </li>
                <li>
                    <img src="@/assets/images/dummy_img/img_5.jpg" alt="">
                    <h2>부안 큐브 미술관</h2>
                    <p>여기에서 12.6km</p>
                </li>
            </ul>
        </div>
        <div class="sur_place">
            <div class="title">
                <h1> <img src="@/assets/images/icon_t_2.png" alt="icon"> 주변 음식점</h1>
                <span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            </div>
            <ul class="list">
                <li>
                    <img src="@/assets/images/dummy_img/img_4.jpg" alt="">
                    <h2>부안 축제의 날 투모로우 축제의</h2>
                    <p>여기에서 28km</p>
                </li>
                <li>
                    <img src="@/assets/images/dummy_img/img_5.jpg" alt="">
                    <h2>부안 큐브 미술관</h2>
                    <p>여기에서 12.6km</p>
                </li>
            </ul>
        </div>
        <div class="sur_place">
            <div class="title">
                <h1> <img src="@/assets/images/icon_t_3.png" alt="icon"> 주변 숙박업소</h1>
                <span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            </div>
            <ul class="list">
                <li>
                    <img src="@/assets/images/dummy_img/img_4.jpg" alt="">
                    <h2>부안 축제의 날 투모로우 축제의</h2>
                    <p>여기에서 28km</p>
                </li>
                <li>
                    <img src="@/assets/images/dummy_img/img_5.jpg" alt="">
                    <h2>부안 큐브 미술관</h2>
                    <p>여기에서 12.6km</p>
                </li>
            </ul>
        </div>
        <div class="sur_place">
            <div class="title">
                <h1> <img src="@/assets/images/icon_t_4.png" alt="icon"> 주변 체험관광</h1>
                <span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            </div>
            <ul class="list">
                <li>
                    <img src="@/assets/images/dummy_img/img_4.jpg" alt="">
                    <h2>부안 축제의 날 투모로우 축제의</h2>
                    <p>여기에서 28km</p>
                </li>
                <li>
                    <img src="@/assets/images/dummy_img/img_5.jpg" alt="">
                    <h2>부안 큐브 미술관</h2>
                    <p>여기에서 12.6km</p>
                </li>
            </ul>
        </div>
        <div class="sur_place">
            <div class="title">
                <h1> <img src="@/assets/images/icon_t_5.png" alt="icon"> 주변 쇼핑</h1>
                <span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
            </div>
            <ul class="list">
                <li>
                    <img src="@/assets/images/dummy_img/img_4.jpg" alt="">
                    <h2>부안 축제의 날 투모로우 축제의</h2>
                    <p>여기에서 28km</p>
                </li>
                <li>
                    <img src="@/assets/images/dummy_img/img_5.jpg" alt="">
                    <h2>부안 큐브 미술관</h2>
                    <p>여기에서 12.6km</p>
                </li>
            </ul>
        </div>
        <div class="service_info type4">
            <div class="title">관련 서비스</div>
            <ul class="servie_list">
                <li>잼버리 및 부안관광 스탬프 투어 브로슈어</li>
                <li>제4회 개암동 벛꽃축제</li>
                <li>제7회 부안 마실축제</li>
                <li>부안 맛지도</li>
                <li>부안군 관광지도 1</li>
                <li>부안군 관광지도 2</li>
                <li>전북 투어패스</li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
export default {
  name: 'tour',
  components: {
    Head
  }
}
</script>
