import { Routes, Route, Navigate } from "react-router-dom"
import{LoginPage,ForgetPage,RegisterPage} from "../page"


export const AuthRoute = () => {
  return (
    
    <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path="forget" element={<ForgetPage/>} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
