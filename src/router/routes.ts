import { createMemoryHistory, createRouter } from 'vue-router'
import Sign from '@/layouts/Sign.vue'
import Home from '@/layouts/Home.vue'
import Section from '@/layouts/Section.vue'
import FullCardDescription from '@/layouts/FullCardDescription.vue'
import Cart from '@/layouts/Cart.vue'
import Account from '@/layouts/Account.vue'
import Wishlist from '../components/Account/Wishlist.vue'
import Orders from '../components/Account/Orders.vue'
import ordersDetails from '../components/Account/OrdersDetails.vue'
import MyInfo from '../components/Account/MyInfo.vue'
import checkOut from '../components/Account/Checkout.vue'



const routes = [
  { path: '/', component: Sign, name: 'Sign' },
  { path: '/mencategory', name:'Men', component: Section },
  { path: '/womencategory', name:'Women',  component: Section },
  { path: '/shop', component: Home, name:'Shop' },
  { path: '/fullDescription',name:'card', component: FullCardDescription },
  { path: '/cart',name:'addToCart', component: Cart },

  { path: '/MyAccount',name:'MyAccount', component: Account, children:
    [
      { path: '/wishlist',name:'wishlist', component: Wishlist,},

      { path: '/orders',name:'orders', component: Orders},
      
      {  path:'/myInfo', name:'myInfo',component:MyInfo},
      {
        path:'/ordersDetails', name:'ordersDetails',component:ordersDetails
      },

      {path:'/checkOut',name:'Check Out', component:checkOut}
      
  ] 
},


]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router