<template>
  <div>
    <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_1.png" alt="icon"> 주변 축제 공연행사</h1>
              <a href="/tour/list?type=T"><span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span></a>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in TourData.slice(0, 2)" v-bind:key="idx" >
                  <a :href=data.apiUrl><img :src=data.image alt=""></a>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_2.png" alt="icon"> 주변 음식점</h1>
              <a href="/tour/list?type=F"><span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span></a>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in FoodData.slice(0, 2)" v-bind:key="idx" >
                  <a :href=data.apiUrl><img :src=data.image alt=""></a>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_3.png" alt="icon"> 주변 숙박업소</h1>
              <a href="/tour/list?type=LM"><span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span></a>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in LodgMentData.slice(0, 2)" v-bind:key="idx" >
                  <a :href=data.apiUrl><img :src=data.image alt=""></a>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_4.png" alt="icon"> 주변 체험관광</h1>
              <a href="/tour/list?type=L"><span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span></a>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in LeportsData.slice(0, 2)" v-bind:key="idx" >
                  <a :href=data.apiUrl><img :src=data.image alt=""></a>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_5.png" alt="icon"> 주변 쇼핑</h1>
              <a href="/tour/list?type=S"><span>모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span></a>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in ShoppingData.slice(0, 2)" v-bind:key="idx" >
                  <a :href=data.apiUrl><img :src=data.image alt=""></a>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TourPlace',
  mounted () {
    this.$store.dispatch('loadTourData')
    this.$store.dispatch('loadFoodData')
    this.$store.dispatch('loadLodgMentData')
    this.$store.dispatch('loadLeportsData')
    this.$store.dispatch('loadShoppingData')
  },
  computed: {
    ...mapState(['TourData']),
    ...mapState(['FoodData']),
    ...mapState(['LodgMentData']),
    ...mapState(['LeportsData']),
    ...mapState(['ShoppingData'])
  }
}
</script>
