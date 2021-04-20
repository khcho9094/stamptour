<template>
    <div class="pop_overay pop_point_extinguish">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <strong>포인트 소멸 예정 안내</strong>
                <p>
                    <span>{{1000}}P</span>가 소멸될 예정입니다.<br/>
                    미사용 통합 포인트는 2년 경과 시<br/>
                    소멸됩니다.<br/>
                    <br/>
                    소멸 예정 일시<br/>
                    <span>{{21.04}}</span><br/>
                </p>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PopupPointExtinguish',
  methods: {
    closeBtn () {
      // 닫기닫기
    }
  }
}
</script>
