<template>
    <div class="pop_overay pop_point_lack">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <strong>포인트가 부족합니다.</strong>
                <p>스탬프를 획득하여 포인트를 모아보세요!</p>
            </div>
            <button @click="closeBtn">확인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PopupPointLack',
  methods: {
    closeBtn () {
      this.$store.state.totalLackPop = false
    }
  }
}
</script>
