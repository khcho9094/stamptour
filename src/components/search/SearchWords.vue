<template>
    <div>
        <div class="search_card recent">
            <h2>최근 검색어</h2>
            <p v-if="recentSearch.length === 0" >최근 검색어가 없습니다.</p>
            <ul v-else>
                <li v-for="(data, idx) in recentSearch" :key="idx"><span @click="getSearchResult(data.user_mingle_sch_word)">{{data.user_mingle_sch_word}}</span> <button type="button" @click="delRecentWord(data.user_mingle_sch_seq)">x</button></li>
            </ul>
        </div>
        <div class="search_card hot">
            <h2>올댓스탬프 인기 검색어 <span>이번 주말 여긴 어떠세요?</span></h2>
            <ul>
                <li v-for="(data, idx) in popSearch" :key="idx" @click="getSearchResult(data.user_mingle_sch_word)">{{data.user_mingle_sch_word}}</li>
            </ul>
        </div>
        <div class="search_card recommend">
            <h2>올댓스탬프 추천 검색어 <span>이번 주말 여긴 어떠세요?</span></h2>
            <ul>
                <li v-for="(data, idx) in recomSearch" :key="idx" @click="getSearchResult(data.user_mingle_sch_word)">{{data.user_mingle_sch_word}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchHot',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['recentSearch', 'popSearch', 'recomSearch', 'searchInfo'])
  },
  methods: {
    delRecentWord (searchSeq) {
      this.$store.dispatch('setSearchWordDel', searchSeq)
    },
    getSearchResult (searchWord) {
      this.$store.state.searchBool = true
      this.$store.state.searchWord = searchWord
      this.$store.dispatch('getSearchWord', this.searchInfo)
      this.$router.push(`/search?result=${searchWord}`).catch(() => {})
    }
  },
  mounted () {
    this.$store.dispatch('getSearchStats')
  }
}
</script>
