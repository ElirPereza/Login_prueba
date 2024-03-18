
import { Link } from "react-router-dom"
import { RouterApp } from "./router/routerApp"



export const App = () => {
  return (

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
          <li>
            <Link to="/auth/forget">Forget Password</Link>
          </li>
        </ul>
      </nav>
      
      <RouterApp />
    </div>

  )
}
