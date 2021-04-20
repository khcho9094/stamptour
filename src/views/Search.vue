<template>
    <div class="total_search">
        <Head type='back' name='' title='스탬프 검색' />
        <SearchBar/>
        <!-- 검색전 -->
        <div v-if="searchType == ''" class="search_b">
            <SearchRecent/>
            <SearchHot/>
            <SearchRecommend/>
        </div>
        <!-- 검색후 -->
        <div v-else class="search_a">
            <SearchResultFilter/>
            <SearchResult/>
        </div>
    </div>
</template>
<script>
import Head from '@/components/Head.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import SearchRecent from '@/components/search/SearchRecent.vue'
import SearchHot from '@/components/search/SearchHot.vue'
import SearchRecommend from '@/components/search/SearchRecommend.vue'
import SearchResultFilter from '@/components/search/SearchResultFilter.vue'
import SearchResult from '@/components/search/SearchResult.vue'
export default {
  name: 'Search',
  components: {
    Head,
    SearchBar,
    SearchRecent,
    SearchHot,
    SearchRecommend,
    SearchResultFilter,
    SearchResult
  },
  data () {
    return {
      searchType: ''
    }
  }
}
</script>
