import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const kullanici =useSelector((state) => state.yetkiSlice.kullanici)
//!yetkiSlice sayfasından kullanici dolu gelirse yönlendirilen sayfaya git 
    return kullanici.email==="osman" ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
};

export default PrivateRouter;
