<template>
    <div>
        <div class="service_info type2">
            <!-- <div class="title">행사</div> -->
            <div class="title">{{cTitle()}}</div>
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
    },
    cTitle () {
      let val = ''
      if (this.common.contenttypeid === '15') {
        val = '행사'
      } else if (this.common.contenttypeid === '39') {
        val = '음식점'
      } else if (this.common.contenttypeid === '32') {
        val = '숙박'
      } else if (this.common.contenttypeid === '28') {
        val = '레포츠'
      } else if (this.common.contenttypeid === '38') {
        val = '쇼핑'
      } else {
        val = '행사'
      }
      return val
    }
  }
}
</script>
