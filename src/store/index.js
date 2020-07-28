/* eslint-disable camelcase */
import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import router from '@/router'
import axios from 'axios'
// import jsonpAdapter from 'axios-jsonp'

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
    // 테스트 x2pb29pxoROYDl4jl1TOzQ==
    domain: 'https://api.tranggle.com', // 공통 URL
    domainTest: 'https://stage-api.tranggle.com:4081', // 공통 URL Test
    token: '', // 임시 토큰
    buanAuthUrl: 'https://goo.gl/forms/1pXkfZ9C31kLXMEJ3', // 부안 인증서 신청 주소 (잼버리 코스) 인증서 신청하기
    guroAuthUrl: 'https://drive.google.com/open?id=17w8ksUmERZOKxlwf8z1ihAvQtFR66eOgqmzzn6dalTA', // 구로 인증서 신청 주소 (100P) 인증서 신청하기
    yanchanAuthUrl: 'https://drive.google.com/open?id=1JElD4SuEekkIk66yMdhFZaH6JLuxxoROikfR2bwlbTc', // 양천 봉사활동 인증서 신청 주소 (4개스탬프획득시) 봉사점수 신청하기
    yanchanAuthUrl2: 'https://drive.google.com/open?id=1LGPnKRK-Bom_v-mKo41-0kAOunyWg-rd6QI7H0ZrJR8', // 양천 봉사활동 인증서 신청 주소2 (3개스탬프획득시)
    peaceAuthUrl: 'https://drive.google.com/open?id=1XCxQGyTe4KRGUH_U40AKZ0SDmRqDYYwH2KCIWKnlz5M', // 평화누리길 인증서 신청 주소 (12개) 인증서 신청하기
    stampCodeInfo: [
      { name: '비글테스트', code: 'x2pb29pxoROYDl4jl1TOzQ==', info: 'number', no: '10', giftMessage: '테스트테스트테스트테스트 스탬프투어 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -부안 잼버리&부안관광 스탬프투어 드림-' },
      { name: '코리아둘레길', code: 'SzActcWN5QXozxDixoG4zQ==', info: 'number', no: '16', giftMessage: '코리아둘레길 선물 도착!! 이벤트에 참여해주셔서 감사합니다. -투어는 곧 혜택. 코리아둘레길 스탬프투어 드림-' },
      { name: '부안', code: '/GN62eV1c4Q78ghWNMWRsQ==', info: 'point', no: '1', giftMessage: '부안군 잼버리&부안관광 스탬프투어 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -부안 잼버리&부안관광 스탬프투어 드림-' },
      { name: '양천', code: 'M0ZRcktVl8H3kJaRKq3Irg==', info: 'number', msg: '스탬프도 찍고 봉사 시간도 채우고!!', no: '14' },
      { name: '태백', code: 'HvbQjGJR2yF9vTu8m2TUZQ==', info: 'point', no: '15', giftMessage: '태백에서 꼭 가봐야 할 명소 33선 스탬프투어 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -태백 스탬프투어 드림-' },
      { name: '테마여행', code: 'iQxiUpF8ZfaGodRQJ6s0mg==', info: 'number', no: '17' },
      { name: '평화누리길', code: 'vSi8Z9QlNS5wushabGnrhA==', info: 'number', msg: '스탬프도 찍고 인증서도 받고!!', no: '18' },
      { name: '원주', code: '4k68KEPNtv/xCP0/x2Hirw==', info: 'point', no: '20', giftMessage: '[원주 구석구석 어디까지 가봤니?] 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -원주 스탬프투어 드림-' },
      { name: '관광100', code: 'YQTt4DYGRx7iBHRXs2IlPA==', info: 'number', no: '21' },
      { name: '평화누리 자전거길', code: 'xYwbII8pDWTT1VzPbK3E1g==', info: 'number', msg: '스탬프도 찍고 인증서도 받고!!', no: '22' },
      { name: '현충시설100', code: 'Nvn2hlG+v6mVAUJsmrbJ8w==', info: 'number', no: '23' },
      { name: '충북나드리', code: '+0DVeHum2c+rBgEjLoPi6Q==', info: 'number', no: '24', giftMessage: '충북 나드리 스탬프투어 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -충북 나드리 스탬프투어 드림-' }
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
    memberMyList: {}, // 내 명단
    memberCount: '0', // 참가자 수
    TourData: [], // 축제공연행사
    TourInfoData: [], // 관광지
    FoodData: [], // 음식점
    LodgMentData: [], // 숙박업소
    LeportsData: [], // 체험관광
    ShoppingData: [], // 쇼핑
    CultureData: [], // 문화시설
    CourseData: [], // 여행코스
    tourListData: [], // 투어 리스트
    serviceLinkData: [],
    apiDetailData: [],
    snsOpen: false,
    stampOpen: false,
    popupGift: { open: false },
    popupStampSuccess: false,
    lon: 0, // 경도
    lat: 0, // 위도
    badgeRegister: {}, // 성공 메세지
    giftSolo: true, // 선물페이지 단독페이지 여부
    areaList: [], // 권역 리스트
    areaCode: '', // 권역 코드
    durunubiCheck: '0',
    memberInfo: {}, // 회원 정보(주소, 연락처)
    tourShareUrl: '', // 클립보드 공유 주소 저장
    allStampPoint: 0, // 총 포인트
    enc_member: '', // 암호화 된 회원 아이디
    mingleCodeArr: '', // 포인트 합산에 보낼 스탬프 투어 코드 리스트
    sumApiChkCode: '', // 포인트 합산 후 결과 값 저장
    introPopup: false,
    allGiftData: [],
    stampGiftData: {
      title: [],
      content: []
    },
    getStampImage: '',
    getStampName: '',
    getStampDate: '',
    getStampWhence: '',
    restartOpen: false,
    getGiftChk: false,
    getGiftCnt: 0,
    restart_resultCode: '',
    myStampData: [], // 내가 찍은 스탬프
    popupNoti: { open: false },
    showExample: false,
    showPhoto: { open: false },
    thema10Status: {}, // 테마 10 조회
    uploadSuccess: false,
    themaPop: { open: false },
    zoomPop: false,
    zoomPopImg: 0,
    thema10Agree: 'N',
    themaPopAgree: { open: false },
    wonjuPopup: true, // 원주
    wonjuPopup1: true, // 원주 이벤트 발표
    wonjuPopup2: { open: false }, // 50코스
    wonjuPopup3: true, // 코리아둘레길
    wonjuPopup4: true, // 테마관광100
    themaUserInfo: {},
    themaUserMobile: '',
    guestChk: '',
    loadingMainList: false,
    themaPopReceipt: { open: false },
    receiptNumber: '',
    uploadLoading: false
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
      if (data.length && data[0].user_mingle_gift_point) {
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
      state.sumPrice = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      state.memberInfo.address = data[0].member_address
      state.memberInfo.mobile = data[0].member_mobile
    },
    setTotalData (state, data) {
      state.userInfo = data.view
    },
    setStampData (state, data) {
      state.stampCommon = data.COMMON
      state.stampIntro = data.INTRO
      state.stampImage = data.IMAGE
      state.stampMethod = data.METHOD
    },
    setMainData (state, data) {
      state.mainStampList = state.mainStampList.concat(data.stamplist_info)
      state.allStampCount = parseInt(data.stampget_info.mingle_badge_count)
      state.getStampCount = parseInt(data.stampget_info.badge_get_count)
      localStorage.stampCount = data.stampget_info.mingle_badge_count
    },
    setMainDataChange (state, data) {
      state.mainStampList = data.stamplist_info
      state.allStampCount = parseInt(data.stampget_info.mingle_badge_count)
      state.getStampCount = parseInt(data.stampget_info.badge_get_count)
      localStorage.stampCount = data.stampget_info.mingle_badge_count
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
      if (data.me.length > 0) {
        state.memberMyList = data.me[0]
      }
    },
    setUserInfo (state, data) {
      state.themaUserMobile = data.mobile
    },
    setTourTotalData (state, data) {
      if (data.name === 'party') {
        state.TourData = data.list
      } else if (data.name === 'tour') {
        state.TourInfoData = data.list
      } else if (data.name === 'food') {
        state.FoodData = data.list
      } else if (data.name === 'hotel') {
        state.LodgMentData = data.list
      } else if (data.name === 'shopping') {
        state.ShoppingData = data.list
      } else if (data.name === 'culture') {
        state.CultureData = data.list
      } else if (data.name === 'course') {
        state.CourseData = data.list
      } else {
        state.LeportsData = data.list
      }
    },
    setTourListData (state, data) {
      state.tourListData = data.list
    },
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
    setStampOpen (state, data) {
      state.stampOpen = data
    },
    setBadgeRegister (state, data) {
      state.badgeRegister = data
    },
    setAreaList (state, data) {
      state.areaList = data
    },
    setDurunubiCheck (state, data) {
      state.durunubiCheck = data
    },
    setCompleteSum (state, data) {
      // state.sumApiChkCode = data.code
      VueCookie.delete(state.enc_member)
    },
    setRestartData (state, data) {
      // state.restart_resultCode = data
      if (data === '00') {
        alert('정상 처리 되었습니다.')
        state.restartOpen = !state.restartOpen
        location.reload()
      } else {
        alert('오류가 발생 하였습니다.')
      }
    },
    setAllGiftData (state, data) {
      state.allGiftData = data
      let count = 0
      let content_cnt = 0
      let mingleNo = null
      const mObj = {}
      state.stampGiftData.title = []
      state.stampGiftData.content = []
      data.map((val, index) => {
        if ((mingleNo === null || mingleNo !== val.mingle_no) && val.mingle_no !== '17') {
          mingleNo = val.mingle_no
          mObj[mingleNo] = count
          count++
        }
      })
      data.map((val, index) => {
        if ((mingleNo === null || mingleNo !== val.mingle_no) && val.mingle_no !== '17') {
          mingleNo = val.mingle_no
          if (state.stampGiftData.content.length > 0 && mingleNo !== '17') {
            content_cnt++
          }
        }
        if (mingleNo === val.mingle_no && content_cnt === state.stampGiftData.content.length && val.mingle_no !== '17') {
          state.stampGiftData.title.push({ mingle_title: val.mingle_title, mingle_no: val.mingle_no })
          state.stampGiftData.content.push({ 0: [] })
        }

        if (mingleNo === val.mingle_no && val.mingle_no !== '17') {
          state.stampGiftData.content[content_cnt][0].push(val)
        }
      })
    },
    setMyStamp (state, data) {
      state.myStampData = data
    },
    setThema10Status (state, data) {
      state.receiptNumber = data.receipt_no
      state.thema10Status = data
    },
    setStampList (state, data) {
      data.map((val, idx) => {
        const obj = {
          name: val.mingle_title,
          code: val.mingle_service_code,
          info: (val.mingle_point_yn === 'Y') ? 'point' : 'number',
          no: parseInt(val.mingle_seq),
          msg: ''
        }
        if (val.mingle_seq === '18' || val.mingle_seq === '22') {
          obj.msg = '스탬프도 찍고 인증서도 받고!!'
        } else if (val.mingle_seq === '14') {
          obj.msg = '스탬프도 찍고 봉사 시간도 채우고!!'
        }
        state.stampCodeInfo[idx] = obj
      })
      console.log(state.stampCodeInfo)
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
      let appvertest = ''
      if (location.href.indexOf('mstamp') > -1) {
        appvertest = ''
      } else {
        appvertest = 'Y'
      }
      const url = `http://sung-api.tranggle.com/v2/mingle/stamptour/stampTourMainGiftInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&appver_test=${appvertest}`
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
      let appvertest = ''
      if (location.href.indexOf('mstamp') > -1) {
        appvertest = ''
      } else {
        appvertest = 'Y'
      }
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainGiftInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&appver_test=${appvertest}`
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
      state.loadingMainList = true
      state.lon = localStorage.getItem('setLon') || 0
      state.lat = localStorage.getItem('setLat') || 0
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=${params.order}&status=${params.status}&group=${params.areaCode}&lon=${state.lon}&lat=${state.lat}&page=${params.page}&view_count=${params.view_count}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMainData', response.response.content)
          state.loadingMainList = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadMainDataChange ({ state, commit }, params) {
      state.lon = localStorage.getItem('setLon') || 0
      state.lat = localStorage.getItem('setLat') || 0
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=${params.order}&status=${params.status}&group=${params.areaCode}&lon=${state.lon}&lat=${state.lat}&page=${params.page}&view_count=${params.view_count}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setMainDataChange', response.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 추후 삭제
    loadMainAll ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=pop&status=ALL&group=&page=1&view_count=300`
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
      state.lon = localStorage.getItem('setLon') || 0
      state.lat = localStorage.getItem('setLat') || 0
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&order=distance&status=FINISH&lon=${state.lon}&lat=${state.lat}&page=1&view_count=10`
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
      const url = `${state.domain}/v2/mingle/courses/CourseStatusList.jsonp?search_order=POP&mingleCode=${state.mingleCode}&status=CHALLENGE&view_count=20&page=${pageCount}&token=${state.token}`
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
      const url = `https://api.tranggle.com/v2/mingle/tourapi/getList.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.typeId}&view_count=2&page=1&listType=S&lon=${state.lon}&lat=${state.lat}`
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
          router.push('/tour/detail').catch(err => {
            if (err === 'NavigationDuplicated') {
              throw err
            }
          })
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
    스탬프 보기 팝업
    */
    loadStampPopup ({ state, commit }, data) {
      const openYn = !data
      commit('setStampOpen', openYn)
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
    선물 팝업의 알림 팝업
    */
    openNotiPopup ({ state }, data) {
      state.popupNoti = data
      if (Object.keys(data).length > 0) {
        state.popupNoti.open = true
      } else {
        state.popupNoti.open = false
      }
    },
    /*
    mingleCode 세팅
    */
    setMingleCode ({ state }, data) {
      // 모든 공백을 +로
      state.mingleCode = data.replace(/ /gi, '+')
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
    // intro 팝업
    setIntroPopup ({ state }, data) {
      state.introPopup = data
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
      // const url = `${state.domain}/v2/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}`
      const url = `http://sung-api.tranggle.com/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}&resCd=${data.mcResponse.resCd}&postCd=${data.mcResponse.postCd}&pkgCd=${data.mcResponse.pkgCd}&couponNo=${data.mcResponse.couponNo}`
      Vue
        .jsonp(url)
        .then(response => {
          console.log(response.response.message)
          // this.dispatch('openPopupGift', {})
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    스탬프 투어의 스탬프 또는 기프티콘 변경시 회원정보 업데이트 하는 API
    */
    loadMingleVersionChk ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/mingleVersionCheck.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    스탬프 획득 후 저장 되는 쿠키 값에 있는 서비스 코드 값들을 다시 한번 포인트 합산 요청 하는 API
    */
    loadPointSumApi ({ state, commit }) {
      const url = `${state.domain}/v2/mingle/stamptour/userPointUpdate.jsonp?token=${state.token}&app_data=${state.mingleCodeArr}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            commit('setCompleteSum', response.response)
          }
        })
    },
    loadStampUserApply ({ state, commit }, data, date) {
      const url = `${state.domain}/v2/mingle/stamptour/stampTourUserApply.jsonp?token=${state.token}&app_data=${state.mingleCode}|${data.mingle_badge_id}|${date}`
      Vue
        .jsonp(url)
        .then(response => {
        })
    },
    loadAllGiftData ({ state, commit }) {
      let appvertest = ''
      if (location.href.indexOf('mstamp') > -1) {
        appvertest = ''
      } else {
        appvertest = 'Y'
      }
      const url = `https://api.tranggle.com/v2/mingle/stamptour/stampTourMainGiftInfo.jsonp?token=${state.token}&appver_test=${appvertest}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            commit('setAllGiftData', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadRestartTour ({ state, commit }) {
      const url = `https://api.tranggle.com/v2/mingle/courses/resetPoint.jsonp?mingleCode=${state.mingleCode}&&gift=c9ba7GGcjyPvII+pbiuGiQ==&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          commit('setRestartData', response.response.code)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadMyStamp ({ state, commit }, data) {
      const orderArr = [
        {
          order: 'DATE',
          ordersort: 'DESC'
        },
        {
          order: 'DATE',
          ordersort: 'ASC'
        },
        {
          order: 'NAME',
          ordersort: 'DESC'
        },
        {
          order: 'NAME',
          ordersort: 'ASC'
        }
      ]
      const url = `https://api.tranggle.com/v2/mingle/stamptour/get_user_badge_item.jsonp?mingleCode=${state.mingleCode}&comple_check=true&order=${orderArr[data].order}&ordersort=${orderArr[data].ordersort}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            commit('setMyStamp', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    테마10 예시 팝업
    */
    openExamplePop ({ state }, data) {
      state.showExample = data
    },
    /*
    테마10 포토 팝업
    */
    openPhotoPop ({ state }, data) {
      state.showPhoto = data
    },
    /*
    테마10 영수증 팝업
    */
    openReceiptPop ({ state }, data) {
      state.themaPopReceipt = data
      if (Object.keys(data).length > 0) {
        state.themaPopReceipt.open = true
      } else {
        state.themaPopReceipt.open = false
      }
    },
    /*
    테마10 이벤트 참여 조회
    */
    loadThema10Status ({ state, commit }) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/getEventThema10.jsonp?token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            // console.log(response.response.content)
            commit('setThema10Status', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    테마10 이미지 업로드
    */
    uploadThema10Photo ({ state, commit }, data) {
      state.uploadLoading = true
      const fd = new FormData()
      fd.append('token', state.token)
      fd.append('ext', 'json')
      fd.append('upload_type', data.upload_type)
      fd.append('action_type', data.action_type)
      fd.append('event_no', data.event_no)
      fd.append('log_no', data.log_no)
      fd.append('imageFile', data.imageFile)
      fd.append('receipt_no', data.receipt_no)
      const url = 'https://storage.tranggle.com/mingle/authImageUpload'
      axios
        .post(url, fd)
        .then(response => {
          state.uploadLoading = false
          if (data.action_type !== 'DEL') {
            alert(response.data.response.message)
          }
          if (response.data.response.code === '00') {
            if (data.action_type === 'RECEIPT_CHANGE') {
              state.themaPopReceipt.open = false
            }
            state.showPhoto.open = false
            state.uploadSuccess = !state.uploadSuccess
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    테마10 알림 팝업
    */
    openThemaNoti ({ state }, data) {
      state.themaPop = data
      if (Object.keys(data).length > 0) {
        state.themaPop.open = true
      } else {
        state.themaPop.open = false
      }
    },
    /*
    테마10 개인정보 팝업
    */
    openThemaAgree ({ state }, data) {
      state.themaPopAgree = data
      if (Object.keys(data).length > 0) {
        state.themaPopAgree.open = true
      } else {
        state.themaPopAgree.open = false
      }
    },
    /*
    테마10 이벤트 참여 신청
    */
    ApplyThema10Event ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/setEventThema10.jsonp?badge_id=${data.badge_id}&gps_authno=${data.gps_authno}&photo_authno=${data.photo_authno}&receipt_authno=${data.receipt_authno}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            console.log(response.response)
            state.uploadSuccess = !state.uploadSuccess
            // commit('setThema10Status', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    테마10 개인정보동의 신청 조회
    */
    Thema10PsInfo ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/setThema10UserInfo.jsonp?phone=${data.phone}&action=${data.action}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (data.phone === '') {
            if (response.response.code === '03') {
              state.thema10Agree = 'Y'
            }
            if (response.response.code === '04') {
              state.thema10Agree = 'N'
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    테마10 유저 정보 조회
    */
    GetUserInfo ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/member/info.jsonp?member_id=${data.member_id}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            commit('setUserInfo', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadStampTourJoin ({ state, commit }) {
      const url = `https://api.tranggle.com/v2/mingle/courses/challengeToCouse.jsonp?mingleCode=${state.mingleCode}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
        })
    },
    /*
    초기 스탬프 정보 저장
    */
    GetStampTourList ({ state, commit }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/courses/get_stamptour_code.jsonp'
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            commit('setStampList', response.response.content.code_list)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    머니콘 선물 신청
    */
    ApplyMoneycon ({ state, commit, dispatch }, data) {
      let giftMessage = ''
      // 투어 선물 메세지
      state.stampCodeInfo.map((val) => {
        if (val.code === state.mingleCode) {
          giftMessage = val.giftMessage
        }
      })
      const cData = data
      const tel = data.pGift.member_mobile.replace(/-/gi, '')
      const giftTitle = '안녕하세요. 올댓스탬프입니다.'
      const mUrl = `http://218.234.20.7/MCon-PostWeb/realtime/postJSON?postCd=${data.pGift.gift_post_code}&cmd=100&prodCd1=${data.pGift.gift_code}&prodCnt1=1&senderMobileNo=&mobileNo=${tel}&name=${data.pGift.mingle_member_id}&title=${giftTitle}&message=${giftMessage}`
      axios({
        url: mUrl
      }).then((res) => {
        cData.mcResponse = {
          resCd: res.data.resCd,
          postCd: res.data.postCd,
          pkgCd: res.data.pkgCd,
          couponNo: res.data.couponNo
        }
        dispatch('loadGiftReceive', cData)
      })
    }
  },
  modules: {
  }
})
