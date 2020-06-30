<template>
    <div class="pop_overay" v-if="themaPopReceipt.open">
        <div class="pop_cont">
            <div class="receipt">
              <div class="step step1">
                <div class="tit">Step. 01</div>
                <div class="txt">
                  숙박 영수증의 승인번호 or 예약번호를<br/>입력해주세요.
                </div>
                <input type="number" v-model="receiptNo" placeholder="영수증 번호를 입력해주세요." >
              </div>
              <div class="step step2">
                <div class="tit">Step. 02</div>
                <div class="txt">
                  숙박 영수증 사진을<br/>첨부해 주세요.
                </div>
                <div class="rcp_box" @click="receiptUpload">
                  <div class="img"
                    :style="{ 'backgroundImage': receiptImg() }"
                    :class="(thema10Status.receipt_log_auth_type === null) ? 'bt1' : 'bt2'"
                    ></div>
                  <div class="edit_receipt" v-if="thema10Status.receipt_log_auth_type !== null" @click="receiptUploadEdit">
                    <img src="@/assets/images/event/icon_edit2.png" alt="ie2">
                    사진편집
                  </div>
                </div>
              </div>
            </div>
            <button class="type1" @click="closeBtn">닫기</button>
            <button class="type2" @click="receiptNoBtn">확인</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Thema10PopupReceipt',
  data () {
    return {
      receiptNo: ''
    }
  },
  computed: {
    ...mapState(['themaPopReceipt', 'thema10Status', 'receiptNumber'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openReceiptPop', {})
    },
    receiptImg () {
      let url = require('@/assets/images/event/add_normal.png')
      if (this.thema10Status.receipt_log_auth_type !== null) {
        url = this.thema10Status.receipt_log_filename
      }
      return `url(${url})`
    },
    receiptUpload () {
      if (this.thema10Status.receipt_log_auth_type === null) {
        this.$store.dispatch('openPhotoPop', {
          open: true,
          type: 1,
          edit: 'Edit',
          msg: ''
        })
      }
    },
    receiptUploadEdit () {
      this.$store.dispatch('openPhotoPop', {
        open: true,
        type: 1,
        edit: 'reEdit',
        msg: 'receiptUpload'
      })
    },
    receiptNoBtn () {
      if (this.receiptNo === '') {
        alert('숙박 승인번호 or 예약번호를 입력해주세요.')
      } else if (this.thema10Status.receipt_log_filename === '' || this.thema10Status.receipt_log_filename === null) {
        alert('숙박 영수증 사진을 첨부해 주세요.')
      } else {
        this.$store.dispatch('uploadThema10Photo', {
          imageFile: '',
          upload_type: 'RECEIPT',
          action_type: 'RECEIPT_CHANGE',
          event_no: this.thema10Status.log_event_no,
          log_no: this.thema10Status.receipt_authno,
          receipt_no: this.receiptNo
        })
      }
    }
  },
  watch: {
    themaPopReceipt () {
      this.receiptNo = this.receiptNumber
    },
    receiptNumber () {
      if (this.receiptNumber === null) {
        this.receiptNo = ''
      }
    }
  },
  mounted () {
  }
}
</script>
