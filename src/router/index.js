import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ComicView from "@/views/ComicView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
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
      path:'/home',
      name:'home',
      component:HomeView
    },{
    path:'/comic',
      name:'comic',
      component:ComicView
    }
  ],
})

export default router
