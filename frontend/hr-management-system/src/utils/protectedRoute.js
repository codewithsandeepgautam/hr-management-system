import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = () => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;