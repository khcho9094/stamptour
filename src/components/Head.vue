<template>
  <header>
      <div class="logo" v-if="type == 'logo'" >
          <img src="@/assets/images/logo_1.png" alt="title_logo">
      </div>
      <div class="head_back" v-else>
          <img src="@/assets/images/back.png" alt="back">
          <span>{{title}}</span>
      </div>
      <button v-show="name === 'main'" class="r_type2 home">홈가기</button>
      <button v-bind:class="headBtn">{{btnType[name]}}</button>
  </header>
</template>
<script>
export default {
  name: 'haed',
  props: {
    type: String,
    name: String,
    title: String
  },
  data () {
    return {
      btnType: {
        intro: 'close',
        main: 'more',
        tour: 'share'
      }
    }
  },
  computed: {
    headBtn () {
      const arr = Object.keys(this.btnType)
      let btnClass = 'r_type1 '
      arr.map((val) => {
        if (this.name === val) {
          btnClass += this.btnType[val]
        }
      })
      return btnClass
    }
  }
}
</script>
