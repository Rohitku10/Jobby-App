import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Route } from "react-router-dom";


const ProtectedRoute = ({ children }) =>{
    const jwtToken = Cookies.get("jwt_token");
    
    if(jwtToken == undefined){
        return <Navigate to="/login" replace />
    }
    return children
}



export default ProtectedRoute;