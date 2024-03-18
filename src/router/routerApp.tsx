import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/router/AuthRoute";







export const RouterApp = () => {
  return (


    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
    </Routes>



  )
}
