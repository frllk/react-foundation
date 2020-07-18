import Home from '../components/routerCase/home'
import Login from '../components/routerCase/login'
import Vip from '../components/routerCase/vip'
import Experience from '../components/routerCase/experience'
import Es from '../components/routerCase/es'
import Open from '../components/routerCase/open'
import NotFound from '../components/routerCase/notFound'
import News from '../components/routerCase/news'

const RouteConfig = [
  { path: '/login', component: Login, isAuth: false },
  // { path: '/', component: Home, isAuth: false },
  { path: '/home', component: Home, isAuth: false },
  { path: '/open', component: Open, isAuth: false },
  { path: '/experience', component: Experience, isAuth: false },
  { path: '/vip', component: Vip, isAuth: false },
  { path: '/es', component: Es, isAuth: false },
  { path: '/news', component: News, isAuth: false },
  { component: NotFound, isAuth: false }
]
export default RouteConfig
