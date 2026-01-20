import Home from "@/pages/Home";
import VerifyEmail from "@/pages/VerifyEmail";
import { HashRouter, Route, Routes } from "react-router";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/verify-email" element={<VerifyEmail/>}/>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;