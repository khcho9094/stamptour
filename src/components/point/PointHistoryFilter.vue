<template>
    <div class="pt_history_filter">
        <div class="history_top">
            <select name="" id="">
                <option value="">전체</option>
                <option value="">사용 내역</option>
                <option value="">적립 내역</option>
                <option value="">회수 내역</option>
            </select>
            <p>* 최근 3개월의 포인트 내역만 표출됩니다.</p>
        </div>
        <div class="table table_head">
            <table>
                <colgroup>
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                </colgroup>
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
</template>
<script>
export default {
  name: 'PointHistoryFilter'
}
</script>
