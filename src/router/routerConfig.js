import Home from '../components/routerCase/home'
import Login from '../components/routerCase/login'
import Vip from '../components/routerCase/vip'
import Experience from '../components/routerCase/experience'
import Es from '../components/routerCase/es'
import Open from '../components/routerCase/open'
import NotFound from '../components/routerCase/notFound'
import News from '../components/routerCase/news'
import Web from '../components/routerCase/es/web'
import Bigdata from '../components/routerCase/es/bigdata'
import Architect from '../components/routerCase/es/architect'
import Product from '../components/routerCase/es/product'

const RouteConfig = [
  { path: '/login', component: Login, isAuth: false },
  // { path: '/', component: Home, isAuth: false },
  { path: '/home', component: Home, isAuth: true },
  { path: '/open', component: Open, isAuth: true },
  { path: '/experience', component: Experience, isAuth: true },
  { path: '/vip', component: Vip, isAuth: false },
  { path: '/es', component: Es, isAuth: false },
  { path: '/news', component: News, isAuth: false },
  { component: NotFound, isAuth: false }
]
const RouteTwoConfig = [
  { path: '/es/web', component: Web, isAuth: false },
  { path: '/es/bigdata', component: Bigdata, isAuth: false },
  { path: '/es/architect', component: Architect, isAuth: false },
  { path: '/es/product', component: Product, isAuth: false }
]
export default RouteConfig
export { RouteConfig, RouteTwoConfig }
