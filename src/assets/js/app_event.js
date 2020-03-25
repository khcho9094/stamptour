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
  if (/Android/i.test(navigator.userAgent)) {
    // eslint-disable-next-line no-undef
    tranggle3.tranggle_callback('chk_coordinate', '{}')
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location = 'tranggle_callback://chk_coordinate'
  } else {
    return false
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
