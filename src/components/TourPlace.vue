<template>
  <div>
      <div class="sur_place" v-for="(data, idx) in this.tourTotal" v-bind:key="idx">
          <div class="title">
              <h1> <img :src="iconImg(data)" alt="icon"> {{data.name}}</h1>
              <span v-on:click="apiListOn(data)">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(val, idx2) in tourChange(data.ename).slice(0, 2)" v-bind:key="idx2" @click="apiDetailOn(val)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${val.image})` }"
                        ></div>
                  <h2>{{val.title}}</h2>
                  <p>여기에서 {{val.dist}}km</p>
              </li>
          </ul>
      </div>

    <!-- <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_1.png" alt="icon"> 주변 축제 공연행사</h1>
              <span v-on:click="apiListOn('T')">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in TourData.slice(0, 2)" v-bind:key="idx" v-on:click="apiDetailOn(data.contentid,data.contenttypeid)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${data.image})` }"
                        ></div>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_2.png" alt="icon"> 주변 음식점</h1>
              <span v-on:click="apiListOn('F')">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in FoodData.slice(0, 2)" v-bind:key="idx" v-on:click="apiDetailOn(data.contentid,data.contenttypeid)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${data.image})` }"
                        ></div>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_3.png" alt="icon"> 주변 숙박업소</h1>
              <span v-on:click="apiListOn('LM')">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in LodgMentData.slice(0, 2)" v-bind:key="idx" v-on:click="apiDetailOn(data.contentid,data.contenttypeid)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${data.image})` }"
                        ></div>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_4.png" alt="icon"> 주변 체험관광</h1>
              <span v-on:click="apiListOn('L')">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in LeportsData.slice(0, 2)" v-bind:key="idx" v-on:click="apiDetailOn(data.contentid,data.contenttypeid)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${data.image})` }"
                        ></div>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div>
      <div class="sur_place">
          <div class="title">
              <h1> <img src="@/assets/images/icon_t_5.png" alt="icon"> 주변 쇼핑</h1>
              <span v-on:click="apiListOn('S')">모두보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
          </div>
          <ul class="list">
              <li v-for="(data, idx) in ShoppingData.slice(0, 2)" v-bind:key="idx" v-on:click="apiDetailOn(data.contentid,data.contenttypeid)">
                  <div
                        class="backImg"
                        :style="{ 'backgroundImage': `url(${data.image})` }"
                        ></div>
                  <h2>{{data.title}}</h2>
                  <p>여기에서 {{data.dist}}km</p>
              </li>
          </ul>
      </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TourPlace',
  data () {
    return {
      tourTotal: [
        {
          num: 1,
          name: '주변 축제 공연행사',
          ename: 'party',
          typeId: 15
        },
        {
          num: 2,
          name: '주변 음식점',
          ename: 'food',
          typeId: 39
        },
        {
          num: 3,
          name: '주변 숙박업소',
          ename: 'hotel',
          typeId: 32
        },
        {
          num: 4,
          name: '주변 체험관광',
          ename: 'exp',
          typeId: 28
        },
        {
          num: 5,
          name: '주변 쇼핑',
          ename: 'shopping',
          typeId: 38
        }
      ]
    }
  },
  methods: {
    apiListOn (type) {
      localStorage.tourType = JSON.stringify(type)
      this.$router.push('/tour/list')
    },
    apiDetailOn (data) {
      localStorage.tourDetail = JSON.stringify(data)
      this.$router.push('/tour/detail')
    },
    iconImg (data) {
      return require(`@/assets/images/icon_t_${data.num}.png`)
    },
    // 임시로 각각의 배열에 넣어놓음.
    // 미해결 문제점 : vuex state에서 객체 값으로 넘어오면 데이터가 바로 안보이고 배열로 넘어와야 바로 보임.
    // 추후 하나의 객체에 아래 5개 값을 담을 필요가 있음.
    tourChange (data) {
      let arr = []
      if (data === 'party') {
        arr = this.TourData
      } else if (data === 'food') {
        arr = this.FoodData
      } else if (data === 'hotel') {
        arr = this.LodgMentData
      } else if (data === 'exp') {
        arr = this.LeportsData
      } else {
        arr = this.ShoppingData
      }
      return arr
    }
  },
  mounted () {
    // 아래 5개 통합
    this.tourTotal.map((data) => {
      this.$store.dispatch('loadTourTotalData', data)
    })
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
