<template>
    <div class="point_view">
        <div class="p_name" v-if="userInfo.member_nickname">
            {{userInfo.member_nickname}}님의 {{name}}
            <img src="@/assets/images/refresh.png" alt="refresh" @click="pointRefresh">
        </div>
        <div class="point">{{myPoint}}<span>{{unit}}</span></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'GiftPoint',
  data () {
    return {
      name: '',
      unit: ''
    }
  },
  computed: {
    ...mapState(['myPoint', 'userInfo', 'stampCodeInfo', 'mingleCode'])
  },
  methods: {
    pointRefresh () {
      alert('포인트 정보를 조회하였습니다.')
    },
    setStamp () {
      this.stampCodeInfo.map((data) => {
        if (data.code === this.mingleCode && data.info === 'point') {
          this.name = '포인트'
          this.unit = 'P'
        } else if (data.code === this.mingleCode && data.info === 'number') {
          this.name = '스탬프 개수'
          this.unit = '개'
        }
      })
    }
  },
  mounted () {
    this.setStamp()
  }
}
</script>
