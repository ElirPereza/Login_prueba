import { Route, Routes } from "react-router-dom"
import { BoardUser } from "../page/BoardUser"

Route
export const RouterBoard = () => {
    return (

        <Routes>
            
            <Route path="/*" element={<BoardUser/>} />
            
        </Routes>

    )
}
