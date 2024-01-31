import { Navigate,useLocation , Outlet} from "react-router-dom";


const ProtectedRoute = () => {

    const location = useLocation ()
    console.log (location)
    const token = localStorage.getItem('accessToken')
        return token ? 
        (<Outlet/>): ( <Navigate to="/login" replace state={{ from: location }} />)
    }


export default ProtectedRoute;