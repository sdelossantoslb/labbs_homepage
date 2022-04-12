import AboutPage from "./pages/about"
import BlogPage from "./pages/blog"
import HomePage from "./pages/home"
import ServicesPage from "./pages/services"

type RouterPath = {
    url:string,
    component: React.FC,
    label?:string,
}

const routerList:Array<RouterPath> = [
    {
        url:'/',
        component:  HomePage
    },
    {
        url:'/Home',
        component:  HomePage
    }
    , {
        url:'/Nosotros',
        component: AboutPage
    },
    {
        url:'/Servicios',
        component: ServicesPage
    },
    {
        url:'/Blog',
        component: BlogPage
    }
]

export default routerList;