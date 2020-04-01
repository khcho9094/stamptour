<template>
    <!-- 팝업 -->
   <div class="pop_overay" v-show="snsOpen">
        <div class="pop_cont">
            <div class="text_3">
                <ul class="sns">
                    <li>
                        <img src="@/assets/images/sns_1.png" alt="sms" v-on:click="smsShare()">
                        <span>SMS</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_2.png" alt="facebook" v-on:click="facebookShare()">
                        <span>페이스북</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_3.png" alt="k_talk" v-on:click="kakaoShare()">
                        <span>카카오톡</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_4.png" alt="k_story" v-on:click="kakaoStoryShare()">
                        <span>카카오스토리</span>
                    </li>
                    <li>
                        <img src="@/assets/images/sns_5.png" alt="band" v-on:click="bandShare()">
                        <span>네이버 밴드</span>
                    </li>
                </ul>
                <div class="url_w">
                    <input type="text" id="txt_url" name="txt_url" :value="parentUrl()">
                    <span v-on:click="clipBord()">주소복사</span>
                </div>
            </div>
            <button v-on:click="closeBtn()">닫기</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import * as appEvent from '@/assets/js/app_event.js'
export default {
  name: 'PopupSns',
  data () {
    return {
      getParentUrl: parent.location.href + '?mingleCode=' + this.$store.state.mingleCode,
      parentUrl () {
        var url = parent.location.href
        var setUrl = null
        var getServiceCode = this.$store.state.mingleCode
        if (location.search !== '' && !url.match('mingleCode')) {
          setUrl = url + '&mingleCode=' + getServiceCode
        } else if (location.search === '' && !url.match('mingleCode')) {
          setUrl = url + '?mingleCode=' + getServiceCode
        } else {
          setUrl = url
        }
        this.$store.state.tourShareUrl = setUrl
        return setUrl
      }
    }
  },
  computed: {
    ...mapState(['snsOpen'])
  },
  methods: {
    closeBtn () {
      const openChk = this.$store.state.snsOpen
      this.$store.dispatch('loadSnsPopup', openChk)
    },
    phoneChk () {
      var varUA = navigator.userAgent.toLowerCase()
      var os = null
      if (varUA.indexOf('android') > -1) {
        os = 'android'
      } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
        os = 'ios'
      } else {
        os = 'order'
      }
      return os
    },
    smsShare () {
      var btmUrl = parent.location.href
      var getServiceCode = this.$store.state.mingleCode
      if (btmUrl.match('mingleCode') == null) {
        btmUrl = btmUrl + '?mingleCode=' + getServiceCode
      }
      var devider = '?'
      var os = this.phoneChk()
      if (os === 'ios') {
        devider = '&'
      }
      location.href = 'sms:' + devider + 'body:' + btmUrl
    },
    facebookShare () {
      const url = parent.location.href
      const getServiceCode = this.$store.state.mingleCode

      var setUrl = null
      if (location.search !== '' && !url.match('mingleCode')) {
        setUrl = url + '&mingleCode=' + getServiceCode
      } else if (location.search === '' && !url.match('mingleCode')) {
        setUrl = url + '?mingleCode=' + getServiceCode
      } else {
        setUrl = url
      }

      const shareUrl = encodeURIComponent(setUrl)

      const popOption = 'width=500px,height=500px,location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no'

      const settingUrl = 'https://www.facebook.com/dialog/share?' +
      'app_id=287066011402705' +
      '&display=popup' +
      '&href=' + shareUrl
      if (this.$cookie.get('total_stamp_yn') === 'Y') {
        appEvent.externalLinks(settingUrl)
      } else {
        window.open(settingUrl, 'Share to facebook', popOption)
      }
    },
    kakaoShare () {
      var url = parent.location.href
      var getServiceCode = this.$store.state.mingleCode
      var title = '전국 스탬프 투어'
      var shareImage = `${location.origin}/sns_share_2.png`
      var setUrl = null
      var desc = '전국 스탬프 투어로 전국 명소를 다녀보세요'
      if (location.search !== '' && !url.match('mingleCode')) {
        setUrl = url + '&mingleCode=' + getServiceCode
      } else if (location.search === '' && !url.match('mingleCode')) {
        setUrl = url + '?mingleCode=' + getServiceCode
      } else {
        setUrl = url
      }
      // eslint-disable-next-line no-undef
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: desc,
          imageUrl: shareImage,
          link: {
            mobileWebUrl: setUrl,
            webUrl: setUrl
          }
        },
        buttons: [
          {
            title: title,
            link: {
              androidExecParams: this.openAppLink(url),
              webUrl: this.openAppLink(url)
            }
          }
        ]
      })
    },
    openAppLink (cUrl) {
      var varUA = navigator.userAgent.toLowerCase()
      var url = ''
      if (varUA.indexOf('android') > -1) {
        url = 'market://details?id=com.beaglemap.unitedstampapp'
      } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
        url = cUrl
      }
      return url
    },
    kakaoStoryShare () {
      var url = parent.location.href
      var getServiceCode = this.$store.state.mingleCode
      var title = '전국 스탬프 투어'
      var shareImage = `${location.origin}/sns_share_2.png`
      var setUrl = null
      if (location.search !== '' && !url.match('mingleCode')) {
        setUrl = url + '&mingleCode=' + getServiceCode
      } else if (location.search === '' && !url.match('mingleCode')) {
        setUrl = url + '?mingleCode=' + getServiceCode
      } else {
        setUrl = url
      }
      // eslint-disable-next-line no-undef
      Kakao.Story.open({
        url: setUrl,
        text: title,
        urlInfo: {
          title: title,
          images: [shareImage]
        }
      })
    },
    bandShare () {
      var filter = 'win16|win32|win64|mac|macintel'
      var url = parent.location.href
      var title = '전국 스탬프 투어'
      var getServiceCode = this.$store.state.mingleCode
      var shareUrl = null
      if (location.search !== '' && !url.match('mingleCode')) {
        shareUrl = url + '&mingleCode=' + getServiceCode
      } else if (location.search === '' && !url.match('mingleCode')) {
        shareUrl = url + '?mingleCode=' + getServiceCode
      } else {
        shareUrl = url
      }

      if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
          // mobile
          const settingUrl = 'bandapp://create/post?text=' + encodeURIComponent(title + '\n') + encodeURIComponent(shareUrl)
          location.href = settingUrl
        } else {
          // pc
          const settingUrl = 'http://www.band.us/plugin/share?body=' + encodeURIComponent(title + '\n') + encodeURIComponent(shareUrl)
          location.href = settingUrl
        }
      }
    },
    clipBord () {
      // eslint-disable-next-line no-unused-vars
      var el = document.getElementById('txt_url')
      el = (typeof el === 'string') ? document.querySelector(el) : el
      var os = this.phoneChk()
      if (os === 'ios') {
        // save current contentEditable/readOnly status
        var editable = el.contentEditable
        var readOnly = el.readOnly

        // convert to editable with readonly to stop iOS keyboard opening
        el.contentEditable = true
        el.readOnly = true

        // create a selectable range
        var range = document.createRange()
        range.selectNodeContents(el)

        // select the range
        var selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        el.setSelectionRange(0, 999999)

        // restore contentEditable/readOnly to original state
        el.contentEditable = editable
        el.readOnly = readOnly
      } else {
        el.select()
      }
      // execute copy command
      document.execCommand('copy')
      alert('클립보드에 복사 되었습니다.')
    }
  },
  mounted () {
  }
}
</script>
