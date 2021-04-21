<template>
    <div class="total_search">
        <Head type='back' name='' title='스탬프 검색' />
        <SearchBar/>
        <!-- 검색전 -->
        <div v-if="!searchBool" class="search_b">
            <SearchWords/>
        </div>
        <!-- 검색후 -->
        <div v-else class="search_a">
            <SearchResultFilter/>
            <SearchResult/>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import SearchWords from '@/components/search/SearchWords.vue'
import SearchResultFilter from '@/components/search/SearchResultFilter.vue'
import SearchResult from '@/components/search/SearchResult.vue'
export default {
  name: 'Search',
  components: {
    Head,
    SearchBar,
    SearchWords,
    SearchResultFilter,
    SearchResult
  },
  computed: {
    ...mapState(['searchWord', 'searchBool'])
  },
  data () {
    return {
    }
  },
  watch: {
    $route (to, from) {
      if (to.query.result) {
        this.$store.state.searchBool = true
      } else {
        this.$store.state.searchBool = false
        this.$store.state.searchWord = ''
      }
    }
  },
  methods: {
    getSearchResult (searchWord) {
      if (searchWord === '' || searchWord === null) {
        this.$store.state.searchBool = false
        this.$store.state.searchWord = ''
      } else {
        this.$store.state.searchBool = true
        this.$store.state.searchWord = searchWord
        this.$store.dispatch('getSearchWord', this.searchInfo)
      }
    }
  }
}
</script>
