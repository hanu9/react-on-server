import Home from "../myapp/components/home";
import About from "../myapp/components/about";
import NotFound from "./NotFound";
const routes = [
    // {path:"/",component:"",loadData: () => getSomeData(), routes: []}
    {name: "home", path:"/", exact:true, component: Home},
    {name: "about", path:"/about", exact:true, component: About},
    {name: "404", component: NotFound}
];

export default routes;
