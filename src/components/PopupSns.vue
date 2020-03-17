<template>
    <!-- 팝업 -->
   <div class="pop_overay" v-show="snsVisible">
        <div class="pop_cont">
            <div class="text_3">
                <ul class="sns">
                    <li>
                        <img src="@/assets/images/sns_1.png" alt="sms">
                        <span>SMS</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_2.png" alt="facebook">
                        <span>페이스북</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_3.png" alt="k_talk">
                        <span>카카오톡</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_4.png" alt="k_story">
                        <span>카카오스토리</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_5.png" alt="band">
                        <span>네이버 밴드</span>
                    </li>
                </ul>
                <div class="url_w">
                    <input type="text" id="txt_url" name="txt_url" value="">
                    <span>주소복사</span>
                </div>
            </div>
            <button v-on:click="closeBtn()">닫기</button>
        </div>
    </div>
</template>
<script>
import router from '@/router'
export default {
  name: 'PopupSns',
  props: {
    snsVisible: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      router.push('/')
    }
  },
  mounted () {
  }
}
</script>
