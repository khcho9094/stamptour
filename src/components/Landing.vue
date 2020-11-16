<template>
    <div id="app_dl" class="Allthatstamp">
        <div>
            <img src="@/assets/images/stamp_landing_01.png">
        </div>
        <div class="dl_btn">
            <a href="https://play.google.com/store/apps/details?id=com.beaglemap.unitedstampapp" class="googleplay"><img src="@/assets/images/fowi_btn_01.png" alt="앱다운로드 구글플레이"></a>
            <a href="https://itunes.apple.com/app/id1501448481" class="appstore"><img src="@/assets/images/fowi_btn_02.png" alt="앱다운로드 앱스토어"></a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Landing',
  data () {
    return {
      appStorePop: false
    }
  },
  methods: {
    blockAppStore () {
      this.appStorePop = true
    },
    closePopup () {
      this.appStorePop = false
    }
  }
}
</script>
<style>
@charset "utf-8";
/* CSS Document */
*{box-sizing:border-box;}
html, body, blockquote, caption, dd, div, dl, dt, fieldset, form, frame, h1, h2, h3, h4, h5, h6, hr,
iframe, input, legend, li, object, ol, p, pre, q, select, table, textarea, ul, tr, td{margin: 0;padding:0;}
html, body{width:100%; height:100%;}
a:link{text-decoration:none}
a:hover{text-decoration:underline}
a:visited{text-decoration:none}
a:active{text-decoration:none}
:focus {outline: none;}
input, select,textarea{font-family:'Dotum'}
img,table,fieldset,a,select,input{border:0}
article, aside, canvas, details, figcaption, figure, footer, header, hgroup, nav, menu, nav, section {display: block}
button{border:0; background:none; cursor:pointer; }
ul, ol{list-style:none;}
table{border-collapse: collapse;}

/*=====================================
00-1 POPUP
=====================================*/

.popup {
    position:fixed;
    z-index:99999;
    background-color:#00000088;
    height:100%;
    width:100%;
    box-sizing: border-box;
    font-size: 16px;
    padding: 0px 25px;
}

.pop {
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    background:#fff;
    border-radius: 10px;
    text-align: center;
    min-width:280px;
    overflow: hidden
}

.pop h1 {
    font-size: 16px;
    padding:25px 0px;
    margin:0px 15px;
    border-bottom:1px solid #cccccc;
}

.pop .text {
    padding:25px 0px;
    margin:0px 15px;
}

.pop_btn button {
    width:100%;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    background:#50b1a9;
    color:#ffffff;
}

/*=====================================
01. APP Download Landing Page
=====================================*/

#app_dl {
    background:#dcefee;
    height: 100%;
    position: relative;
    width:100%;
}

#app_dl .all {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#app_dl div {
    display: block;
    text-align: center;
    width:100%;
    max-width: 720px;
    margin: 0 auto;
}

#app_dl div img {
    width:100%;
    max-width:720px;
}

.dl_btn {
    background:#dcefee;
    padding-bottom:20px;
}

.dl_btn a {
    display: inline-block;
    width:45%;
    max-width:330px;
    padding:10px 0;
}

.dl_btn a:first-child {
    margin-right:5px;
}

.dl_btn a:last-child {
    margin-left:5px;
}

/*=====================================
01. APP Download Landing Page
    201112 All that stamp
=====================================*/

#app_dl.Allthatstamp{
    background:#f6f1e7;
    background-image : url(/assets/images/stamp_landing_bg.png);
    background-size:100%;
    background-repeat: repeat;
}

@media (min-width:720px) {
    #app_dl.Allthatstamp{
        background-size:720px;
    }
}

#app_dl.Allthatstamp .dl_btn {
    background:none;
}

</style>
