<template>
  <div class="example_pop" v-show="visible">
    <div class="photo_box">
      <div class="title" v-html="dataObj[type].title"></div>
      <div class="photo">
        <img :src="dataObj[type].image" alt="">
      </div>
      <div class="warning">{{dataObj[type].warning}}</div>
    </div>
    <div class="chkbox">
        <input type="checkbox" id="tour_off"  name="tour_off" checked="checked" v-model="check"><label for="tour_off">다시 보지 않기</label>
    </div>
    <button>확인</button>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'Thema10Example',
  props: {
    visible: Boolean,
    type: Number
  },
  components: {
  },
  data () {
    return {
      check: false,
      dataObj: [
        {
          title: '관광지 방문 인증은<br><span>테마여행 10선 주요 관광지에서</span><br><span>촬영한 사진</span>만 인정됩니다.',
          image: require('@/assets/images/event/example1.png'),
          warning: ''
        },
        {
          title: '숙박 영수증 인증은<br>이벤트 대상 숙소에서 발급받은<br><span>실물 종이 영수증</span>만 인정됩니다.',
          image: require('@/assets/images/event/example2.png'),
          warning: '(간이 영수증은 인정 안됨)'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    // tourStartButton () {
    //   const check = document.getElementById('tour_off')
    //   if (check.checked) {
    //     this.visible = !this.visible
    //     this.$cookie.set('setIntro', 'Y', 7)
    //     this.closeCount()
    //   } else {
    //     // 메인 이동
    //     this.$store.dispatch('setIntroPopup', false)
    //     localStorage.removeItem('setIntroPopup')
    //   }
    // },
    // closeCount () {
    //   const interval = setInterval(() => {
    //     this.count--
    //     if (this.count === 0) {
    //       clearInterval(interval)
    //       this.$store.dispatch('setIntroPopup', false)
    //       localStorage.removeItem('setIntroPopup')
    //     } else if (this.pageOut) {
    //       clearInterval(interval)
    //     }
    //   }, 1000)
    // }
  },
  mounted () {
    console.log(':::', this.type)
    // this.$store.dispatch('loadIntroImage')
  }
}
</script>
