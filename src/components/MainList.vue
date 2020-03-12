<template>
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
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'MainList'
}
</script>
