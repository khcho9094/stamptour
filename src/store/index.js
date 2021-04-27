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
    // 0lDg6JT7iYoHXLAPV4p8wA== 한국가스공사
    domain: 'https://api.tranggle.com', // 공통 URL
    domainTest: 'https://stage-api.tranggle.com:4081', // 공통 URL Test
    domainKhy: 'http://khy-api.tranggle.com', // 강수석님 URL Test
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
      { name: '현충시설100', code: 'Nvn2hlG+v6mVAUJsmrbJ8w==', info: 'number', no: '23', msg: '스탬프도 찍고 국가보훈처 기념패도 받고!!' },
      { name: '충북나드리', code: '+0DVeHum2c+rBgEjLoPi6Q==', info: 'number', no: '24', giftMessage: '충북 나드리 스탬프투어 선물 도착! 이벤트에 참여해주셔서 감사합니다. 앞으로 운동할 땐 트랭글, 여행할 땐 올댓스탬프 잊지마세요~~ -충북 나드리 스탬프투어 드림-' },
      { name: '이응노 미술관', code: 'UQ3+JiYENuJBR+gw6zSYPA==', info: 'number', no: '25', msg: '미디어 파사드에서 완주자 보기', giftMessage: '[원주 구석구석 어디까지 가봤니?]' },
      { name: 'KOGAS와 즐기는 대구 스탬프투어', code: '0lDg6JT7iYoHXLAPV4p8wA==', info: 'number', no: '26', msg: '', giftMessage: '‘조심조심 착한소비 스탬프투어 with KOGAS 대구의 히어로가 되어도!’는 대구지역 경제 활성화를 위해 한국가스공사가 준비한 행사로, 지역 관광명소를 즐길 수 있는 스탬프투어와 구매 영수증 인증 이벤트를 진행하여 다양한 경품을 제공합니다. 여러분의 많은 관심과 참여 부탁드립니다.' },
      { name: '대구창조경제혁신센터 창업 캠퍼스 투어', code: '/oJtXiRvYqdKNzlb35o5NA==', info: 'number', no: '30', giftMessage: '대구광역시와 삼성전자가 협력하여 설립한 대구창조경제혁신센터로 캠퍼스 내부를 둘러보는 스탬프투어입니다.' },
      { name: '경기서부 7길 스탬프투어', code: 'ClJDKcCIq5mBFLdPmkYwPQ==', info: 'number', no: '31', giftMessage: '경기도 7개 시의 대표적인 둘레길들을 지나는 스탬프투어입니다.' },
      { name: '새로운 시작, 새로운 설렘, 봄 꽃 투어', code: 'j9SPKDZVAqJagE3rrMCgug==', info: 'number', no: '32', giftMessage: '봄 하면 떠오르는 것, 바로 봄꽃!' },
      { name: '대세충청 스탬프투어', code: 'l67rfc/aqMF2GpOTzN/5lA==', info: 'number', no: '33', giftMessage: '충청북도, 충청남도, 대전, 세종 4개 지역에 위치한 관광지 스탬프투어입니다.' }
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
    themaUserInfo: {},
    themaUserMobile: '',
    guestChk: '',
    loadingMainList: false,
    themaPopReceipt: { open: false },
    receiptNumber: '',
    uploadLoading: false,
    submitCheck: false,
    stampPoi: [],
    TourPoiData: [],
    KoGasPopup: true, // 코리아 가스
    chungbukPopup: true, // 충북 나드리
    hyunchungPopup: true, // 현충100
    koreaPopup: true, // 코리아둘레길 이벤트
    thema10Popup: true, // 테마10 공지 팝업
    popupList: [], // 팝업 관리자 리스트
    bannerList: [], // 배너 관리자 리스트
    profile: [], // 프로필
    badgeSearch: [], // 최근 조회 스탬프
    badgeStamp: [], // 최근 찍은 스탬프
    impressionOpen: false, // 방문소감팝업
    impressionList: [], // 방문소감조회리스트
    impressionGiftCode: '',
    impressionComplete: false, // 방문소감 완료
    openProfileStamp: false, // 프로필스탬프팝업
    recentSearch: [], // 최근검색어
    popSearch: [], // 인기검색어
    recomSearch: [], // 추천검색어
    searchWord: '', // 클릭검색어
    searchResult: [], // 검색결과
    searchBool: false,
    giftYN: false, // 메인 선물 배너 유무
    totalGiftPoint: '', // 통합포인트 리스트
    totalGiftList: [], // 통합포인트 리스트
    expectPoint: {} // 소멸 예정 포인트
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
      console.log(data)
      if (data.length) {
        state.giftYN = true
      }
      let sum = 0
      data.map((val) => {
        sum += parseInt(val.mingle_gift_price)
      })
      state.sumPrice = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      if (data.length) {
        state.memberInfo.address = data[0].member_address
        state.memberInfo.mobile = data[0].member_mobile
      }
    },
    setTotalData (state, data) {
      state.userInfo = data.view
    },
    setStampData (state, data) {
      state.stampCommon = data.COMMON
      state.stampIntro = data.INTRO
      state.stampImage = data.IMAGE
      state.stampMethod = data.METHOD
      state.stampPoi = data.POI
    },
    setMainData (state, data) {
      state.mainStampList = state.mainStampList.concat(data.stamplist_info)
      state.allStampCount = parseInt(data.stampget_info.mingle_badge_count)
      state.getStampCount = parseInt(data.stampget_info.badge_get_count)
      localStorage.stampCount = data.stampget_info.mingle_badge_count
      // 2021-04-05 대구창조경제혁신센터 처리
      if (state.mingleCode === '/oJtXiRvYqdKNzlb35o5NA==') {
        state.mainStampList.map((v, idx) => {
          if (v.info_badge_code === '677') {
            state.mainStampList.push(v)
            state.mainStampList.splice(idx, 1)
          }
        })
      }
    },
    setMainDataChange (state, data) {
      state.mainStampList = data.stamplist_info
      state.allStampCount = parseInt(data.stampget_info.mingle_badge_count)
      state.getStampCount = parseInt(data.stampget_info.badge_get_count)
      localStorage.stampCount = data.stampget_info.mingle_badge_count
      // 2021-04-05 대구창조경제혁신센터 처리
      if (state.mingleCode === '/oJtXiRvYqdKNzlb35o5NA==') {
        state.mainStampList.map((v, idx) => {
          if (v.info_badge_code === '677') {
            state.mainStampList.push(v)
            state.mainStampList.splice(idx, 1)
          }
        })
      }
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
      // 테스트 아이디 제외
      const filter = data.list.filter(list => (list.user_mingle_member_id !== 'trangglecs' && list.user_mingle_member_id !== 'tranggleqa' && list.user_mingle_member_id !== 'belldandy22' && list.user_mingle_member_id !== 'qqw112' && list.user_mingle_member_id !== 'whrjsgml222'))
      // 배열 합치기
      state.memberList = state.memberList.concat(filter)
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
        state.TourPoiData = data.poi
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
      state.TourPoiData = data.poi
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
    },
    setPopupList (state, data) {
      state.popupList = data
      state.popupList.map((val) => {
        val.pop_check = false
      })
    },
    setBannerList (state, data) {
      state.bannerList = data
    },
    setProfile (state, data) {
      state.profile = data
      state.badgeSearch = data.badge_search
      state.badgeStamp = data.badge_stamp
    },
    setImpressionList (state, data) {
      state.impressionList = state.impressionList.concat(data)
      // state.impressionList = data
    },
    setSearchList (state, data) {
      state.recentSearch = data.recent
      state.popSearch = data.pop
      state.recomSearch = data.recom
    },
    setSearchResult (state, data) {
      state.searchResult = state.searchResult.concat(data)
    },
    setTotalGiftList (state, data) {
      state.totalGiftPoint = data.total_point
      let arrNo = 0
      const array = Array.from(Array(Math.ceil(data.total_gift_list.length / 9)), () => [])
      data.total_gift_list.map((val, idx) => {
        array[arrNo].push(val)
        if ((idx + 1) % 9 === 0 && idx > 0) {
          arrNo++
        }
      })
      state.totalGiftList = array
    },
    setExpectPoint (state, data) {
      state.expectPoint = data.ded_data
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
      const url = `${state.domain}/v2/mingle/stamptour/stampTourMainGiftInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&appver_test=${appvertest}`
      // const url = `http://sung-api.tranggle.com/mingle/stamptour/stampTourMainGiftInfo.jsonp?mingleCode=${state.mingleCode}&token=${state.token}&appver_test=${appvertest}`
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
      let url = `${state.domain}/v2/mingle/stamptour/stampTourMainStampInfo.jsonp?token=${state.token}&mingleCode=${state.mingleCode}&contentTypeId=${data.mingle_badge_content_type}&contentId=${data.mingle_badge_content_id}&badge_id=${data.mingle_badge_id}`
      if (data.mingle_poi_no) {
        url += `&mingle_poi_no=${data.mingle_poi_no}`
      }
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
    loadMemberData ({ state, commit }, data) {
      state.loadingMainList = true
      const url = `${state.domain}/v2/mingle/courses/CourseStatusList.jsonp?search_order=POP&mingleCode=${state.mingleCode}==&status=${data.status}&view_count=20&page=${data.pageCount}&token=${state.token}`
      // const url = `http://khy-api.tranggle.com/mingle/courses/CourseStatusList.jsonp?search_order=POP&mingleCode=${state.mingleCode}==&status=${data.status}&view_count=20&page=${data.pageCount}&token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          // console.log('idx', data.status)
          state.loadingMainList = false
          commit('setMemberData', response.response.content)
          console.log(response.response.content)
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
      // console.log(data)
      const url = `${state.domain}/v2/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}&resCd=${data.mcResponse.resCd}&postCd=${data.mcResponse.postCd}&pkgCd=${data.mcResponse.pkgCd}&couponNo=${data.mcResponse.couponNo}`
      // const url = `${state.domain}/v2/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}`
      // const url = `http://sung-api.tranggle.com/mingle/stamptour/requestPresent.jsonp?area=${data.mInfo.address}&agree=Y&gift=${data.pGift.mingle_gift_seq}&mingleCode=${state.mingleCode}&token=${state.token}&resCd=${data.mcResponse.resCd}&postCd=${data.mcResponse.postCd}&pkgCd=${data.mcResponse.pkgCd}&couponNo=${data.mcResponse.couponNo}`
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
          } else {
            if (response.response.code === '00') {
              state.thema10Agree = 'Y'
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
    머니콘 신청 여부 체크
    */
    ApplyCheckMoneycon ({ state, dispatch }, data) {
      const fd = new FormData()
      fd.append('mingleCode', state.mingleCode)
      fd.append('token', state.token)
      fd.append('gift', data.pGift.mingle_gift_seq)
      const url = 'https://api.tranggle.com/v2/mingle/courses/user_gift_chk.json'
      axios
        .post(url, fd)
        .then(response => {
          console.log(response.data.response)
          if (response.data.response.code === '00') {
            // 기프티콘 신청
            dispatch('ApplyMoneycon', {
              pGift: data.pGift,
              mInfo: data.mInfo
            })
          } else if (response.data.response.code === '05') {
            // 발급된 기프티콘 있음
            alert('이미 발급된 기프티콘이 있습니다.')
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
      if (data.pGift.mingle_member_id.indexOf('@A') > -1) {
        data.pGift.mingle_member_id = data.pGift.mingle_member_id.substr(0, 10)
      }
      const giftCode = data.pGift.gift_code.split(',')
      const cData = data
      cData.mcResponse = {}
      const tel = data.pGift.member_mobile.replace(/-/gi, '')
      let count = 0
      let msg = ''
      // 상품 코드 2개 이상인 상품 처리
      giftCode.map((val, idx) => {
        const mUrl = `https://m.tranggle.com/mingle/login/stampTourMoneycon.json?postCd=${data.pGift.gift_post_code}&cmd=100&prodCd1=${val}&prodCnt1=1&senderMobileNo=&mobileNo=${tel}&name=${data.pGift.mingle_member_id}&mingleCode=${state.mingleCode}&idx=${idx}`
        axios({
          url: mUrl
        }).then((res) => {
          cData.mcResponse = {
            resCd: (!cData.mcResponse.resCd) ? res.data.resCd : cData.mcResponse.resCd.concat(',' + res.data.resCd),
            postCd: (!cData.mcResponse.postCd) ? res.data.postCd : cData.mcResponse.postCd.concat(',' + res.data.postCd),
            pkgCd: (!cData.mcResponse.pkgCd) ? res.data.pkgCd : cData.mcResponse.pkgCd.concat(',' + res.data.pkgCd),
            couponNo: (!cData.mcResponse.couponNo) ? res.data.couponNo : cData.mcResponse.couponNo.concat(',' + res.data.couponNo)
          }
          count++
          if (giftCode.length === count) {
            if (String(res.data.resCd) === '100') {
              msg = '모바일 기프티콘이 휴대폰<br>문자메시지로 발송되었습니다.<br>60일 이내에 가까운 가맹점에서<br>사용하시기 바랍니다.<br>감사합니다.'
            } else if (String(res.data.resCd) === '102') {
              msg = '선물 신청에 실패했습니다. 올댓스탬프에 문의해주세요.'
            } else {
              msg = '서버 오류로 선물 신청에 실패했습니다. 올댓스탬프에 문의해주세요.'
            }
            state.submitCheck = false
            dispatch('openNotiPopup', {
              tit1: msg,
              tit2: '',
              close: 'Y'
            })
            dispatch('loadGiftReceive', cData)
          }
        })
      })
    },
    // Kogas 이벤트
    /*
    Kogas 이벤트 참여 신청
    */
    ApplyKogasEvent ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/setEventKogas.jsonp?badge_id=${data.badge_id}&gps_authno=${data.gps_authno}&photo_authno=${data.photo_authno}&receipt_authno=${data.receipt_authno}&token=${state.token}`
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
    Kogas 이벤트 참여 조회
    */
    loadKogasStatus ({ state, commit }) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/getEventKogas.jsonp?token=${state.token}`
      Vue
        .jsonp(url)
        .then(response => {
          if (response.response.code === '00') {
            console.log(response.response.content)
            commit('setThema10Status', response.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    Kogas 이미지 업로드
    */
    uploadKogasPhoto ({ state, commit }, data) {
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
      const url = 'https://storage.tranggle.com/mingle/authImageUploadKogas'
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
    Kogas 개인정보동의 신청 조회
    */
    KogasPsInfo ({ state, commit }, data) {
      const url = `https://api.tranggle.com/v2/mingle/stamptour/setKogasUserInfo.jsonp?phone=${data.phone}&action=${data.action}&token=${state.token}`
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
          } else {
            if (response.response.code === '00') {
              state.thema10Agree = 'Y'
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    팝업 관리자 API
    */
    PopupBannerManager ({ state, commit }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/popup_banner_data.json'
      const fd = new FormData()
      fd.append('mingleCode', data)
      axios
        .post(url, fd)
        .then(response => {
          // console.log(response.data.response)
          if (response.data.response.code === '00') {
            commit('setPopupList', response.data.response.content.popup_data)
            commit('setBannerList', response.data.response.content.banner_data)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    프로필
    */
    GetProfile ({ state, commit }) {
      const url = 'https://stage-api.tranggle.com:4081/v2/mingle/stamptour/getProfile.json'
      const fd = new FormData()
      fd.append('token', state.token)
      axios
        .post(url, fd)
        .then(response => {
          console.log(response.data.response.content)
          commit('setProfile', response.data.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    proFileImageUpload ({ state, dispatch }, data) {
      const url = 'https://storage.tranggle.com/mingle/proFileImageUpload'
      const fd = new FormData()
      fd.append('token', state.token)
      fd.append('ext', 'json')
      fd.append('upload_type', 'PHOTO')
      fd.append('imageFile', data.imageFile)
      axios
        .post(url, fd)
        .then(response => {
          console.log(response)
          dispatch('GetProfile', state.token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    방문소감조회 API
    */
    GetvisitComment ({ state, commit }, data) {
      if (!data) {
        data = {
          page: 1,
          order: 'date',
          order_sort: 'asc',
          me: ''
        }
      }
      state.lon = localStorage.getItem('setLon') || 0
      state.lat = localStorage.getItem('setLat') || 0
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/getvisitComment.json'
      const fd = new FormData()
      fd.append('mingleCode', state.mingleCode)
      fd.append('token', state.token)
      fd.append('page', data.page)
      fd.append('view_count', 20)
      fd.append('order', data.order)
      fd.append('order_sort', data.order_sort)
      fd.append('me', data.me)
      fd.append('lat', state.lat)
      fd.append('lon', state.lon)
      axios
        .post(url, fd)
        .then(res => {
          console.log(res)
          commit('setImpressionList', res.data.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    방문소감등록 API
    */
    setVisitComment ({ state, dispatch }, data) {
      const url = 'https://storage.tranggle.com/mingle/setVisitComment'
      const fd = new FormData()
      fd.append('imageFile01', data.imageFile01)
      fd.append('imageFile02', data.imageFile02)
      fd.append('imageFile03', data.imageFile03)
      fd.append('token', state.token)
      fd.append('ext', 'json')
      fd.append('title', data.title)
      fd.append('comment', data.comment)
      fd.append('mingleCode', state.mingleCode)
      fd.append('badgeid', data.badgeid)
      fd.append('mingle_user_gift_no', data.mingle_user_gift_no)
      axios
        .post(url, fd)
        .then(res => {
          console.log(res)
          if (res.data.response.code === '00') {
            alert('정상적으로 등록되었습니다.')
            router.push('/gift?impression=y')
            state.impressionOpen = false
          } else {
            alert(res.data.response.message)
            state.impressionComplete = false
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    방문소감삭제 API
    */
    setVisitCommentDel ({ state, dispatch }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/setVisitCommentDel.json'
      const fd = new FormData()
      fd.append('mingleCode', state.mingleCode)
      fd.append('token', state.token)
      fd.append('mingle_comment_no', data)
      axios
        .post(url, fd)
        .then(res => {
          if (res.data.response.code === '00') {
            alert('삭제되었습니다.')
          } else {
            alert(res.data.response.message)
          }
          dispatch('GetvisitComment')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 최근/인기/추천 검색어 조회
    getSearchStats ({ state, commit }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/getSearchStats.json'
      const fd = new FormData()
      fd.append('token', state.token)
      axios
        .post(url, fd)
        .then(res => {
          commit('setSearchList', res.data.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 최근 검색어 삭제 API
    setSearchWordDel ({ state, dispatch }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/setSearchWordDel.json'
      const fd = new FormData()
      fd.append('token', state.token)
      fd.append('search_seq', data)
      axios
        .post(url, fd)
        .then(res => {
          dispatch('getSearchStats')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 검색어 조회
    getSearchWord ({ state, commit }, data) {
      if (!data) {
        data = {
          page: 1,
          order: '',
          stamp: '',
          area: '',
          view_count: 20
        }
      }
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/getSearchWord.json'
      const fd = new FormData()
      fd.append('token', state.token)
      fd.append('search', state.searchWord)
      fd.append('lat', state.lat)
      fd.append('lon', state.lon)
      fd.append('order', data.order)
      fd.append('stamp', data.stamp)
      fd.append('area', data.area)
      fd.append('page', data.page)
      fd.append('view_count', data.view_count)
      axios
        .post(url, fd)
        .then(res => {
          console.log(res.data.response.content)
          commit('setSearchResult', res.data.response.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /*
    내가 찍은 스탬프 별점 등록
    */
    setStarPoint ({ state, dispatch }, data) {
      console.log(data)
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/setStarPoint.json'
      const fd = new FormData()
      fd.append('mingleCode', state.mingleCode)
      fd.append('token', state.token)
      fd.append('badge_id', data.user_mingle_badge_id || data.mingle_badge_id || data.badge_id)
      fd.append('star_cnt', data.change_star)
      axios
        .post(url, fd)
        .then(res => {
          if (res.data.response.code === '00') {
            if (data.user_mingle_badge_id) {
              dispatch('loadMyStamp', '0')
            } else if (data.mingle_badge_id) {
              dispatch('GetProfile')
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 조회기록 저장 API (앱인지 웹인지 판단필요)
    setSearchTrack ({ state, dispatch }, data) {
      const url = 'https://api.tranggle.com/v2/mingle/stamptour/setSearchTrack.json'
      const fd = new FormData()
      fd.append('token', state.token)
      fd.append('search', data)
      axios
        .post(url, fd)
        .then(res => {
          console.log(res)
          if (res.data.response.code === '00') {
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    // 통합 포인트 몰 리스트 조회
    getTotalGiftList ({ state, commit }) {
      const url = 'https://stage-api.tranggle.com:4081/v2/mingle/stamptour/getTotalGiftList.json'
      const fd = new FormData()
      fd.append('token', state.token)
      axios
        .post(url, fd)
        .then(res => {
          if (res.data.response.code === '00') {
            commit('setTotalGiftList', res.data.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 소멸 예정 포인트 안내
    delExpectPoint ({ state, commit }) {
      const url = 'https://stage-api.tranggle.com:4081/v2/mingle/stamptour/delExpectPoint.json'
      const fd = new FormData()
      fd.append('token', state.token)
      axios
        .post(url, fd)
        .then(res => {
          if (res.data.response.code === '00') {
            commit('setExpectPoint', res.data.response.content)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
