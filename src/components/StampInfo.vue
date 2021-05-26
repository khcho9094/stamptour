<template>
    <div>
        <div class="service_info type2">
            <!-- <div class="title">행사</div> -->
            <div class="title">{{cTitle()}}</div>
            <div class="info" v-if="poiInfo && poiInfo.length > 0">
              <p class="ptxt" v-html="pdata" v-for="(pdata, pidx) in poiData()" v-bind:key="pidx"></p>
            </div>
            <div class="info" v-else>
              <p class="ptxt" v-html="data" v-for="(data, idx) in commonData()" v-bind:key="idx"></p>
            </div>
        </div>
        <div class="service_info type3">
            <div class="title">개요</div>
            <div class="info">
                <!-- 생태정보 -->
                <p class="ptxt" v-if="poiInfo && poiInfo.length > 0" v-html="poiDesc()"></p>
                <!-- 스탬프 -->
                <p class="ptxt" v-else v-html="introDesc()"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'StampInfo',
  props: {
    intro: Object,
    common: Object,
    poiInfo: Array
  },
  methods: {
    // 개요
    introDesc () {
      let string = this.common.intro || ''
      string = string.replace('<h3>개요 :</h3>', '')
      return string
    },
    // 생태정보 개요
    poiDesc () {
      const txt = this.poiInfo[0].mingle_poi_desc
      return txt
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
    // 생태정보
    poiData () {
      const tArr = ['분 류', '발 견 지', '관찰시기']
      const arr = ['mingle_poi_sub_title', 'mingle_poi_region', 'mingle_poi_season']
      const poiArr = []
      arr.map((val, idx) => {
        const txt = `<strong class='poiTitle'>${tArr[idx]}</strong> ${this.poiInfo[0][val]}`
        poiArr.push(txt)
      })
      return poiArr
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
      } else if (this.common.contenttypeid === '25') {
        val = '여행코스'
      } else if (this.common.contenttypeid === '14') {
        val = '문화시설'
      } else if (this.common.contenttypeid === '12') {
        val = '관광지'
      } else if (this.common.contenttypeid === '99') {
        val = '생태정보'
      } else {
        val = this.common.contenttypeid
      }
      return val
    }
  }
}
</script>
<style>
  .poiTitle {
    width:50px;
    display: inline-block;
  }
</style>
