<template>
    <div class="pt_available">
        <div class="box">
            <h2>사용 가능 포인트</h2>
            <div>
              <p><strong>25,000</strong>P</p>
              <button type="button" @click="fnLink('/point/history')">이용내역보기</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PointAvailable',
  methods: {
    fnLink (url) {
      this.$router.push(url)
    }
  }
}
</script>
