import contentMain from '@/components/layout/contentMain'
import index from '@/page/index'

export default [
          {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '系统首页',
                icon: 'el-icon-s-home',
            },
            noDropdown:true,
          },
          {
            path:'/user',
            name:'user',
            meta:{
              title:'用户信息',
              icon:'el-icon-user-solid'
            },
            component: contentMain,
            children:[
              {
                path: 'userinfo',
                name:'userinfo',
                meta: {
                    title: '个人信息',
                    icon: 'el-icon-s-custom',
                },
                //component:userinfo
                component: () => import('@/page/user/userinfo'), 
              },{
                path: 'changePwd',
                name:'changePwd',
                meta: {
                    title: '修改密码',
                    icon: 'el-icon-unlock',                    
                },
                //component:changePwd
                component: () => import('@/page/user/changePwd'), 
              },
            ]
          },

          {
            path: '/goodsManager',
            name: 'goodsManager',
            component:  contentMain,
            meta: {
                title: '球员管理',
                icon: 'el-icon-menu',
            },
        
          children:[
            {
              path: 'goodsMessage',
              name:'goodsMessage',
              meta: {
                  title: '球员信息',
                  icon: 'el-icon-goods', 
              },
              //component:goodsMessage
              component: () => import('@/page/goodsManager/goodsMessage'), 
            },{
              path: 'orderMessage',
              name:'orderMessage',
              meta: {
                  title: '球员动态',
                  icon: 'el-icon-s-order',  
              },
              //component:orderMessage
              component: () => import('@/page/goodsManager/orderMessage'), 
            }
          ]
        },

        {
          path: '/statistical',
          name: 'statistical',
          component:  contentMain,
          meta: {
              title: '统计报表',
              icon: 'el-icon-pie-chart',
          },
          children: [
            {
              path: 'dataStatistical',
              name:'dataStatistical',
              meta: {
                  title: '数据统计',
                  icon: 'el-icon-s-data',
                  
              },
              //component:dataStatistical
              component: () => import('@/page/statistical/dataStatistical'), 
            },{
              path: 'scoreStatistical',
              name: 'scoreStatistical',
              meta: {
                  title: '得分统计',
                  icon: 'el-icon-data-analysis',
                  
              },
              //component:scoreStatistical
              component: () => import('@/page/statistical/scoreStatistical'), 
            },
        ] 
        }
    
    
]

