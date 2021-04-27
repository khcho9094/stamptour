<template>
    <div class="total_search" :class="searchBool ? '': ''">
        <div class="fixed">
          <Head type='back' name='' title='스탬프 검색' />
          <SearchBar/>
          <SearchResultFilter v-if="searchBool"/>
        </div>
        <div v-if="!searchBool" class="search_word">
            <SearchWords/>
        </div>
        <div v-else class="search_a">
            <SearchResult/>
            <PopupMyStamp/>
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
import PopupMyStamp from '@/components/popup/PopupMyStamp.vue'
export default {
  name: 'Search',
  components: {
    Head,
    SearchBar,
    SearchWords,
    SearchResultFilter,
    SearchResult,
    PopupMyStamp
  },
  computed: {
    ...mapState(['searchWord', 'searchBool', 'stampOpen', 'searchInfo'])
  },
  data () {
    return {
    }
  },
  watch: {
    $route (to, from) {
      if (to.query.result) {
        this.$store.state.searchBool = true
        this.$store.state.searchWord = to.query.result
        this.$store.state.searchInfo.page = 1
        this.$store.state.searchResult = []
        this.$store.dispatch('getSearchWord', this.searchInfo)
      } else {
        this.$store.state.searchBool = false
        this.$store.state.searchWord = ''
      }
    }
  },
  mounted () {
    document.getElementById('app').classList.add('full_height')
  }
}
</script>
