import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

//replace kullanmamin sebebi sayfa logine yönlendiriyor. Daha sonra geri dönmek istiyoruz. Ama bir daha details sayfasina gitmeye calisiyor. Cünkü bir önceki sayfa details sayfasi. currentUser false oldugu icin details Sayfasina gidemeyecek bu sebeple tekrar login sayfasina yönlendirilecek. Bu sebeple kullanici bir daha main sayfasina gidemez. Onun icin replace yazmaliyiz. Bu sekilde kullanici main sayfasina geri dönüs yapabilir.
const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>{currentUser ? <Outlet /> : <Navigate to="/login" replace />}</div>
  );
};
export default PrivateRouter;
