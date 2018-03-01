import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import splash from '@/components/splash'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: splash,
    },
    {
      path:'/home',
      name: 'home',
      component:home
    }

  ]
})
