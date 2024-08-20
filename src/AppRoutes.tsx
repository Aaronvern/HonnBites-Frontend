import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route 
                path="/" 
                element={
                    <Layout><HomePage/></Layout>
                    }>
                </Route>
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes> 
        </>
    )
}

export default AppRoutes