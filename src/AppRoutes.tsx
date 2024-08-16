import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>}></Route>
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes> 
        </>
    )
}

export default AppRoutes