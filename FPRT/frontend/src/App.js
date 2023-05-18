//import logo from './logo.svg';
import Categories from './components/Category.js';
import Login from './components/login';
import Signup from './components/signup';
import Link from "@mui/material/Link";
import Medicine from './components/medicine';
import Buyer from "./components/Buyer.js";
import Cart from './components/Cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/medicines",
    element: <Medicine />,
  },
  {
    path: "/buyers",
    element: <Buyer />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);


function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") && <div style={{display: "flex", justifyContent: "space-between", padding: "20px", height: 30, color: "#FFFFFF", backgroundColor: "black"}}>
        <div>
          <Link href="/categories" variant="body2">
            Categories List
          </Link>
          &nbsp;| &nbsp;
          <Link href="/medicines" variant="body2">
            Medicines List
          </Link>
        </div>
        <div style={{marginLeft: -150}}>
          Medicine E-Commerce
        </div>
        <button onClick={() => {
          localStorage.removeItem("type")
          localStorage.removeItem("token")
          window.location.href = "/"
        }}>Logout</button>  
      </div>}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
