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
                1차 . 2020.06.13 ~ 2020.07.12<br/>
                2차 . 2020.07.13 ~ 2020.08.12<br/>
                3차 . 2020.08.13 ~ 2020.09.12<br/>
                4차 . 2020.09.13 ~ 2020.10.12<br/>
                5차 . 2020.10.13 ~ 2020.11.12<br/>
                6차 . 2020.11.13 ~ 2020.12.12<br/>
              </span>
            </p>
            <p class="ptxt">
              <strong>• 참여방법</strong><br/>
              <span class="event_insert">
                1. 테마여행 10선 여행지에서 올댓스탬프<br/>
                모바일 어플리케이션 다운로드 및 실행.<br/><br/>
                2. 이벤트 페이지의 <a href="javascript:;">인증현황</a> 클릭!<br/>
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
                매월 17일, 테마여행 10선 홈페이지 게시.<br/>
                명단 확인 : <a href="https://m.naver.com/">www.text.co.kr</a>
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
                보다 자세한 사항은 <a href="http://www.ktourbest10.kr/kr/intro.php">www.ktourbest10.kr</a><br/>
                테마여핸 10선 홈페이지를 참고해주세요.
              </span>
            </p>
            <p class="ptxt">
              <strong>• 오류 발생 시</strong><br/>
              <span class="event_insert">
                E-mail : <a href="mailto:trangglecs@tranggle.com">trangglecs@tranggle.com</a><br/>
                Phone  : 02-589-9933
              </span>
            </p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Thema10Intro',
  methods: {
    themaBanner () {
      const url = require('@/assets/images/event/allthat_event_title.png')
      return `url(${url})`
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
</style>
