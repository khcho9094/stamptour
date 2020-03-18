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
                    <input type="text" id="txt_url" name="txt_url" :value="getParentUrl">
                    <span>주소복사</span>
                </div>
            </div>
            <button v-on:click="closeBtn()">닫기</button>
        </div>
    </div>
</template>
<script type="text/javascript" src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>
// Kakao.init('828d44097dad7a0d78c5606097547119');
import router from '@/router'
import { mapState } from 'vuex'
export default {
  name: 'PopupSns',
  data () {
    return {
        getParentUrl: parent.location.href + '?mingleCode=' + this.$store.state.mingleCode
        // os : function () {
        // }
    }
  },
  computed: {
  },
  methods: {
    closeBtn () {
      const openChk = this.$store.state.snsOpen
      this.$store.dispatch('loadSnsPopup', openChk)
    },
    smsShare () {
        var btm_url = parent.location.href
        var getServiceCode = this.$store.state.mingleCode
        if(btm_url.match("mingleCode") == null){
            btm_url = btm_url+"?mingleCode=" + getServiceCode
        }
        var devider = '?'
        var varUA = navigator.userAgent.toLowerCase()
        var os = null
        if (varUA.indexOf('android') > -1) {
            os = 'android'
        } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
            os = 'ios'
        } else {
            os = 'order'
        }
        if (os === 'ios') {
            devider = '&'
        }
        this.$router.push('sms:' + devider + 'body:' + btm_url)

    },
    facebookShare () {
      const url = parent.location.href
      const getServiceCode = this.$store.state.mingleCode

      const setUrl = url + '?mingleCode=' + getServiceCode

      const shareUrl = encodeURIComponent(setUrl)

      const popOption = 'width=500px,height=500px,location=no,menubar=no,status=no,scrollbars=no,resizable=no,titlebar=no,toolbar=no'

      const settingUrl = 'https://www.facebook.com/dialog/share?' +
      'app_id=287066011402705' +
      '&display=popup' +
      '&href=' + shareUrl
      window.open(settingUrl, 'Share to facebook', popOption)
    },
    kakaoShare () {
      const url = parent.location.href
      const getServiceCode = this.$store.state.mingleCode
      const title = '공유테스트'
      const shareImage = 'https://m.tranggle.com/html/images/mingle/001/shareImage.jpg'
      const desc = '공유 설명 입력칸 테스트'
      if (location.search !== '' || !url.match('mingleCode')) {
        const setUrl = url + '&mingleCode=' + getServiceCode
      } else if (location.search == "" && !url.match('mingleCode')) {
        const setUrl = url + '?mingleCode=' + getServiceCode
      }
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: desc,
          imageUrl: image_src,
          link: {
            mobileWebUrl: setUrl,
            webUrl: setUrl
          }
        },
        buttons: [
                {
                title: title,
                link:   {
                        mobileWebUrl: url,
                        webUrl: url
                    }
                }
            ]
        })
    },
    kakaoStoryShare () {
        const url = parent.location.href
        const getServiceCode = this.$store.state.mingleCode
        const title = '공유테스트'
        const shareImage = 'https://m.tranggle.com/html/images/mingle/001/shareImage.jpg'
        const desc = '공유 설명 입력칸 테스트'
        if (location.search != '' || !url.match('mingleCode')){
            const setUrl = url + '&mingleCode=' + getServiceCode
        }else if (location.search == "" && !url.match("mingleCode")){
            const setUrl = url + '?mingleCode=' + getServiceCode
        }
        Kakao.Story.open({
            url: url,
            text: title,
            urlInfo : {
                title: title,
                images: shareImage,
            }
        });
    },
    bandShare () {
        const filter = 'win16|win32|win64|mac|macintel'
        const url = parent.location.href
        const title = '공유테스트'
        const getServiceCode = this.$store.state.mingleCode
        if(location.search != "" && !url.match("mingleCode")){
            const shareUrl = url+"&mingleCode="+getServiceCode;
        }else if(location.search === '' && !url.match("mingleCode")){
            const shareUrl = url+"?mingleCode="+getServiceCode;
        }

        if ( navigator.platform ) {
            if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
                // mobile
                const settingUrl = "bandapp://create/post?text="+encodeURIComponent(title +"\n")+encodeURIComponent(url);
                location.href = settingUrl;

            } else {
                // pc
                const settingUrl = "http://www.band.us/plugin/share?body="+encodeURIComponent(title + "\n")+encodeURIComponent(url);
                location.href = settingUrl;
            }
        }
    }
  },
  computed: {
    ...mapState(['snsOpen'])
  },
  mounted () {
  }
}
</script>
