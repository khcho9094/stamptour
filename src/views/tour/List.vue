<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' id='t_head' :title="headTitle()" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="(data, idx) in tourListData" v-bind:key="idx">
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
    }
  },
  methods: {
    apiDetailOn: function (contentid, contenttypeid) {
      this.$store.state.contentId = contentid
      this.$store.state.contentTypeId = contenttypeid
      this.$router.push('/tour/detail')
    },
    headTitle () {
      return JSON.parse(localStorage.tourType).name
    }
  },
  created () {
  },
  mounted () {
    this.$store.dispatch('loadTourListData', JSON.parse(localStorage.tourType))
  },
  computed: {
    ...mapState(['tourListData'])
  },
  destroyed () {
    this.$store.state.tourListData = []
  }
}
</script>
