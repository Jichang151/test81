import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import client from '@/views/clientManage/client'
import service from '@/views/clientManage/service'
import department from '@/views/performance/department'
import goalSetting from '@/views/performance/goalSetting'
import group from '@/views/performance/group'
import personnel from '@/views/performance/personnel'
import valueAdjust from '@/views/performance/valueAdjust'
import valueRanking from '@/views/performance/valueRanking'
import myReport from '@/views/paramSetting/myReport'
import groupReport from '@/views/paramSetting/groupReport'
import componyReport from '@/views/paramSetting/componyReport'
Vue.use(Router)

export default new Router({
  components:{
    // NavBar,
    // personnel,
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/personnel',
      name:'personnel',
      component:personnel
    },
    {
      path:'/client',
      name:'client',
      component:client
    },
    {
      path:'/service',
      name:'service',
      component:service
    },
    {
      path:'/department',
      name:'department',
      component:department
    },
    {
      path:'/goalSetting',
      name:'goalSetting',
      component:goalSetting
    },{
      path:'/group',
      name:'group',
      component:group
    },
    {
      path:'/valueAdjust',
      name:'valueAdjust',
      component:valueAdjust
    },
    {
      path:'/valueRanking',
      name:'valueRanking',
      component:valueRanking
    },
    {
      path:'/myReport',
      name:'myReport',
      component:myReport
    },
    {
      path:'/groupReport',
      name:'groupReport',
      component:groupReport
    },
    {
      path:'/componyReport',
      name:'componyReport',
      component:componyReport
    }

  ]
})