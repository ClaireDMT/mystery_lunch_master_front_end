import Vue from 'vue'
import Router from 'vue-router'
import Home from '../templates/views/Home.vue'
import showGroups from '../templates/views/ShowGroups.vue'
import createGroups from '../templates/views/CreateGroups.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/showgroups',
      name: 'showGroups',
      component: showGroups
    },
    {
      path: '/creategroups',
      name: 'createGroups',
      component: createGroups
    },
  ]
})
