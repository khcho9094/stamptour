<template>
  <div class="tour">
    <!-- 헤더 -->
    <Head type='back' name='tour' title='내가 찍은 스탬프' />
    <div class="mystamp_wrap">
      <div class="box">
        <select class="mySelect">
          <option>날짜순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
          <option>날짜순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
          <option>이름순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
          <option>이름순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
        </select>
        <span class="count">
          <em>2</em>
          <img src="@/assets/images/dot.png" alt="dot">
          <em>30</em>
        </span>
      </div>
      <ul>
        <li @click="stampClick">
          <div class="mystamp">
            <img src="@/assets/images/dummy_img/stamp.png" alt="mystamp">
          </div>
          <span>개암동 벚꽃축제벚꽃축제</span>
        </li>
        <li>
          <div class="mystamp">
            <img src="@/assets/images/dummy_img/stamp.png" alt="mystamp">
          </div>
          <span>개암동 벚꽃축제</span>
        </li>
        <li>
          <div class="mystamp">
            <img src="@/assets/images/dummy_img/stamp.png" alt="mystamp">
          </div>
          <span>개암동 벚꽃축제</span>
        </li>
      </ul>
    </div>
    <PopupSns />
    <PopupMyStamp />
  </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PopupSns from '@/components/popup/PopupSns.vue'
import PopupMyStamp from '@/components/popup/PopupMyStamp.vue'
export default {
  name: 'MyStamp',
  components: {
    Head,
    PopupSns,
    PopupMyStamp
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    stampClick () {
      const openChk = this.$store.state.stampOpen
      this.$store.dispatch('loadStampPopup', openChk)
    }
  }
}
</script>
