import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route 
                path="/" 
                element={
                    <Layout showHero><HomePage/></Layout>
                    }>
                </Route>
            <Route path="/auth-callback" element={<AuthCallbackPage/>} />
            <Route path="/user-profile" element={<Layout showHero={false}><UserProfilePage/></Layout>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes> 
        </>
    )
}

export default AppRoutes