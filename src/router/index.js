import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import Main from '@/page/main'
import User from '@/page/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/', 
          name: 'Main',
          component: Main
        },{
          path: '/user',
          name: 'User',
          component: User
      }]
       
    }
  ]
})
