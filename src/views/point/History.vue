<template>
    <div class="point_history">
      <div class="fixed">
        <Head type='back' name='view_stamp' title='포인트 내역' />
        <PointHistoryFilter/>
      </div>
      <PointHistoryList/>
    </div>
</template>
<script>
import Head from '@/components/Head.vue'
import PointHistoryFilter from '@/components/point/PointHistoryFilter.vue'
import PointHistoryList from '@/components/point/PointHistoryList.vue'
export default {
  name: 'History',
  components: {
    Head,
    PointHistoryFilter,
    PointHistoryList
  },
  mounted () {
    document.getElementById('app').classList.add('full_height')
  }
}
</script>
