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
            대한민국 테마 10선이 자랑하는 주요관광지를<br/>여행하고 안전여행 참여 이벤트를 신청하세요.<br/>
            월 만오천명을 추첨하여 <span class="highlight">5만원 국민관광상품권</span>을 드립니다.
        </div>
    </div>
    <div class="service_info type2">
        <div class="title">행사</div>
        <div class="info">
            <p class="ptxt">
              <strong>• 이벤트 기간</strong><br/>
              <span class="event_insert">
                1차 . 2020.07.01 ~ 2020.07.31<br/>
                2차 . 2020.08.01 ~ 2020.08.31<br/>
                3차 . 2020.09.01 ~ 2020.09.30<br/>
                4차 . 2020.10.01 ~ 2020.10.31<br/>
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
                매월 7일, 안전여행 참여이벤트 홈페이지 게시.<br/>
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
                  1. 테마여행 10선 주요 관광지 방문 인증 스탬프는 스마트폰의 GPS가 ‘항상’ 켜 있어야만 받을 수 있습니다.
                </span>
                <span class="insert">
                  2. GPS가 꺼져 있어서 방문 인증 스탬프를 받지 못한 경우, 관광지 사진 첨부로 대체할 수 있습니다.
                </span>
                <span class="insert">
                  3. 이벤트 참여는 ①테마 여행 10선 관광지 방문 인증 스탬프(또는 테마여행 10선 주요관광지에서 촬영한 사진)와 ②숙박영수증 2가지를 모두 업로드하여야 합니다.
                </span>
                <span class="insert">
                  4. 앱에서 응모는 1일 1회 가능하며, 재응모는 매일 자정(밤12시)부터 가능합니다.
                </span>
                <span class="insert">
                  5. 본 이벤트는 7월1일부터 10월 31일까지 월단위로 진행합니다.
                </span>
                <span class="insert">
                  6. 월별 15,000명 미달 시 잔여응모건수는 익월 추첨자수에 포함되어 추첨합니다. (매월 7일 이벤트 홈페이지에서 응모 및 당첨현황, 잔여현황 안내)
                </span>
                <span class="insert">
                  7. 테마여행10선권역 내 주요관광지를 배경으로 한 마스크 쓴 사진만 인정됩니다. (터미널, 기차/버스안, 카페안 등 관광지를 식별할 수 없거나, 마스크를 착용하지 않으면 불인정됩니다.)
                </span>
                <span class="insert">
                  8. 숙박영수증은 상호명, 승인번호 등이 게재된 결제 영수증이어야 합니다.
                </span>
                <span class="insert">
                  9. 온라인 숙박예약건의 경우, 이용일 이후 마이페이지 등에서 이용완료된 건을 첨부하여야 인정됩니다.
                </span>
                <span class="insert">
                  10. 당첨자는 별도의 통보 없이, 입력한 휴대전화번호로 국민관광상품권 교환권이 발송됩니다.
                </span>
                <span class="insert">
                  11. 매월 15,000명을 추첨하며, 15,000명 이하 시 유효건에 한해, 100% 추첨으로 진행됩니다. (1인, 1회 당첨)
                </span>
                <span class="insert">
                  12. 국민관광상품권 교환권은 하나은행 전 지점에서 지류 국민관광상품권으로 교환 후 사용 가능합니다.
                </span>
                <span class="insert">
                  13. 국민관광상품권 사용처는 자주묻는질문 및 코리아트래블즈(<a href="javascript:;" @click="exLink('http://www.koreatravels.com/')">www.koreatravels.com</a>)에서 확인하실 수 있습니다.
                </span>
                <span class="insert">
                  14. 타인의 사진 및 영수증을 위조/변조/도용은 불법이며, 관련법에 따라 처벌받을 수 있으며, 이에 따른 이벤트 응모건은 자동 취소 처리됩니다.
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
  .highlight {
    display: inline-block;
    padding:0 3px;
    background: #ffed00;
    line-height: 16px;
  }
</style>
