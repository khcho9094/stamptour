<template>
    <div class="point_history">
      <div class="fixed">
        <Head type='back' name='view_stamp' title='포인트 내역' />
        <div class="pt_history_filter">
            <div class="history_top">
                <select v-model="poinListType" id="poinListType">
                    <option value="">전체</option>
                    <option value="U">사용 내역</option>
                    <option value="G">적립 내역</option>
                    <option value="D">소멸 내역</option>
                </select>
                <p>* 최근 3개월의 포인트 내역만 표출됩니다.</p>
            </div>
            <div class="table table_head">
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>수단</th>
                            <th>포인트</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
      </div>
      <div class="pt_history_list">
          <div class="table table_body">
              <table>
                  <tbody v-if="totalPointLogList.length !== 0">
                      <tr v-for="(data, idx) in totalPointLogList" :key="idx">
                          <td>{{ data.log_date.split(' ')[0] }}</td>
                          <td>{{ setPointType(data.log_status) }}</td>
                          <td>{{ data.log_status === 'G' ? `+${data.log_count}`: `-${data.log_count}`}}P</td>
                          <td>{{ '정상' }}</td>
                      </tr>
                  </tbody>
                  <tbody v-else>
                      <tr>
                          <td>최근 3개월간 {{setPointType(poinListType)}} 내역이 없습니다.</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Head from '@/components/Head.vue'
export default {
  name: 'History',
  components: {
    Head
  },
  data () {
    return {
      historyData: {
        order_type: '',
        page: 1,
        view_count: 20
      },
      poinListType: ''
    }
  },
  watch: {
    poinListType () {
      this.historyData.page = 1
      this.historyData.order_type = this.poinListType
      this.$store.state.totalPointLogList = []
      this.getApi()
    }
  },
  computed: {
    ...mapState(['totalPointLogList', 'loadingMainList'])
  },
  created () {
    window.addEventListener('scroll', this.scrollBottom)
  },
  mounted () {
    document.getElementById('app').classList.add('full_height')
    this.getApi()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBottom)
    this.$store.state.totalPointLogList = []
  },
  methods: {
    setPointType (type) {
      if (type === 'U') {
        return '사용'
      } else if (type === 'G') {
        return '적립'
      } else if (type === 'D') {
        return '소멸'
      } else if (type === '') {
        return '전체'
      }
    },
    scrollBottom () {
      if (Math.ceil(window.scrollY + window.innerHeight) === document.body.scrollHeight) {
        this.$store.state.loadingMainList = true
        if (this.loadingMainList) {
          this.historyData.page++
          this.getApi()
        }
      }
    },
    getApi () {
      this.$store.dispatch('getTotalPointLogList', this.historyData)
    }
  }
}
</script>
