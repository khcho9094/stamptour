<template>
  <div class="tour_sub_wrap">
    <div
      :style="{ 'background-image': themaBanner() }"
      class="event_intro_banner">
    </div>
    <div class="notice_box">
        <div class="notice">Notice</div>
        <div class="txt">
            <!-- 테마여행 10선 주요 관광지를방문하고<br/>
            숙박 영수증을 첨부하면 추첨을 통해 5만원<br/>
            국민관광 상품권을 6만 명에게 드립니다! -->
            테마여행10선 여행지에서 마스크를 올바르게<br/>
            착용한 사진과 숙박결제 영수증을 응모하시면,<br/>
            추첨을 통해 <span class="highlight">국민관광상품권 10만원권</span>을 드립니다.
        </div>
    </div>
    <div class="service_info type2">
        <div class="title">행사</div>
        <div class="info">
            <p class="ptxt">
              <strong>• 응모 서류</strong><br/>
              <span class="event_insert">
                10월26일 ~ <b>11월 23일까지의 여행 건</b> (7월1일 ~ 8월22일 여행 건도 응모 가능)<br/>
                1) 테마10선 지역 여행지에서 마스크 올바르게 착용한 사진 1매<br/>
                2) 10월26일 ~ <b>11월 23일</b> 기간 내 숙박결제 영수증 (또는 이용완료 확인서)
              </span>
            </p>
            <p class="ptxt">
              <strong>• 응모 날짜</strong><br/>
              <span class="event_insert">
                1회차 : 10월 26일 ~ 11월 15일 / 당첨발표 : 11월 19일 (종료)<br/>
                2회차 : 11월 16일 ~ 11월 30일 / 당첨발표 : 12월 4일<br/>
                3회차 : 12월 01일 ~ 12월 15일 / 당첨발표 : 12월 21일<br/>
                4회차 : 12월 16일 ~ 12월 31일 / 당첨발표 : 2021년 1월 7일<br/>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 참여방법</strong><br/>
              <span class="event_insert">
                1. 테마여행 10선 여행지에서 올댓스탬프 앱 실행<br/><br/>
                2. 이벤트 페이지의 <a href="#second-tab">이벤트 참여</a> 클릭!<br/>
                  <img src="@/assets/images/arrow_right.png"> GPS 켜기실행<br/>
                  <img src="@/assets/images/arrow_right.png"> 테마여행 10선 스탬프 획득 및 주요 관광지에서 마스크 쓴 인증사진 첨부<br/>
                  <img src="@/assets/images/arrow_right.png"> 숙박 영수증 첨부<br/>
                  <img src="@/assets/images/arrow_right.png"> 개인정보 동의<br/>
                  <img src="@/assets/images/arrow_right.png"> 이벤트 참여 완료!
              </span>
            </p>
            <p class="ptxt">
              <strong>• 당첨자 발표</strong><br/>
              <span class="event_insert">
                안전여행 참여이벤트 홈페이지 게시.<br/>
                당첨 확인 : <a href="javascript:;" @click="exLink('https://www.moneycon.co.kr/MCon-DataCollection/static/Client/view/index.html#/prize')">www.moneycon.co.kr</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 경품 발송일</strong><br/>
              <span class="event_insert">
                당첨자 발표 후 7일 이내,<br/>
                참여 휴대전화 번호로 국민 관광 상품권 모바일 교환권 발송.
              </span>
            </p>
            <p class="ptxt">
              <strong>• 상세 안내</strong><br/>
              <span class="event_insert">
                보다 자세한 사항은 <a href="javascript:;" @click="exLink('http://ktourtop10.kr/kr/event/info.php')">www.ktourtop10.kr</a><br/>
                테마여행 10선 홈페이지를 참고해주세요.
              </span>
            </p>
            <p class="ptxt">
              <strong>• 올댓스탬프 앱 오류 발생 시</strong><br/>
              <span class="event_insert">
                E-mail : <a href="mailto:trangglecs@tranggle.com">trangglecs@tranggle.com</a><br/>
                앱 오류 문의전화  : <a target="_parent" href="tel:02-589-9933">02)589-9933</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 이벤트 관련 문의</strong><br/>
              <span class="event_insert">
                <a target="_parent" href="tel:1877-1022">1877-1022</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 자주묻는질문 바로가기</strong><br/>
              <span class="event_insert">
                <a href="javascript:;" @click="exLink('http://ktourtop10.kr/kr/event/qna.php')">ktourtop10.kr/kr/event/qna</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 문의게시판 바로가기</strong><br/>
              <span class="event_insert">
                <a href="javascript:;" @click="exLink('http://ktourtop10.kr/kr/event/online.php')">ktourtop10.kr/kr/event/online</a>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 유의사항</strong><br/>
              <span class="event_insert">
                <span class="insert">
                  1. 이벤트 참여는 ①테마여행 10선 여행지 방문 인증 사진(마스크를 올바르게 착용한 인물사진)과 ②숙박영수증 2가지를 모두 업로드하여야 합니다.
                </span>
                <span class="insert">
                  2. 테마여행 10선 지역을 배경으로 올바르게 마스크를 쓴 사진만 응모가 인정됩니다. (영유아 포함, 사진에 있는 사람들 모두 마스크 착용 시에만 인정)
                </span>
                <span class="insert">
                  2-1. ①마스크를 쓰지 않거나 입만 가리는 등 올바르지 않은 마스크 착용, ②스카프나 옷으로 입과 코를 가린 사진은 응모가 인정되지 않습니다.
                </span>
                <span class="insert">
                  3. 지류형 숙박영수증은 상호명, 승인번호 등이 게재된 결제 영수증이어야하며, 간이영수증은 인정되지 않습니다.
                </span>
                <span class="insert">
                  4. 온라인 숙박예약건의 경우, 이용일 이후 마이페이지 등에서 이용완료된 건을 첨부하여야 인정됩니다.
                </span>
                <span class="insert">
                  5. 이벤트 참여는 2020년 10월 26일부터 <b style="color:#c86550;">11월 23일</b>까지의 숙박 및 여행건에 대해서 응모 가능합니다. *7월 1일부터 8월 22일까지의 숙박내역도 응모 가능 <b style="color:#c86550;">(11월 24일 사회적거리두기 격상에 따라 응모여행기간 변경됨)</b>
                </span>
                <span class="insert">
                  6. 당첨자는 당첨발표일에 입력한 휴대전화번호로 국민관광상품권 교환권이 발송됩니다.
                </span>
                <span class="insert">
                  7. 매 회차의 잔여 응모건수는 다음회차 추첨자수에 포함되어 추첨합니다. (이벤트 홈페이지에서 응모 및 당첨현황, 잔여현황 안내)
                </span>
                <span class="insert">
                  8. 국민관광상품권 교환권은 하나은행 전 지점에서 지류 국민관광상품권으로 교환 후 사용 가능합니다.
                </span>
                <span class="insert">
                  8-1. 국민관광상품권 교환 시 은행을 방문한 분의 신분증을 지참하여야하며, 교환권은 대리수령 가능합니다.
                </span>
                <span class="insert">
                  8-2. 국민관광상품권 사용처는 자주묻는질문 및 코리아트래블즈(www.koreatravels.com)에서 확인하실 수 있습니다.
                </span>
                <span class="insert">
                  9. 타인의 사진 및 영수증을 위조/변조/도용은 불법이며, 관련법에 따라 처벌받을 수 있으며, 이에 따른 이벤트 응모건은 자동 취소 처리됩니다.
                </span>
                <span class="insert">
                  10. 테마여행 10선 주요 관광지 방문 인증 스탬프는 스마트폰의 GPS가 ‘항상’ 켜 있어야만 받을 수 있습니다.
                </span>
                <span class="insert">
                  11. GPS가 꺼져 있어서 방문 인증 스탬프를 받지 못한 경우, 관광지 사진 첨부로 대체할 수 있습니다.
                </span>
              </span>
            </p>
            <p class="thema_subject">
              본 이벤트는 문화체육관광부와 한국관광개발연구원이 함께합니다.
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
      const url = require('@/assets/images/event/allthat_event_title_2.png')
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
  .highlight {
    display: inline-block;
    padding:0 3px;
    background: #ffed00;
    line-height: 16px;
  }
</style>
