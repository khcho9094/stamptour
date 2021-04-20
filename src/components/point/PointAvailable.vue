<template>
    <div class="pt_available">
        <div class="box">
            <div class="top">
                <h2><span>{{111}}님</span>의 사용 가능 포인트</h2>
                <p><strong>25,000</strong>P</p>
            </div>
            <div class="bottom">
                <h2>
                    소멸 예정 포인트<br/>
                    (1개월 이내)
                </h2>
                <div>
                  <p>{{1000}}P</p>
                  <button type="button" @click="fnLink('/point/history')">이용내역보기</button>
                </div>
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
