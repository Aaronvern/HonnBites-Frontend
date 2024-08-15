import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<span>HELLO HOME PAGE</span>}></Route>
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes> 
        </>
    )
}

export default AppRoutes