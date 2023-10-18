import Home from "./Home/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/NewUsers/NewUsers"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product"


let rotes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList></UserList> },
    { path: "/newuser", element: <NewUser /> },
    { path: "/products", element: <Products /> },
    { path: "/product", element: <Product /> },
]

export default rotes