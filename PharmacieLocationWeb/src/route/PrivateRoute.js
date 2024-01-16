import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
const PrivateRoute = ({ Component }) => {
 
const isAuthenticated  = sessionStorage.getItem("isAuthenticated")
 
return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;