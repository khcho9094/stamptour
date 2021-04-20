<template>
    <div class="total_point">
        <Head type='back' name='view_stamp' title='포인트' />
        <PointAvailable/>
        <PointMall/>
        <PointUseGuide/>
        <!-- 포인트몰 개인정보 수집동의 -->
        <PopupPointAgree v-if="false"/>
        <!-- 구매팝업 -->
        <PopupPointBuy v-if="false"/>
        <!-- 포인트 부족팝업 -->
        <PopupPointLack v-if="false"/>
        <!-- 소멸예정 포인트 팝업 -->
        <PopupPointExtinguish v-if="false"/>
    </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PointAvailable from '@/components/point/PointAvailable.vue'
import PointMall from '@/components/point/PointMall.vue'
import PointUseGuide from '@/components/point/PointUseGuide.vue'
import PopupPointAgree from '@/components/popup/PopupPointAgree.vue'
import PopupPointBuy from '@/components/popup/PopupPointBuy.vue'
import PopupPointLack from '@/components/popup/PopupPointLack.vue'
import PopupPointExtinguish from '@/components/popup/PopupPointExtinguish.vue'
export default {
  name: 'Point',
  components: {
    Head,
    PointAvailable,
    PointMall,
    PointUseGuide,
    PopupPointAgree,
    PopupPointBuy,
    PopupPointLack,
    PopupPointExtinguish
  }
}
</script>
