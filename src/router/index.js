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
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
