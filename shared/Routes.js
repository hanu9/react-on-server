import Home from "../myapp/components/home";
import About from "../myapp/components/about";
import NotFound from "./NotFound";
const routes = [
    // {path:"/",component:"",loadData: () => getSomeData(), routes: []}
    {path:"/",exact:true,component: Home},
    {path:"/about",exact:true,component: About},
    {component: NotFound}
];

export default routes;
