import { useContext } from 'react';
import { AuthContext } from './Authprovider';
import Loading from '../components/loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
};

export default PrivateRoute;