import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/'
import home from '@/pages/home/home/'
import useListComponent from '@/pages/home/useListComponent/'


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'useList',
      component: home,
      children:[
        {path:'useList',name:'useList',component:useListComponent}
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})

router.beforeEach((to,from, next) => {
  let token=localStorage.getItem('token')
  if(token){
    return next()
  }else{
    if(to.path=='/login'){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
