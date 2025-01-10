import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ComicView from "@/views/ComicView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      component:()=>import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/default/AboutView.vue'),
    },
    {
      path:'/comic',
      name:'comic',
      component:()=>import('../views/ComicView.vue')
    },
    {
      path:'/game',
      name:'game',
      component:()=>import('../views/GameView.vue')
    },
    {
      path:'/yellowGame',
      name:'yellowGame',
      component:()=>import('../views/YellowGame.vue')
    },
    {
      path:'/website',
      name:'website',
      component:()=>import('../views/WebsiteView.vue')
    },
    {
      path:'/vote',
      name:'vote',
      component: ()=>import('../views/VoteView.vue')
    }
  ],
})

export default router
