<template>
  <div class="gift">
    <!-- 헤더 -->
    <Head type='back' name='gift' />
    <!-- <header>
        <div class="head_back">
            <img src="@/assets/images/back.png" alt="back">
            <span>스탬프 교환 상품</span>
        </div>
    </header> -->
    <div class="tour_sub_wrap">
        <div class="point_view">
            <div class="p_name">
                주빈님의 포인트
                <img src="@/assets/images/refresh.png" alt="refresh">
            </div>
            <div class="point">64<span>P</span></div>
        </div>
        <ul class="gift_list">
            <li>
                <div class="point">12P</div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_1.png" alt="gift">
                <span>2천원 상당 gs25 편의점 쿠폰</span>
                <div class="gift_icon on">
                    <img src="@/assets/images/icon_gift.png" alt="gift">
                    <div class="dot"></div>
                </div>
                <div class="line"></div>
            </li>
            <li>
                <div class="point">40P</div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_1.png" alt="gift">
                <span>3천원 상당 gs25 편의점 쿠폰</span>
                <div class="gift_icon on">
                    <img src="@/assets/images/icon_gift.png" alt="gift">
                    <div class="dot"></div>
                </div>
                <div class="line"></div>
            </li>
            <li>
                <div class="point">80P</div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_2.png" alt="gift">
                <span>6천원 상당 베스킨라빈스 쿠폰</span>
                <div class="gift_icon">
                    <img src="@/assets/images/icon_gift.png" alt="gift">
                    <div class="dot"></div>
                </div>
                <div class="line"></div>
            </li>
            <li>
                <div class="point">100P</div>
                <img class="gift_img" src="@/assets/images/dummy_img/gift_img_3.png" alt="gift">
                <span>9천원 상당 뚜레쥬르 쿠폰</span>
                <div class="gift_icon">
                    <img src="@/assets/images/icon_gift.png" alt="gift">
                    <div class="dot"></div>
                </div>
                <div class="line"></div>
            </li>
        </ul>
        <div class="service_info type1">
            <div class="title">이용안내</div>
            <div class="info">
                <h3>1. 선물 관련</h3>
                <p>목표 포인트에 도달하면 버튼을 눌러 상품권을 신청하세요.</p>
                <p>‘내 포인트’를 눌러 수령 사능한 기념의 상품을 확인하고 상품권을 신청하세요.</p>
                <p>2000원 상당 모바일 기프티콘은 SNS 공유 2포인트를 포함하여 12포인트를 획득해야 수령 가능합니다.</p>
            </div>
        </div>

    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
export default {
  name: 'gift',
  components: {
    Head
  }
}
</script>
