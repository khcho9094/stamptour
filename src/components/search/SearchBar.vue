<template>
    <div class="search_bar">
        <input v-model="searchInput" type="text" placeholder="검색어를 입력해 주세요.">
        <button type="button" @click="getSearchInputResult(searchInput)">검색</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      searchInput: '',
      searchInfo: {
        page: 1,
        order: '', // 거리순:DISTANCE, 인기순:POP
        stamp: '', // 방문스탬프:BADGE, 전자스탬프:STAMP, 코스스탬프:TRACK
        view_count: 20
      }
    }
  },
  computed: {
    ...mapState(['searchWord'])
  },
  watch: {
    searchWord () {
      this.searchInput = this.$store.state.searchWord
    }
  },
  methods: {
    getSearchInputResult (searchWord) {
      if (searchWord === '' || searchWord === null) {
        this.$store.state.searchBool = false
        this.$store.state.searchWord = ''
        this.$router.push('/search')
      } else {
        this.$store.state.searchBool = true
        this.$store.state.searchWord = searchWord
        this.$store.dispatch('getSearchWord', this.searchInfo)
        this.$router.push(`/search?result=${searchWord}`)
      }
    }
  }
}
</script>
