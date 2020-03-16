<template>
    <div class="course_box">
        <div class="sort">
            <span :class="{on: data.active}" @click="sortBtn(data.param, $event)" v-for="(data, idx) in sortList" v-bind:key="idx">{{data.name}}</span>
            <div class="complete_hide">
                <input type="checkbox" id="complete_off"  name="complete_off" @change="checkStatus($event)"> <label for="complete_off">완료 코스 숨기기</label>
            </div>
        </div>
        <ul class="list">
            <li v-for="(data, idx) in mainStampList" v-bind:key="idx" @click="stampDetail(data)">
                <div
                  class="box_lt"
                  :style="{ 'background-image': `url(${data.mingle_badge_image})` }">
                    <img :class="(data.user_mingle_badge_get_stamp_yn === 'N')?'p_icon':'c_icon'" :src="iconImg(data.mingle_badge_type, data.user_mingle_badge_get_stamp_yn)" alt="course_icon"><br/>
                    <span v-show="data.user_mingle_badge_get_stamp_yn === 'N'">{{data.user_mingle_badge_point}}P</span>
                </div>
                <div class="box_rt">
                    <h2>{{data.info_badge_name}}</h2>
                    <p class="txt">여기에서 {{parseInt(data.distance)}}km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">{{data.mingle_stat_badge_count}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import router from '@/router'
export default {
  name: 'MainList',
  data () {
    return {
      sortList: [
        { name: '인기순', active: true, param: 'pop' },
        { name: '거리순', active: false, param: 'distance' }
      ],
      params: {
        order: 'pop',
        status: 'ALL'
      }
    }
  },
  computed: {
    ...mapState(['mainStampList'])
  },
  methods: {
    iconImg (type, stamp) {
      let iType = `couse_icon_${type.toLowerCase()}`
      if (stamp === 'Y') {
        iType = 'complete'
      }
      return require(`@/assets/images/${iType}.png`)
    },
    sortBtn (param, ev) {
      for (const i in this.sortList) {
        if (ev.target.className !== 'on') {
          this.sortList[i].active = !this.sortList[i].active
          this.params.order = param
          if (ev.target.innerText === this.sortList[i].name) {
            this.listCall()
          }
        }
      }
    },
    checkStatus (ev) {
      if (ev.target.checked) {
        this.params.status = 'FINISH'
      } else {
        this.params.status = 'ALL'
      }
      this.listCall()
    },
    listCall () {
      this.$store.dispatch('loadMainData', this.params)
    },
    stampDetail (sid) {
      localStorage.stampDetail = JSON.stringify(sid)
      router.push('/stamp')
    }
  }
}
</script>
