import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Hook/useAuth"
import PropTypes from 'prop-types';
import { InfinitySpin } from 'react-loader-spinner'


export const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(user){
        return children
    }

    if(loading) {
         return <div className="flex justify-center h-96 items-center"><InfinitySpin
         visible={true}
         width="200"
         color="#4fa94d"
         /></div>
    }
  return <Navigate to="/login" state={location?.pathname}></Navigate>
}

PrivateRoute.propTypes ={
    children: PropTypes.node
}