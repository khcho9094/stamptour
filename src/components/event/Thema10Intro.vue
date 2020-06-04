<template>
  <div class="tour_sub_wrap">
    <div
      :style="{ 'background-image': themaBanner() }"
      class="event_intro_banner">
    </div>
    <div class="notice_box">
        <div class="notice">Notice</div>
        <div class="txt">
            테마여행 10선 주요 관광지를방문하고<br/>
            숙박 영수증을 첨부하면 추첨을 통해 5만원<br/>
            국민관광 상품권을 6만 명에게 드립니다!
        </div>
    </div>
    <div class="service_info type2">
        <div class="title">행사</div>
        <div class="info">
            <p class="ptxt">
              <strong>• 이벤트 기간</strong><br/>
              <span class="event_insert">
                1차 . 2020.06.20 ~ 2020.07.19<br/>
                2차 . 2020.07.20 ~ 2020.08.19<br/>
                3차 . 2020.08.20 ~ 2020.09.19<br/>
                4차 . 2020.09.20 ~ 2020.10.19<br/>
                5차 . 2020.10.20 ~ 2020.11.19<br/>
                6차 . 2020.11.20 ~ 2020.12.19<br/>
                * 소진시, 이벤트 조기 종료<br/>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 참여방법</strong><br/>
              <span class="event_insert">
                1. 테마여행 10선 여행지에서 올댓스탬프 앱 실행<br/><br/>
                2. 이벤트 페이지의 <a href="#second-tab">인증현황</a> 클릭!<br/>
                  <img src="@/assets/images/arrow_right.png"> GPS 켜기실행<br/>
                  <img src="@/assets/images/arrow_right.png"> 테마여행 10선 스탬프 획득 or 주요 관광지 인증사진 첨부<br/>
                  <img src="@/assets/images/arrow_right.png"> 숙박 영수증 첨부<br/>
                  <img src="@/assets/images/arrow_right.png"> 개인정보 동의<br/>
                  <img src="@/assets/images/arrow_right.png"> 이벤트 참여 완료!
              </span>
            </p>
            <p class="ptxt">
              <strong>• 당첨자 발표</strong><br/>
              <span class="event_insert">
                매월 25일, 테마여행 10선 홈페이지 게시.<br/>
                명단 확인 : <a href="javascript:;" @click="exLink('https://korean.visitkorea.or.kr/main/event_main.do')">www.text.co.kr</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 경품 발송일</strong><br/>
              <span class="event_insert">
                당첨자 발표 후 7일 이내,<br/>
                참여 휴대전화 번호로 모바일 상품권 발송.
              </span>
            </p>
            <p class="ptxt">
              <strong>• 상세 안내</strong><br/>
              <span class="event_insert">
                보다 자세한 사항은 <a href="javascript:;" @click="exLink('http://www.ktourtop10.kr/kr/intro.php')">www.ktourtop10.kr</a><br/>
                테마여행 10선 홈페이지를 참고해주세요.
              </span>
            </p>
            <p class="ptxt">
              <strong>• 올댓스탬프 앱 오류 발생 시</strong><br/>
              <span class="event_insert">
                E-mail : <a href="mailto:trangglecs@tranggle.com">trangglecs@tranggle.com</a><br/>
                Phone  : 1877-1022
              </span>
            </p>
            <p class="ptxt">
              <strong>• 유의사항</strong><br/>
              <span class="event_insert">
                <span class="insert">
                  1. 테마여행 10선 주요 관광지 방문 인증 스탬프는 스마트폰의 GPS가 ‘항상’ 켜 있어야만 받을 수 있습니다.
                </span>
                <span class="insert">
                  2. GPS가 꺼져 있어서 방문 인증 스탬프를 받지 못한 경우, 사진 첨부로 대체할 수 있습니다.  단, 사진은 테마여행 10선 주요 관광지에서 촬영한 사진만 인정합니다. (테마여행10선 홈페이지 참조)
                </span>
                <span class="insert">
                  3. 이벤트 참여는 ①테마 여행 10선 관광지 방문 인증 스탬프(또는 테마 여행 10선  주요 관광지에서 촬영한 사진)와 ②숙박영수증 2가지가 모두 채워져야 합니다.
                </span>
                <span class="insert">
                  4. 이벤트 재 참여는 매일 자정(밤12시) 부터 가능합니다.(1일 1회 참여가능)
                </span>
                <span class="insert">
                  5. 월 1회 추첨이 진행되며, 당첨자는 익월 다른 권역  여행 시, 재 참여 가능합니다. 단, 같은 여행 인증자료로 재 당첨 불가. (영수증, 사진 중 하나라도 중복일 경우 당첨 무효)
                </span>
                <span class="insert">
                  6. 모바일로 지급받은 상품권 교환권은 하나은행 에서 국민관광 상품권으로 교환 후 사용할 수 있습니다.
                </span>
                <span class="insert">
                  7. 불법으로 취득하거나, 거짓으로 등록할 경우 법적 처벌을 받을 수 있습니다.
                </span>
              </span>
            </p>
        </div>
    </div>
  </div>
</template>
<script>
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'Thema10Intro',
  methods: {
    themaBanner () {
      const url = require('@/assets/images/event/allthat_event_title.png')
      return `url(${url})`
    },
    exLink (url) {
      appEvent.externalLinks(url)
    }
  }
}
</script>
<style scoped>
  .event_insert {
    padding-left: 8px;
    display: inline-block;
    margin-bottom: 12px;
  }
  .event_insert a {
    color:#3bb9fa;
    text-decoration: underline;
  }
  .event_insert img {
    width:8px;
    position: relative;
    top: -1px;
    margin-right: 1px;
  }
  .event_insert .insert {
    display: inline-block;
    text-indent: -12px;
    margin-left: 12px;
    margin-bottom: 2px;
  }
</style>
