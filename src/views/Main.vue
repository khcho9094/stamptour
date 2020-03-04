<template>
  <div class="main">
    <!-- 헤더 -->
    <Head type='logo' name='main' />
    <!-- <header>
        <div class="logo">
            <img src="@/assets/images/logo_1.png" alt="title_logo">
        </div>
        <button class="r_type2 home">홈가기</button>
        <button class="r_type1 more">더보기</button>
    </header> -->
    <!-- ../assets/logo.png -->
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

    <div class="gift_box">
        <div class="gift_price">
            87000원 상당의 선물이 가득!!
        </div><br/>
        <button class="view">선물 모두보기</button>
    </div>

    <div class="recom_stamp">
        <div class="title">
            <h1> <img src="@/assets/images/stamp_icon_1.png" alt="icon"> 완주를 위한 추천 스탬프</h1>
            <span>지도보기 <img src="@/assets/images/arrow_1.png" alt="arr"></span>
        </div>
        <ul class="next_stamp">
            <li>
                <img class="simg" src="@/assets/images/dummy_img/img_1.jpg" alt="img">
                <h2>해파랑 1길 노을따라 걷기</h2>
                <p>여기에서 28km</p>
                <div class="stamp_count">
                    <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                    <span class="stxt">스탬프</span>
                    <span class="snum">26</span>
                </div>
                <div class="ns_mark">다음 스탬프</div>
            </li>
            <li>
                <img class="simg" src="@/assets/images/dummy_img/img_2.jpg" alt="img">
                <h2>해파랑 3길 노을보며 걷기</h2>
                <p class="txt">여기에서 9km</p>
                <div class="stamp_count">
                    <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                    <span class="stxt">스탬프</span>
                    <span class="snum">42</span>
                </div>
            </li>
        </ul>
    </div>

    <div class="course_box">
        <div class="sort">
            <span class="on">인기순</span>
            <span>거리순</span>
            <div class="complete_hide">
                <input type="checkbox" id="complete_off"  name="complete_off"> <label for="complete_off">완료 코스 숨기기</label>
            </div>
        </div>
        <ul class="list">
            <li>
                <div class="box_lt">
                    <img class="p_icon" src="@/assets/images/couse_icon_1.png" alt="course_icon"><br/>
                    <span>3P</span>
                </div>
                <div class="box_rt">
                    <h2>부안상설시장 - 시장 초밥집</h2>
                    <p class="txt">여기에서 28km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">26</span>
                    </div>
                    <div class="position">위치보기</div>
                    <div class="progress_box">
                        <div class="p_back">
                            <div class="progress"></div>
                        </div>
                        <span>68%</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="box_lt">
                    <img class="p_icon" src="@/assets/images/couse_icon_2.png" alt="course_icon"><br/>
                    <span>3P</span>
                </div>
                <div class="box_rt">
                    <h2>부안상설시장 - 시장 초밥집</h2>
                    <p class="txt">여기에서 28km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">26</span>
                    </div>
                    <div class="position">위치보기</div>
                </div>
            </li>
            <li>
                <div class="box_lt">
                    <img class="p_icon" src="@/assets/images/couse_icon_3.png" alt="course_icon"><br/>
                    <span>3P</span>
                </div>
                <div class="box_rt">
                    <h2>부안상설시장 - 시장 초밥집</h2>
                    <p class="txt">여기에서 28km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">26</span>
                    </div>
                    <div class="position">위치보기</div>
                </div>
            </li>
            <li>
                <div class="box_lt">
                    <img class="c_icon" src="@/assets/images/complete.png" alt="course_icon"><br/>
                </div>
                <div class="box_rt">
                    <h2>부안상설시장 - 시장 초밥집</h2>
                    <p class="txt">여기에서 28km</p>
                    <div class="stamp_count">
                        <img class="stamp" src="@/assets/images/stamp_icon_2.png" alt="stamp">
                        <span class="stxt">스탬프</span>
                        <span class="snum">26</span>
                    </div>
                    <div class="position">위치보기</div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
export default {
  name: 'main',
  components: {
    Head
  }
}
</script>
