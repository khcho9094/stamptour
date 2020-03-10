<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' id='t_head' title="축제" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="(data, idx) in apiData" v-bind:key="idx">
                <div class="back_img" :style="{ 'backgroundImage': `url(${data.image})` }" ></div>
                <h2>{{data.title}}</h2>
                <p>{{data.dist}}Km</p>
             </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'List',
  components: {
    Head
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    const type = this.$route.query.type
    // 주변 축제
    if (type === 'T') {
      document.getElementById('t_head').getElementsByTagName('span')[0].innerHTML = '주변 축제 공연행사'
      this.$store.dispatch('loadTourData')
    // 주변 음식점
    } else if (type === 'F') {
      document.getElementById('t_head').getElementsByTagName('span')[0].innerHTML = '주변 음식점'
      this.$store.dispatch('loadFoodData')
    // 주변 숙소
    } else if (type === 'LM') {
      document.getElementById('t_head').getElementsByTagName('span')[0].innerHTML = '주변 숙소'
      this.$store.dispatch('loadLodgMentData')
    // 주변 레포츠
    } else if (type === 'L') {
      document.getElementById('t_head').getElementsByTagName('span')[0].innerHTML = '주변 체험관광'
      this.$store.dispatch('loadLeportsData')
    // 주변 쇼핑
    } else if (type === 'S') {
      document.getElementById('t_head').getElementsByTagName('span')[0].innerHTML = '주변 쇼핑'
      this.$store.dispatch('loadShoppingData')
    }
  },
  computed: {
    ...mapState(['apiData'])
  }
}
</script>
