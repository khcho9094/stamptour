<template>
    <div class="pop_overay">
        <div class="pop_cont">
            <img class="icon_img" src="@/assets/images/popup_icon.png" alt="icon">
            <div class="text_2">
                <div class="noti_txt">
                  <div>
                    올댓스탬프 서비스 이용이 제한된 계정입니다.<br/>
                    계속 사용을 위해서는 관리자의 승인이 필요합니다.<br/>
                    관리자 승인 요청 : trangglecs@tranggle.com
                  </div>
                </div>
            </div>
            <button @click="closeBtn">닫기</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PopupBlackList',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      this.$store.state.blackListPop = false
    }
  },
  mounted () {
  }
}
</script>
