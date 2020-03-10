<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' title="축제 공연 행사" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="(data, idx) in TourData" v-bind:key="idx">
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
  mounted () {
    // const backImg = document.getElementsByClassName('back_img')
    // for (let i = 0; i < backImg.length; i++) {
    //   const element = backImg[i]
    //   const width = element.offsetWidth
    //   element.style.height = `${width}px`
    // }
    this.$store.dispatch('loadTourData')
  },
  computed: {
    ...mapState(['TourData'])
  }
}
</script>
