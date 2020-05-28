<template>
    <div class="pop_overay" v-show="visible">
        <div class="pop_cont">
            <ul class="photo_select">
              <li>사진 촬영</li>
              <li>앨범에서 사진 선택</li>
              <li>삭제</li>
            </ul>
            <button @click="closeBtn">취소</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Thema10PopupPhoto',
  props: {
    visible: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
    }
  },
  mounted () {
  }
}
</script>
