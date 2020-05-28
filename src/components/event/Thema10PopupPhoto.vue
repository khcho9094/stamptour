<template>
    <div class="pop_overay" v-if="showPhoto.open">
        <div class="pop_cont">
            <ul class="photo_select">
              <li>
                <label for="camera_file">사진 촬영</label>
                <input type="file" id="camera_file" name="camera" accept="image/*" capture="camera" @change="previewFiles($event, '')">
              </li>
              <li>
                <label for="gallery_file">앨범에서 사진 선택</label>
                <input type="file" id="gallery_file" name="gallery" accept="image/*" @change="previewFiles($event, '')">
              </li>
              <li v-if="this.showPhoto.edit === 'reEdit'" @click="previewFiles($event, 'remove')">삭제</li>
            </ul>
            <button @click="closeBtn">취소</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Thema10PopupPhoto',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['showPhoto', 'thema10Status'])
  },
  methods: {
    closeBtn () {
      this.$store.dispatch('openPhotoPop', {
        open: false
      })
    },
    previewFiles (event, rm) {
      this.$store.dispatch('uploadThema10Photo', {
        imageFile: event.target.files ? event.target.files[0] : '',
        upload_type: (this.showPhoto.type === 0 ? 'PHOTO' : 'RECEIPT'),
        action_type: this.actionType(rm),
        event_no: this.thema10Status.log_event_no,
        log_no: (this.showPhoto.type === 0 ? this.thema10Status.photo_authno : this.thema10Status.receipt_authno)
      })
    },
    actionType (rm) {
      let type = ''
      if (this.showPhoto.edit === 'reEdit' && rm === '') {
        type = 'CHANGE'
      } else if (rm === 'remove') {
        type = 'DEL'
      } else {
        type = ''
      }
      return type
    }
  },
  mounted () {
  }
}
</script>
