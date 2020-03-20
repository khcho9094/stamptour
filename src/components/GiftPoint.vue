<template>
    <div class="point_view">
        <div class="p_name" v-if="userInfo.member_nickname">
            {{userInfo.member_nickname}}님의 포인트
            <img src="@/assets/images/refresh.png" alt="refresh" @click="pointRefresh">
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
  },
  methods: {
    pointRefresh () {
      alert('포인트 정보를 조회하였습니다.')
    }
  }
}
</script>
