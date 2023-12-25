import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'goods',
    children:[
      {
        path:'goods',
        name:'goods',
        meta: {
          isShow: true,
          title:'抖音竞品迭代'
        },
        component: () => import(/* webpackChunkName: "goods" */ '../views/DouyinIteration.vue')
      },
      {
        path:'user',
        name:'user',
        meta: {
          isShow: true,
          title:'微信竞品迭代'
        },
        component: () => import(/* webpackChunkName: "user" */ '../views/WeixinIteration.vue')
      },
      {
        path:'role',
        name:'role',
        meta: {
          isShow: true,
          title:'竞品差异对比'
        },
        component: () => import(/* webpackChunkName: "role" */ '../views/DiffResult.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to,from,next)=>{
//   const token: string| null = localStorage.getItem('token');
//   if(!token && to.path !== '/login'){
//     next('/login')
//   }else{
//     next();
//   }
// })

export default router
