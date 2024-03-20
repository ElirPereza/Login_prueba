import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/router/AuthRoute";
import { RouterBoard } from "../components/router/RouterBoard";






export const RouterApp = () => {
  const status:string = "authenticated"  //not autenticated



  return (


    <Routes>
      {(status === "authenticated")

        ?<Route path="/auth/*" element={<AuthRoute />} />
        :<Route path="/*" element={<RouterBoard/>}/>
      }
        <Route path="/*" element ={<Navigate to ="/auth/login"/>}/>
    </Routes>



  )
}
