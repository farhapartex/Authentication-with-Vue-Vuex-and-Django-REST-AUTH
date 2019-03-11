import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashboardComponent from '@/components/DashboardComponent'
import LoginComponent from '@/components/LoginComponent'
import LogoutComponent from '@/components/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/login',
      name: "Login",
      component: LoginComponent,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutComponent
    }
  ]
});




