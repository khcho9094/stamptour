import Vue from 'vue'
import Vuex from 'vuex'
// import VueCookie from 'vue-cookie'

Vue.use(Vuex)
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default new Vuex.Store({
  state: {
    // SzActcWN5QXozxDixoG4zQ== 코리아둘레길(권역, 갯수)
    // /GN62eV1c4Q78ghWNMWRsQ== 부안 (포인트)
    // QAAPpA7foDPqF3zEzdvHrw== 구로 (인증서1개, 포인트)
    // M0ZRcktVl8H3kJaRKq3Irg== 양천 (봉사 신청 2개, 포인트)
    // HvbQjGJR2yF9vTu8m2TUZQ== 태백 (포인트)
    // iQxiUpF8ZfaGodRQJ6s0mg== 테마여행(권역, 참여신청, 갯수)
    // vSi8Z9QlNS5wushabGnrhA== 평화누리길 (선물 1개, 갯수)
    domain: 'https://stage.api.tranggle.com:4081', // 공통 URL
    token: '', // 임시 토큰
    // VueCookie.get('login_token'),
    // 0A485F303C2CCC133AD94AA94C8B6346C9A8290335D26E6D74F33019072AAEC6E1F4FF7AB074BCB75E816AD1DE9802AD 오마왕
    // DCE618C8A7238BE1CA3EE283B8FF614FF4337E5587D1260B4BD927E366B77308C9C488AA2A0813B3617AAFDFDFA45ACBE2F21B907B5A32AD whrjsgml111
    buanAuthUrl: 'https://goo.gl/forms/1pXkfZ9C31kLXMEJ3', // 부안 인증서 신청 주소
    guroAuthUrl: 'https://drive.google.com/open?id=17w8ksUmERZOKxlwf8z1ihAvQtFR66eOgqmzzn6dalTA', // 구로 인증서 신청 주소
    yanchanAuthUrl: 'https://drive.google.com/open?id=1JElD4SuEekkIk66yMdhFZaH6JLuxxoROikfR2bwlbTc', // 양천 봉사활동 인증서 신청 주소
    yanchanAuthUrl2: 'https://drive.google.com/open?id=1LGPnKRK-Bom_v-mKo41-0kAOunyWg-rd6QI7H0ZrJR8', // 양천 봉사활동 인증서 신청 주소2
    peaceAuthUrl: 'https://drive.google.com/open?id=1XCxQGyTe4KRGUH_U40AKZ0SDmRqDYYwH2KCIWKnlz5M', // 평화누리길 인증서 신청 주소
    stampCodeInfo: [
      { name: '코리아둘레길', code: 'SzActcWN5QXozxDixoG4zQ==', info: 'number' },
      { name: '부안', code: '/GN62eV1c4Q78ghWNMWRsQ==', info: 'point' },
      { name: '구로', code: 'QAAPpA7foDPqF3zEzdvHrw==', info: 'point' },
      { name: '양천', code: 'M0ZRcktVl8H3kJaRKq3Irg==', info: 'point' },
      { name: '태백', code: 'HvbQjGJR2yF9vTu8m2TUZQ==', info: 'point' },
      { name: '테마여행', code: 'iQxiUpF8ZfaGodRQJ6s0mg==', info: 'number' },
      { name: '평화누리길', code: 'vSi8Z9QlNS5wushabGnrhA==', info: 'number' }
    ],
    mingleCode: '',
    contentId: null, // 투어 API content ID 값
    contentTypeId: null, // 투어 API content type Id 값
    badge_id: null, // 투어 API에 전달할 스탬프 Id 값
    apiType: null, // 투어 리스트 타입 값
    introData: {}, // 투어소개 정보
    introImage: [], // 투어소개 이미지
    giftData: [], // 선물 정보
    myPoint: 0, // 보유 포인트
    totalData: {}, // 기존 코스 정보
    userInfo: {}, // 유저 정보
    stampCommon: {}, // 스탬프 개요
    stampIntro: {}, // 스탬프 소개
    stampImage: {}, // 스탬프 이미지
    stampMethod: {}, // 스탬프 방법
    mainStampList: [], // 메인 스탬프 리스트
    allStampCount: null, // 모든 스탬프 갯수
    stampAll: [], // 모든 스탬프
    getStampCount: 0, // 획득 스탬프 갯수
    mainRecommendList: [], // 메인 추천 스탬프 리스트
    sumPrice: 0, // 전체 선물 가격,
    memberList: [], // 참가자 명단
    memberCount: '0', // 참가자 수
    TourData: [], // 축제공연행사
    FoodData: [], // 음식점
    LodgMentData: [], // 숙박업소
    LeportsData: [], // 체험관광
    ShoppingData: [], // 쇼핑
    tourListData: [], // 투어 리스트
    serviceLinkData: [],
    apiDetailData: [],
    snsOpen: false,
    popupGift: { open: false },
    popupStampSuccess: false,
    lon: 0, // 경도
    lat: 0, // 위도
    badgeRegister: {}, // 성공 메세지
    giftSolo: true, // 선물페이지 단독페이지 여부
    areaList: [], // 권역 리스트
    areaCode: '', // 권역 코드
    durunubiCheck: 0,
    memberInfo: {}, // 회원 정보(주소, 연락처)
    tourShareUrl: '', // 클립보드 공유 주소 저장
    allStampPoint: 0, // 총 포인트
    enc_member: 'E25693D564BFEA502E1144945006ED87', // 암호화 된 회원 아이디
    mingleCodeArr: '' // 포인트 합산에 보낼 스탬프 투어 코드 리스트

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
    setGiftData (state, data) {
      let total = 0
      state.giftData = data
      if (data[0].user_mingle_gift_point) {
        state.myPoint = data[0].user_mingle_gift_point
      }
      data.map((val) => {
        if (parseInt(val.mingle_count) > total) {
          total = parseInt(val.mingle_count)
        }
      })
      state.allStampPoint = total
    },
    setGiftDataNew (state, data) {
      let sum = 0
      data.map((val) => {
        sum += parseInt(val.mingle_gift_price)
      })
      state.sumPrice = sum
      state.memberInfo.address = data[0].member_address
      state.memberInfo.mobile = data[0].member_mobile
    },
    setTotalData (state, data) {
      state.totalData = data
      state.userInfo = data.view
    },
    setStampData (state, data) {
      state.stampCommon = data.COMMON
      state.stampIntro = data.INTRO
      state.stampImage = data.IMAGE
      state.stampMethod = data.METHOD
    },
    setMainData (state, data) {
      state.mainStampList = data.stamplist_info
      state.allStampCount = parseInt(data.stampget_info.mingle_badge_count)
      state.getStampCount = parseInt(data.stampget_info.badge_get_count)
    },
    setMainAll (state, data) {
      state.stampAll = data.stamplist_info
      state.stampAll.map((data, idx) => {
        state.stampAll[idx].num = idx + 1
      })
    },
    setMainRecommend (state, data) {
      const array = Array.from(Array(Math.round(data.stamplist_info.length / 2)), () => [])
      data.stamplist_info.map((val, idx) => {
        array[parseInt(idx / 2)].push(val)
      })
      state.mainRecommendList = array
    },
    setMemberData (state, data) {
      // 배열 합치기
      state.memberList = state.memberList.concat(data.list)
      state.memberCount = data.total.CHALLENGE
    },
    setTourTotalData (state, data) {
      if (data.name === 'party') {
        state.TourData = data.list
      } else if (data.name === 'food') {
        state.FoodData = data.list
      } else if (data.name === 'hotel') {
        state.LodgMentData = data.list
      } else if (data.name === 'exp') {
        state.LeportsData = data.list
      } else {
        state.ShoppingData = data.list
      }
    },
    setTourListData (state, data) {
      state.tourListData = data.list
    },
    // =================================================================
    setTourInfoData (state, data) {
      state.TourInfoData = data.response.content
    },
    setTourData (state, data) {
      state.TourData = data.content.list
      state.apiData = data.content.list
      data.content.list.map((val, index) => {
        const apiUrl = '/tour/detail?contentId=' + val.contentid + '&contentTypeId=' + val.contenttypeid
        state.TourData[index].apiUrl = apiUrl
        state.apiData[index].apiUrl = apiUrl
      })
    },
    setFoodData (state, data) {
      state.FoodData = data.content.list
      state.apiData = data.content.list
      data.content.list.map((val, index) => {
        const apiUrl = '/tour/detail?contentId=' + val.contentid + '&contentTypeId=' + val.contenttypeid
        state.FoodData[index].apiUrl = apiUrl
        state.apiData[index].apiUrl = apiUrl
      })
    },
    setLodgMentData (state, data) {
      state.LodgMentData = data.content.list
      state.apiData = data.content.list
      data.content.list.map((val, index) => {
        const apiUrl = '/tour/detail?contentId=' + val.contentid + '&contentTypeId=' + val.contenttypeid
        state.LodgMentData[index].apiUrl = apiUrl
        state.apiData[index].apiUrl = apiUrl
      })
    },
    setLeportsData (state, data) {
      state.LeportsData = data.content.list
      state.apiData = data.content.list
      data.content.list.map((val, index) => {
        const apiUrl = '/tour/detail?contentId=' + val.contentid + '&contentTypeId=' + val.contenttypeid
        state.LeportsData[index].apiUrl = apiUrl
        state.apiData[index].apiUrl = apiUrl
      })
    },
    setShoppingData (state, data) {
      state.ShoppingData = data.content.list
      state.apiData = data.content.list
      data.content.list.map((val, index) => {
        const apiUrl = '/tour/detail?contentId=' + val.contentid + '&contentTypeId=' + val.contenttypeid
        state.ShoppingData[index].apiUrl = apiUrl
        state.apiData[index].apiUrl = apiUrl
      })
    },
    setServiceLinkData (state, data) {
      state.serviceLinkData = data.content.servicelink_info
    },
    setApiDetailData (state, data) {
      state.apiDetailData = data.content
    },
    setSnsOpen (state, data) {
      state.snsOpen = data
    },
    setBadgeRegister (state, data) {
      state.badgeRegister = data
    },
    setAreaList (state, data) {
      state.areaList = data
    },
    setDurunubiCheck (state, data) {
      state.durunubiCheck = data
    }
  },
  actions: {
    /*
    - 5. 투어소개 기본정보
    - 파라미터
      mingleCode / 서비스코드 / 필수
    */
    loadIntroData ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/serviceInfo.jsonp?mingleCode=${state.mingleCode}`
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
    - 선물소개 getUserPoint
    - 파라미터
      mingleCode / 서비스코드 / 필수
      token / 토큰정보 / 필수
    */
    loadGiftData ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/courses/getUserPoint.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setGiftData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 토큰이 없을때
    loadGiftNoToken ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/intro/serviceInfo.jsonp?mingleCode=${state.mingleCode}&token=`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setGiftData', response.response.content.gift)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    - 선물소개 NEW stampTourMainGiftInfo
    - 파라미터
      mingleCode / 서비스코드 / 필수
      token / 토큰정보 / 필수
    */
    loadGiftDataNew ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainGiftInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setGiftDataNew', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    - 기존 코스 정보 get_course_item
    - 파라미터
      mingleCode / 서비스코드 / 필수
      token / 토큰정보 / 필수
    */
    loadTotalData ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/courses/get_course_item.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setTotalData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    - 스탬프정보 보기
    - 파라미터
      mingleCode / 서비스코드 / 필수
      badge_id / 배지id / 필수
      contentTypeId / 관광공사 CONTNET Type / 필수
      contentId / 관광공사 CONTNET Id / 필수
    */

    loadStampData ({ state, commit }, data) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainStampInfo.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.mingle_badge_content_type}&contentId=${data.mingle_badge_content_id}&badge_id=${data.mingle_badge_id}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setStampData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    - 메인 스탬프 투어
    - 파라미터
      mingleCode / 서비스코드 / 필수
      token / 토큰 / 옵션
      order / 출력순서 / 옵션
      status / 완료여부확인 / 옵션
    */
    loadMainData ({ state, commit }, params) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=${params.order}&status=${params.status}&group=${params.areaCode}&lon=${state.lon}&lat=${state.lat}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMainData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadMainAll ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=pop&status=ALL&group=`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMainAll', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadMainRecommend ({ state, commit }) {
      if (state.token === null) {
        state.token = ''
      }
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=distance&status=FINISH&lon=${state.lon}&lat=${state.lat}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMainRecommend', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    - 참가자 보기
    - 파라미터
      mingleCode / 서비스코드 / 필수
      token / 토큰 / 옵션
      status / CHALLENGE / 옵션
      view_count / 출력갯수 / 옵션
      page / 페이지 / 옵션
    */
    loadMemberData ({ state, commit }, pageCount) {
      const url = `${state.domain}/v2/mingle/courses/CourseStatusList.jsonp?search_order=POP&mingleCode=${state.mingleCode}&status=CHALLENGE&view_count=10&page=${pageCount}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMemberData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ===========================================================================================================================
    // 아래 5개 api 통합 - khcho
    loadTourTotalData ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.typeId}&view_count=15&page=1&listType=S&lon=${state.lon}&lat=${state.lat}`
      Vue
        .jsonp(url)
        .then(response => {
          response.response.content.name = data.ename
          commit('setTourTotalData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 투어 리스트
    loadTourListData ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.typeId}&view_count=15&page=1&listType=S&lon=${state.lon}&lat=${state.lat}`
      Vue
        .jsonp(url)
        .then(response => {
          response.response.content.name = data.ename
          commit('setTourListData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 투어 상세
    loadTourDetail ({ state, commit }, data) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainStampInfo.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.contenttypeid}&contentId=${data.contentid}&badge_id=null`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setStampData', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    9-1 주변 관광정보(하단 관련서비스 정보)
    */
    loadServiceLinkData ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourServiceLink.jsonp?mingleCode=${state.mingleCode}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setServiceLinkData', response.response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    공유하기 팝업
    */
    loadSnsPopup ({ state, commit }, data) {
      const openYn = !data
      commit('setSnsOpen', openYn)
    },
    /*
    선물팝업 view
    */
    openPopupGift ({ state }, data) {
      state.popupGift = data
      if (Object.keys(data).length > 0) {
        state.popupGift.open = true
      } else {
        state.popupGift.open = false
      }
    },
    /*
    mingleCode 세팅
    */
    setMingleCode ({ state }, data) {
      state.mingleCode = data
    },
    /*
    token 세팅
    */
    setToken ({ state }, data) {
      state.token = data || ''
    },
    setGiftRoute ({ state }, data) {
      state.giftSolo = data
    },
    setAreaCode ({ state }, data) {
      state.areaCode = data
    },
    /*
    배지등록(전자스탬프)
    */
    loadBadgeRegister ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/badgeV2/badgeRegister.jsonp?badgeId=${data.mingle_badge_id}&token=${state.token}&registDatetime=&isTimeCheck=Y&AppVer=A_1_3.10.4`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            state.popupStampSuccess = true
            commit('setBadgeRegister', response)
          } else {
            alert(response.response.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    권역별 리스트 (코리아둘레길, 테마10선)
    */
    loadAreaList ({ state, commit }, data) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourAreaCode.jsonp?mingleCode=${state.mingleCode}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setAreaList', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    두루누비 아이디 연동 체크
     */
    loadDurunubiCheck ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/stampTourDurunubi.jsonp?token=${data}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setDurunubiCheck', response.response.content.DATA.count)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadSnsPoint ({ state, commit }) {
      const url = `api.tranggle.com/v2/mingle/stamptour/setSnsPoint.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
        }).catch(err => {
          console.log(err)
        })
    },
    /*
    선물 신청
    */
    loadGiftReceive ({ state, commit }, data) {
      const url = `${state.domain}/v2/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          alert(response.response.message)
          this.dispatch('openPopupGift', {})
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    스탬프 투어의 스탬프 또는 기프티콘 변경시 회원정보 업데이트 하는 API
    */
    loadMingleVersionChk ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/mingleVersionCheck?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
