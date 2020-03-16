<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' id='t_head' :title="headTitle" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="(data, idx) in apiData" v-bind:key="idx">
                <!-- <a :href=data.apiUrl><div class="back_img" :style="{ 'backgroundImage': `url(${data.image})` }" ></div></a> -->
                <a v-on:click="apiDetailOn(data.contentid, data.contenttypeid)"><div class="back_img" :style="{ 'backgroundImage': `url(${data.image})` }" ></div></a>
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
      headTitle: ''
    }
  },
  methods: {
    apiDetailOn: function (contentid, contenttypeid) {
      this.$store.state.contentId = contentid
      this.$store.state.contentTypeId = contenttypeid
      this.$router.push('/tour/detail')
    }
  },
  created () {
  },
  mounted () {
    const type = this.$store.state.apiType
    // 주변 축제
    if (type === 'T') {
      this.headTitle = '주변 축제 공연행사'
      this.$store.dispatch('loadTourData')
    // 주변 음식점
    } else if (type === 'F') {
      this.headTitle = '주변 음식점'
      this.$store.dispatch('loadFoodData')
    // 주변 숙소
    } else if (type === 'LM') {
      this.headTitle = '주변 숙소'
      this.$store.dispatch('loadLodgMentData')
    // 주변 레포츠
    } else if (type === 'L') {
      this.headTitle = '주변 체험관광'
      this.$store.dispatch('loadLeportsData')
    // 주변 쇼핑
    } else if (type === 'S') {
      this.headTitle = '주변 쇼핑'
      this.$store.dispatch('loadShoppingData')
    }
  },
  computed: {
    ...mapState(['apiData'])
  },
  destroyed () {
    this.$store.state.apiData = []
  }
}
</script>
