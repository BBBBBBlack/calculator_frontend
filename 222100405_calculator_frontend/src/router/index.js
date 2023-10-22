import Vue from 'vue'
import Router from 'vue-router'
import Rate from '@/Rate.vue'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App // 设置一个默认组件，用于显示"123"内容
    // },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    }
  ]
})
