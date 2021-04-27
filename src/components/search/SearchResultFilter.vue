<template>
    <div class="search_filter">
        <select v-model="sortingOrder" name="searchSortOrder" id="searchSortOrder" @change="sortingList()">
            <option value="">최신 순</option>
            <option value="DISTANCE">거리 순</option>
            <option value="POP">인기 순</option>
        </select>
        <select v-model="sortingStamp" name="searchSortStamp" id="searchSortStamp" @change="sortingList()">
            <option value="">전체 스탬프</option>
            <option value="BADGE">방문 스탬프</option>
            <option value="STAMP">전자 스탬프</option>
            <option value="TRACK">코스 스탬프</option>
        </select>
        <select v-model="sortingArea" name="searchSortArea" id="searchSortArea" @change="sortingList()">
            <option value="">전 지역</option>
            <option value="A">서울</option>
            <option value="B">경기/인천</option>
            <option value="C">강원도</option>
            <option value="D">충청/대전/세종</option>
            <option value="E">전라도/광주</option>
            <option value="F">경상도/대구</option>
            <option value="G">부산/울산</option>
        </select>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchResultFilter',
  data () {
    return {
      sortingOrder: '',
      sortingStamp: '',
      sortingArea: ''
    }
  },
  computed: {
    ...mapState(['searchInfo'])
  },
  mounted () {
    // console.log(this.sortingOrder)
    // console.log(this.sortingStamp)
    // console.log(this.sortingArea)
  },
  methods: {
    sortingList () {
      this.$store.state.searchResult = []
      this.$store.state.searchInfo.page = 1
      this.$store.state.searchInfo.order = this.sortingOrder
      this.$store.state.searchInfo.stamp = this.sortingStamp
      this.$store.state.searchInfo.area = this.sortingArea
      this.$store.dispatch('getSearchWord', this.searchInfo)
    }
  }
}
</script>
