<template>
    <div>
        <div class="service_info type2">
            <div class="title">행사</div>
            <div class="info">
                <p v-html="data" v-for="(data, idx) in commonData()" v-bind:key="idx"></p>
            </div>
        </div>
        <div class="service_info type3">
            <div class="title">개요</div>
            <div class="info">
                <p v-html="introDesc()"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'StampInfo',
  props: {
    intro: Object,
    common: Object
  },
  methods: {
    // 개요
    introDesc () {
      let string = this.common.intro || ''
      string = string.replace('<h3>개요 :</h3>', '')
      return string
    },
    // 행사
    commonData () {
      const arr = []
      for (const key in this.intro) {
        const element = this.intro[key]
        arr.push(element)
      }
      return arr
    }
  }
}
</script>
