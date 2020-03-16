import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 메인
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    // 스탬프 상세 보기
    path: '/stamp',
    name: 'Stamp',
    component: () => import('../views/Stamp.vue')
  },
  {
    // 투어 시작
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/Intro.vue')
  },
  {
    // 선물 보기
    path: '/gift',
    name: 'Gift',
    component: () => import('../views/Gift.vue')
  },
  {
    // 관광 정보
    path: '/tour',
    name: 'Tour',
    component: () => import('../views/tour/Tour.vue')
  },
  {
    // 관광 정보
    path: '/tour',
    name: 'Tour',
    component: () => import('../views/tour/Tour.vue')
  },
  {
    // 관광 상세
    path: '/tour/detail',
    name: 'TourDetail',
    component: () => import('../views/tour/Detail.vue')
  },
  {
    // 관광 모두보기 리스트
    path: '/tour/list',
    name: 'TourList',
    component: () => import('../views/tour/List.vue')
  },
  {
    // 참가자 보기
    path: '/member',
    name: 'Member',
    component: () => import('../views/Member.vue')
  }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
