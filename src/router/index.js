import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) =>
{
  const user_auth = localStorage.getItem('user-token');
  const user_permissions = localStorage.getItem('user-permission');
  if (user_auth !== null && user_auth !== "" && user_permissions !== null && user_permissions !== "" )
  {
    next();
    return
  }
  next('/login')

};


const routes = [
  {
    path: '/login', name: 'login', component: Login
  },
  {
    path        : '/',
    name        : 'App',
    component   : Home,
    beforeEnter : ifAuthenticated,
    children:
    [
      //,
    ]

  },

];

export default new VueRouter({
  hash: '#',
  //mode: 'history',
  routes
})

