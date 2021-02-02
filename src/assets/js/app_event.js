/* eslint-disable camelcase */
function chkUserAgent () {
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
}

/* eslint-disable camelcase */
// function getCookie (name) {
//   name += '='
//   var arr = decodeURIComponent(document.cookie).split(';')
//   for (var i = 0; i < arr.length; i++) {
//     var c = arr[i]
//     while (c.charAt(0) === ' ') c = c.substring(1)
//     if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
//   }
//   return ''
// }

/**
 * 전자 스탬프 획득 시 안내 이벤트
 */
// eslint-disable-next-line no-unused-vars
export function stampGetEvent () {
  var os = chkUserAgent()
  var url = null
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('stamp_get', '{}')
  } else if (os === 'ios') {
    url = '/tranggle_callback://stamp_get'
    window.location = url
  }
}

/**
 * 앱에서 링크 팝업 띄위기 위한 이벤트
 */
// eslint-disable-next-line no-unused-vars
export function externalLinks (url) {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('external_links', `{ 'url': '${url}' }`)
  } else if (os === 'ios') {
    window.location = 'tranggle://external_links?url=' + url
  } else {
    location.href = url
  }
}

/**
 * 좌표값 요청 이벤트
 */
// eslint-disable-next-line no-unused-vars
export function chkCoordinate () {
  // var totalStampYn = getCookie('total_stamp_yn')
  // if (totalStampYn === 'Y') {
  // }
  if (/Android/i.test(navigator.userAgent)) {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('chk_coordinate', '{}')
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location = 'tranggle://chk_coordinate'
  }
}

/**
 * 트랙 진행율 정보 요청 이벤트
 */
export function trackProgress () {
  // var totalStampYn = getCookie('total_stamp_yn')
  // if (totalStampYn === 'Y') {
  // }
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('get_track_progress', '{}')
  } else if (os === 'ios') {
    setTimeout(function () {
      window.location = 'tranggle://get_track_progress'
    }, 500)
  }
}

/**
 * 코리아 둘레길 아이디 전달 이벤트
 */
// eslint-disable-next-line no-unused-vars
function getDurunubi (id, eid) {
  // setCookie("d_id",id,"30");
  // setCookie("de_id",eid,"30");
  var getLoginId = "<?=$this->session->userdata('LOGIN_ID') ?>"
  var thisPage = location.href
  if (getLoginId === '' && thisPage !== 'main') {
  } else if (getLoginId !== '') {
    // setDurunubi(id, eid)
  }
}

/**
 * 테마10선 이벤트 소개페이지 이동
 */
// eslint-disable-next-line no-unused-vars
export function thema10Page () {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_thema10', '{ "url": "/event/thema10" }')
  } else if (os === 'ios') {
    window.location = 'tranggle://event_thema10?url=/event/thema10'
  }
}

/**
 * Kogas 이벤트 소개페이지 이동
 */
// eslint-disable-next-line no-unused-vars
export function kogasPage () {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_thema10', '{ "url": "/event/kogas" }')
  } else if (os === 'ios') {
    window.location = 'tranggle://event_thema10?url=/event/kogas'
  }
}

export function interiorLink (url) {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_thema10', `{ "url": ${url} }`)
  } else if (os === 'ios') {
    window.location = `tranggle://event_thema10?url=${url}`
  }
}

/**
 * 테마10선 미로그인 로그인페이지로 이동
 */
// eslint-disable-next-line no-unused-vars
export function thema10Login () {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_thema10_login', '{}')
  } else if (os === 'ios') {
    window.location = 'tranggle://event_thema10_login'
  }
}

/**
 * 테마10선 GPS 설정 이동
 */
// eslint-disable-next-line no-unused-vars
export function thema10GpsSetting () {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_gps_setting', '{}')
  } else if (os === 'ios') {
    window.location = 'tranggle://event_gps_setting'
  }
}

/**
 * 테마10선 GPS 온오프 여부
 */
// eslint-disable-next-line no-unused-vars
export function thema10GpsStatus () {
  var os = chkUserAgent()
  if (os === 'android') {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('event_gps_status', '{}')
  } else if (os === 'ios') {
    window.location = 'tranggle://event_gps_status'
  }
}
