import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ user, children }) => {

    const {data,isLoading,isError}=useAuth()


    if(isLoading){
        return (
            <div>
                <span className="block text-uppercase tracking-wide">...Loading</span>
            </div>
        )
    }


    if (isError) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute