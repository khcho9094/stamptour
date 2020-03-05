<template>
  <div class="stamp_box">
      <div class="title">
          내가 찍은 스탬프
          <span class="count">
              <em>2</em>
              <img src="@/assets/images/dot.png" alt="dot">
              <em>30</em>
          </span>
      </div>
      <ul class="stamp_list">
          <li class="complete">
              <div class="box">
                  <img class="round" src="@/assets/images/complete.png" alt="">
              </div>
              <div class="line">line</div>
          </li>
          <li class="complete">
              <div class="box">
                  <img class="round" src="@/assets/images/complete.png" alt="">
              </div>
              <div class="line">line</div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <img class="gift" src="@/assets/images/dummy_img/gift_img_1.png" alt="">
              </div>
              <div class="line">line</div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <span>4</span>
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <span>5</span>
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <img class="gift" src="@/assets/images/dummy_img/gift_img_2.png" alt="">
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <span>7</span>
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <span>8</span>
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <span>9</span>
              </div>
          </li>
          <li>
              <div class="box">
                  <img class="round" src="@/assets/images/dot_round.png" alt="">
                  <img class="gift" src="@/assets/images/dummy_img/gift_img_3.png" alt="">
              </div>
          </li>
      </ul>
      <div class="paging">1 / 20</div>
  </div>
</template>
<script>
export default {
  name: 'MainStamp'
}
</script>
