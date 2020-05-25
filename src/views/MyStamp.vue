<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title='내가 찍은 스탬프' />
    <div class="mystamp_wrap">
      <div class="box">
        <select class="mySelect" v-model="selectValue" @change="setOrder">
          <option v-bind:value="'0'">날짜순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
          <option v-bind:value="'1'">날짜순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
          <option v-bind:value="'2'">이름순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
          <option v-bind:value="'3'">이름순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
        </select>
        <span class="count">
          <em>{{myStampData.length || 0}}</em>
          <img src="@/assets/images/dot.png" alt="dot">
          <em>{{allCount}}</em>
        </span>
      </div>
      <ul>
        <li v-for="(data, idx) in myStampData" v-bind:key="idx" @click="stampClick(data)">
          <div class="mystamp">
            <img :src="data.mingle_stamp_image" alt="mystamp">
          </div>
          <span>{{data.info_badge_name}}</span>
        </li>
      </ul>
    </div>
    <PopupSns />
    <PopupMyStamp />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
import PopupMyStamp from '@/components/popup/PopupMyStamp.vue'
import { mapState } from 'vuex'
export default {
  name: 'MyStamp',
  components: {
    Head,
    PopupSns,
    PopupMyStamp
  },
  data () {
    return {
      selectValue: '0',
      allCount: localStorage.stampCount
    }
  },
  computed: {
    ...mapState(['myStampData'])
  },
  methods: {
    stampClick (data) {
      this.$store.state.getStampImage = data.mingle_stamp_image
      this.$store.state.getStampName = data.info_badge_name
      this.$store.state.getStampDate = data.user_mingle_badge_badge_date
      const openChk = this.$store.state.stampOpen
      this.$store.dispatch('loadStampPopup', openChk)
    },
    setOrder () {
      this.$store.dispatch('loadMyStamp', this.selectValue)
    }
  },
  mounted () {
    this.$store.dispatch('loadMyStamp', this.selectValue)
  }
}
</script>
