import { createRouter, createWebHistory } from 'vue-router'
import MojNalog from '../views/MojNalog.vue'
import SveUmetnineView from '../views/SveUmetnineView.vue'
import UmetninaDetalji from '../views/UmetninaDetalji.vue'
import ONama from '../views/ONama.vue'
import ONamaEN from '../views/ONamaEN.vue'
import Pocetna from '../views/Pocetna.vue'
import SveUmetnineRucniPregled from '../views/SveUmetnineRucniPregled.vue'
import Umetnici from '../views/Umetnici'

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/about',
    name: 'ONamaEn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ONamaEN.vue')
  },
  {
    path:'/mojNalog',
    name:'MojNalog',
    component: MojNalog,
    meta: {
      auth: true,
      title: 'Moj Nalog'
    }
  }, 
  {
    path:'/umetnici',
    name: 'Umetnici',
    component: Umetnici
  },
  {
    path: '/sveUmetnine/:tip',
    name: 'SveUmetnineView',
    component: SveUmetnineView
  },
  {
    path: '/sveUmetnineRucno/:tip/:stringR/:kriterijum',
    name: 'SveUmetnineRucniPregled',
    component: SveUmetnineRucniPregled
  },
  {
    path: '/umetninaDetalji/:id',
    name: 'UmetninaDetalji',
    component: UmetninaDetalji
  },
  {
    path: '/oNamaSR',
    name: 'ONama',
    component: ONama
  },
  {
    path: '/oNamaEN',
    name: 'ONamaEN',
    component: ONamaEN
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
