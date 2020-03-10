import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default new Vuex.Store({
  state: {
    domain: 'https://stage.api.tranggle.com:4081', // 공통 URL
    introData: {},
    introImage: [],
    TourData: [],
    FoodData: [],
    LodgMentData: [],
    LeportsData: [],
    ShoppingData: [],
    apiData: []
  },
  mutations: {
    setIntroData (state, data) {
      state.introData = data.info
      // 이미지 url
      data.image.map((val) => {
        const imgPath = `${val.image_thumb_url}/${val.mingle_image_name}`
        state.introImage.push(imgPath)
      })
    },
    setTourData (state, data) {
      state.TourData = data.content.list
      state.apiData = data.content.list
    },
    setFoodData (state, data) {
      state.FoodData = data.content.list
      state.apiData = data.content.list
    },
    setLodgMentData (state, data) {
      state.LodgMentData = data.content.list
      state.apiData = data.content.list
    },
    setLeportsData (state, data) {
      state.LeportsData = data.content.list
      state.apiData = data.content.list
    },
    setShoppingData (state, data) {
      state.ShoppingData = data.content.list
      state.apiData = data.content.list
    }
  },
  actions: {
    /*
    - 5. 투어소개 기본정보
    - 파라미터
      mingleCode / 서비스코드 / 필수
    */
    loadIntroData ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/serviceInfo.jsonp?mingleCode=/GN62eV1c4Q78ghWNMWRsQ==`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setIntroData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
     주변 축제 행사 API
     */
    loadTourData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=15&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          commit('setTourData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
     주변 음식점 API
     */
    loadFoodData ({ stage, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=39&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setFoodData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
     주변 숙소 API
     */
    loadLodgMentData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=32&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setLodgMentData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
     주변 체험 관광 API
     */
    loadLeportsData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=28&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setLeportsData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
     주변 쇼핑 API
     */
    loadShoppingData ({ state, commit }) {
      const url = 'https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=%27%27&mingleCode=/GN62eV1c4Q78ghWNMWRsQ==&contentTypeId=38&view_count=15&page=1&listType=S&lon=&lat='
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response)
          commit('setShoppingData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
