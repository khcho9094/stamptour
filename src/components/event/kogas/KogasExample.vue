<template>
  <div class="example_pop" v-if="showExample">
    <div class="photo_box">
      <div class="title" v-html="dataObj[type].title"></div>
      <div class="photo">
        <img :src="dataObj[type].image" alt="" :class="(type === 1) ? 'type1' : ''">
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
  name: 'KogasExample',
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
          title: '한국가스공사 유튜브<br/>구독 인증 사진만 인정됩니다.',
          image: require('@/assets/images/event/kogas/example_1.png'),
          warning: ''
        },
        {
          title: '영수증 인증은<br/>1일 1회만 가능합니다.',
          image: require('@/assets/images/event/kogas/example_3.png'),
          warning: ''
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
          this.$cookie.set('kogasAuth_0', 'Y', 9999)
        } else if (this.type === 1) {
          this.$cookie.set('kogasAuth_1', 'Y', 9999)
        }
      }
      this.$store.dispatch('openExamplePop', false)
      this.$store.dispatch('openPhotoPop', {
        open: true,
        type: this.type,
        edit: this.edit,
        msg: (this.edit === 'reEdit') ? 'receiptUpload' : ''
      })
    }
  },
  mounted () {
  }
}
</script>
