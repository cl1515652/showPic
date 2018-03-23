import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Home from '@/page/Home'
import IndexList from '@/components/IndexList'
import UpLoadPic from '@/components/UpLoadPic'
import TagShow from '@/page/TagShow'



import Detail from '@/page/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home,
          children: [
            {
              path: '',
              redirect: '/home/indexlist'
            },
            {
              path: '/home/indexlist',
              name: 'indexlist',
              component: IndexList
            },
            {
              path: '/home/upLoadPic',
              name: 'upLoadPic',
              component: UpLoadPic
            },{
              path: '/home/pic/',
              name: 'Detail',
              component: Detail
            },{
              path: '/home/tagshow',
              name: 'TagShow',
              component: TagShow
            }

          ]
        }
      ]
    }
  ]
})
