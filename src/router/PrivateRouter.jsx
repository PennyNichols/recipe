import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter=({isAuth}) => {

    if (!isAuth){
        alert('You must be logged in to view that page')
    }

    return( isAuth ? <Outlet/> : <Navigate to='/login'/>)
}

export default PrivateRouter