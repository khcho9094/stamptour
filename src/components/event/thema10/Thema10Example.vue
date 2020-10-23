<template>
  <div class="example_pop" v-if="showExample">
    <div class="photo_box">
      <div class="title" v-html="dataObj[type].title"></div>
      <div class="photo">
        <img :src="dataObj[type].image" alt="" :class="(type === 1) ? 'type1' : ''">
      </div>
      <div class="warning" v-html="dataObj[type].warning"></div>
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
          title: '대한민국 테마여행10선 여행지에서<br>마스크를 올바르게 착용한<br>사진을 첨부해주세요.',
          image: require('@/assets/images/event/example1_1.png'),
          warning: '* 마스크는 반드시 코와 입을 가려야 인정됩니다.<br>* 사진에 등장한 인물 모두가 마스크를 착용하고 있어야합니다.'
        },
        {
          title: '<span>숙박 결제 영수증</span>(종이/모바일)과<br/>이용이 완료된 <span>숙박 이용 내역서</span>를<br/>첨부해주세요',
          image: require('@/assets/images/event/example2_1.png?20201026'),
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
        edit: this.edit,
        msg: (this.edit === 'reEdit') ? 'receiptUpload' : ''
      })
      // if (this.type === 0) {
      //   this.$store.dispatch('openPhotoPop', {
      //     open: true,
      //     type: this.type,
      //     edit: this.edit,
      //     msg: (this.edit === 'reEdit') ? 'receiptUpload' : ''
      //   })
      // } else {
      //   this.$store.dispatch('openReceiptPop', {
      //     open: true
      //   })
      // }
    }
  },
  mounted () {
  }
}
</script>
