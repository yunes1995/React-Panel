import Home from "./Home/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/NewUsers/NewUsers"
import Products from "./Pages/Products/Products"

let rotes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList></UserList> },
    { path: "/newuser", element: <NewUser /> },
    { path: "/product", element: <Products /> },
]

export default rotes