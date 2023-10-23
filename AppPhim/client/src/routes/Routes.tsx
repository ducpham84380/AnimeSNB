import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/components/main/Main";
import Login from "src/components/login/Login";
import Admin from "src/components/admin/Admin";
import PrivateRouter from "./PrivateRoute";
interface MyRoutesProps {}
/**
 * Routes
 * @return {jsx}
 */
const MyRoutes: React.FC<MyRoutesProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/admin" element={<PrivateRouter component={Admin} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
