<template>
    <div class="pt_available">
        <div class="box">
            <div class="top">
                <h2><span>{{userInfo.member_nickname || userInfo.user_mingle_member_id}}님</span>의 사용 가능 포인트</h2>
                <p><strong>{{totalGiftPoint}}</strong>P</p>
            </div>
            <div class="bottom">
                <h2>
                    소멸 예정 포인트<br/>
                    (1개월 이내)
                </h2>
                <div>
                  <p>{{expectPoint.ded_cnt}}P</p>
                  <button type="button" @click="fnLink('/point/history')">이용내역보기</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PointAvailable',
  props: {
    totalPoint: String
  },
  computed: {
    ...mapState(['userInfo', 'expectPoint', 'totalGiftPoint'])
  },
  methods: {
    fnLink (url) {
      this.$router.push(url)
    }
  }
}
</script>
