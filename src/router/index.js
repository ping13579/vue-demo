import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: (resolve) => { require(['@/views/first.vue'], resolve) }
    },
    {
      path: '/demoList',
      name: 'demoList',
      component: (resolve) => { require(['@/views/demo.vue'], resolve) }
    },
    {
      path: '/demoOne',
      name: 'demoOne',
      component: (resolve) => { require(['@/views/demoOne.vue'], resolve) }
    },
    {
      path: '/demoTwo',
      name: 'demoTwo',
      component: (resolve) => { require(['@/views/demoTwo.vue'], resolve) }
    }

  ]
})

