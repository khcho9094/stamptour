<template>
    <div v-if="this.zoomPop === true" class="pop_overay_2">
      <div>
        <v-zoomer
        ref="zoomer"
      style="width: 500px; height: 400px;"
      :max-scale="10"
      :zoomed.sync="zoomed">
          <img :src="this.zoomPopImg" style="object-fit: contain; width: 100%; height: 100%;"/>
        </v-zoomer>
        <button class="closeBtn" v-on:click="closeBtn()">닫기</button>
      </div>
    </div>
    <div class="pop_overay" v-else style="display:none">
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PopupImage',
  data () {
    return {
      zoomed: false
    }
  },
  computed: {
    ...mapState(['zoomPop', 'zoomPopImg'])
  },
  methods: {
    closeBtn () {
      this.$store.state.zoomPop = !this.$store.state.zoomPop
    },
    test () {
    }
  },
  mounted () {
  }
}
</script>
<style>
  .closeBtn {
    width:100%;
    height: 50px;
    background-color:#c86550;
    color:#fff;
    text-align:center;
  }
</style>
