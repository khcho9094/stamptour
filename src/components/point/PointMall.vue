<template>
    <div class="pt_mall">
        <div class="box">
            <h2>포인트 몰</h2>
            <!-- 스와이퍼 박스 -->
            <div>
                <swiper :options="swiperOption" class="mall_swiper swiper">
                    <swiper-slide class="slide">
                        <ul>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_1.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_2.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_3.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_1.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_2.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                        </ul>
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <ul>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_1.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_2.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_3.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_1.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                            <li class="item">
                                <div class="gift_img_wrap">
                                    <img src="@/assets/images/dummy_img/gift_img_2.png" alt="" />
                                </div>
                                <strong>GS25 1000원</strong>
                                <em>1000P</em>
                            </li>
                        </ul>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PointMall',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  },
  computed: {
    ...mapState(['popupNoti'])
  },
  mounted () {
    // 모든화면에서 정사각형으로 보이기
    document.querySelectorAll('.gift_img_wrap').forEach(v => {
      v.style.height = `${v.clientWidth}px`
    })
  },
  methods: {
    openMallGift () {
    }
  }
}
</script>
