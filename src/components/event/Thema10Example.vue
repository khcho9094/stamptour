<template>
  <div class="example_pop" v-if="showExample">
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
    <button @click="goCameraPop">확인</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Thema10Example',
  props: {
    type: Number,
    edit: String
  },
  components: {
  },
  data () {
    return {
      check: false,
      dataObj: [
        {
          title: '관광지 방문 인증은<br><span>테마여행 10선 주요 관광지에서</span><br><span>촬영한 사진</span>만 인정됩니다.',
          image: require('@/assets/images/event/example1_1.png'),
          warning: '* 인증샷은 마스크 착용 필수!'
        },
        {
          title: '<span>숙박 결제 영수증</span>(종이/모바일)과<br/>이용이 완료된 <span>숙박 예약확인서</span>를<br/>첨부해주세요',
          image: require('@/assets/images/event/example2_2.jpg'),
          warning: '(간이 영수증은 인정 안됨)'
        }
      ]
    }
  },
  computed: {
    ...mapState(['showExample'])
  },
  methods: {
    goCameraPop () {
      if (this.check) {
        if (this.type === 0) {
          this.$cookie.set('thema10Auth_0', 'Y', 9999)
        } else if (this.type === 1) {
          this.$cookie.set('thema10Auth_1', 'Y', 9999)
        }
      }
      this.$store.dispatch('openExamplePop', false)
      this.$store.dispatch('openPhotoPop', {
        open: true,
        type: this.type,
        edit: this.edit
      })
    }
  },
  mounted () {
  }
}
</script>
