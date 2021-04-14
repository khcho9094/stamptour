<template>
    <div class="impression list_wrap">
        <div class="fixed">
            <Head type='back' name='view_stamp' title='방문 소감' />
            <!-- 솔팅 셀렉트 -->
            <div class="box">
              <select class="mySelect" @change="changeList($event)">
                <option v-bind:value="'date_asc'">날짜순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
                <option v-bind:value="'date_desc'">날짜순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
                <option v-bind:value="'distance_asc'">거리순 ▲<img src="@/assets/images/arrow_u.png" alt="au"></option>
                <option v-bind:value="'distance_desc'">거리순 ▼<img src="@/assets/images/arrow_d.png" alt="ad"></option>
              </select>
              <div class="checkbox">
                <input type="checkbox" id="onlyMine" v-model="onlyMine">
                <label for="onlyMine">내가 쓴 글</label>
              </div>
            </div>
        </div>
        <div id="scrollWrap" class="impression_scroll" v-on:scroll="scrollBottom">
          <!-- v-for -->
          <article v-for="(data, idx) in impressionList" :key="idx" class="list">
            <h3>{{ data.mingle_comment_title }}</h3>
            <ul class="writer_info">
              <li>{{ data.member_nickname ? data.member_nickname : data.member_name }}</li>
              <li v-if="data.info_badge_name">{{data.info_badge_name}}</li>
              <li>{{ data.mingle_comment_reg_date }}</li>
            </ul>
            <p v-html="data.mingle_comment_content"></p>
            <!-- 이미지 스와이퍼 -->
            <swiper :options="swiperOption" class="swiper">
              <swiper-slide
                v-if="data.mingle_comment_image01"
                :style="{'background': `url(${data.mingle_comment_image01.replace(/.(?:png|jpg|jpeg|gif)$/i, '_180x$&')}) center / cover no-repeat`}"
                class="slide">
              </swiper-slide>
              <swiper-slide
                v-if="data.mingle_comment_image02"
                :style="{'background': `url(${data.mingle_comment_image02.replace(/.(?:png|jpg|jpeg|gif)$/i, '_180x$&')}) center / cover no-repeat`}"
                class="slide">
              </swiper-slide>
              <swiper-slide
                v-if="data.mingle_comment_image03"
                :style="{'background': `url(${data.mingle_comment_image03.replace(/.(?:png|jpg|jpeg|gif)$/i, '_180x$&')}) center / cover no-repeat`}"
                class="slide">
              </swiper-slide>
            </swiper>
            <button v-if="(data.mingle_comment_member_id === userInfo.user_mingle_member_id) && mingleCode !== 'ClJDKcCIq5mBFLdPmkYwPQ=='" class="del_list" type="button" @click="deleteList(data.mingle_comment_no)"></button>
          </article>
          <!-- //v-for -->
          <article v-if="impressionList.length === 0">
            <p class="no_list">작성한 글이 없습니다.</p>
          </article>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'ImpressionList',
  components: {
    Head
  },
  computed: {
    ...mapState(['mingleCode', 'impressionList', 'userInfo'])
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10
      },
      onlyMine: false,
      listData: {
        page: 1,
        order: 'date',
        order_sort: 'asc',
        me: ''
      },
      loading: false
    }
  },
  methods: {
    changeList (event) {
      this.listData.order = event.target.value.split('_')[0]
      this.listData.order_sort = event.target.value.split('_')[1]
      this.$store.state.impressionList = []
      this.listData.page = 1
      this.$store.dispatch('GetvisitComment', this.listData)
    },
    deleteList (idx) {
      this.$store.state.impressionList = []
      this.listData.page = 1
      this.$store.dispatch('setVisitCommentDel', idx)
    },
    scrollBottom () {
      var scrollContainer = document.getElementById('scrollWrap')
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight && !this.loading) {
        this.listData.page += 1
        this.$store.dispatch('GetvisitComment', this.listData)
        this.loading = true
      }
    }
  },
  watch: {
    onlyMine () {
      if (this.onlyMine) {
        this.listData.me = this.$store.state.token
      } else {
        this.listData.me = ''
      }
      this.$store.state.impressionList = []
      this.listData.page = 1
      this.$store.dispatch('GetvisitComment', this.listData)
    }
  },
  mounted () {
    document.getElementById('app').classList.add('impression_full_height')
    // 유저 정보
    this.$store.dispatch('loadTotalData')
    // 리스트 조회
    this.$store.state.impressionList = []
    this.listData.page = 1
    this.$store.dispatch('GetvisitComment', this.listData)
  },
  updated () {
    if (this.impressionList.length === 0) {
      this.loading = true
    } else {
      this.loading = false
    }
  }
}
</script>
