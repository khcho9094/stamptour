<template>
    <div class="pt_mall">
        <div class="box">
            <h2>포인트 몰</h2>
            <!-- 스와이퍼 박스 -->
            <div>
                <swiper :options="swiperOption" class="mall_swiper swiper">
                    <swiper-slide class="slide" v-for="(data, idx) in totalGiftList" v-bind:key="idx">
                        <ul>
                            <li class="item" v-for="(val, cidx) in data" v-bind:key="cidx">
                                <div class="gift_img_wrap">
                                    <img :src="`https://stamp.tranggle.com/${val.mingle_tot_gift_image}`" alt="" />
                                </div>
                                <strong>{{val.mingle_tot_gift_title}}</strong>
                                <em>{{val.mingle_tot_gift_price}}P</em>
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
    ...mapState(['popupNoti', 'totalGiftList'])
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
