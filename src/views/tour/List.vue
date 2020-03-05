<template>
  <div class="tour_list">
    <!-- 헤더 -->
    <Head type='back' name='tour_list' title="축제 공연 행사" />
    <div class="tour_sub_wrap back_gray">
        <ul class="view_list">
             <li v-for="data in listData" v-bind:key="data">
                <img :src="data.imgurl" class="square" alt="">
                <h2>{{data.text1}}</h2>
                <p>{{data.text2}}</p>
             </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
export default {
  name: 'List',
  components: {
    Head
  },
  data () {
    return {
      //  dummy data
      listData: [
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '1부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        },
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '2부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        },
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '3부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        },
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '4부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        },
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '5부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        },
        {
          imgurl: require('@/assets/images/dummy_img/img_3.jpg'),
          text1: '6부안 축제의 날 투모로우 축제의',
          text2: '여기에서 28km'
        }
      ]
    }
  }
}
</script>
