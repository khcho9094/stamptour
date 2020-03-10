<template>
    <div class="point_view">
        <div class="p_name">
            {{userInfo.member_nickname}}님의 포인트
            <img src="@/assets/images/refresh.png" alt="refresh">
        </div>
        <div class="point">{{myPoint}}<span>P</span></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'GiftPoint',
  computed: {
    ...mapState(['myPoint']),
    ...mapState(['userInfo'])
  }
}
</script>
