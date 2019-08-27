import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/layout/home'
import contentMain from '@/components/layout/contentMain'
import index from '@/page/index'
import slidePath from './slidePath.js'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:slidePath
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
      // children: [
      //   {
      //     path: '/',
      //     name: 'index',
      //     component: index,
      //     meta: {
      //         title: '首页',
      //         icon: ' ',
      //     },
      //   },
      //     {
      //       path:'/user',
      //       name:'user',
      //       meta:{
      //         title:'用户信息',
      //         icon:''
      //       },
      //       component: content,
      //       children:[
      //         {
      //           path: 'userinfo',
      //           name:'userinfo',
      //           meta: {
      //               title: '个人信息',
      //               icon: ' ',
      //           },
      //           component: () => import('@/page/user/userinfo'), 
      //         },{
      //           path: 'changePwd',
      //           meta: {
      //               title: '修改密码',
      //               icon: ' ',                    
      //           },
      //           component: () => import('@/page/user/changePwd'), 
      //         },
      //       ]
      //     },
      //     {
      //       path: '/goodsManager',
      //       name: 'goodsManager',
      //       component:  content,
      //       meta: {
      //           title: '商品管理',
      //           icon: ' ',
      //       },
        
      //     children:[
      //       {
      //         path: 'goodsMessage',
      //         name:'goodsMessage',
      //         meta: {
      //             title: '商品信息',
      //             icon: ' ', 
      //         },
      //         component: () => import('@/page/goodsManager/goodsMessage'), 
      //       },{
      //         path: 'orderManager',
      //         meta: {
      //             title: '订单信息',
      //             icon: ' ',  
      //         },
      //         component: () => import('@/page/goodsManager/orderMessage'), 
      //       }
      //     ]
      //     },
      //   {
      //     path: '/statistical',
      //     name: 'statistical',
      //     component:  content,
      //     meta: {
      //         title: '统计报表',
      //         icon: ' ',
      //     },
      //     children: [
      //       {
      //         path: 'dataStatistical',
      //         name:'dataStatistical',
      //         meta: {
      //             title: '数据统计',
      //             icon: ' ',
                  
      //         },
      //         component: () => import('@/page/statistical/dataStatistical'), 
      //       },{
      //         path: 'scoreStatistical',
      //         meta: {
      //             title: '得分统计',
      //             icon: ' ',
                  
      //         },
      //         component: () => import('@/page/statistical/scoreStatistical'), 
      //       },
      //   ] 
      //   }
      //],
  ]  
})
