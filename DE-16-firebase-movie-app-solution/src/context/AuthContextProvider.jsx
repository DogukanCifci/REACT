import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";
export const AuthContext = createContext();

//bunu kendi yaptigimda App.js de tanimlamistim.Ama bestpractice'de bunu burada yapip daha sonra bu provideri KULLANARAK APP.JS ICIN SRAMALLAYABILIRIM
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ setCurrentUser, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

//children kullaniyoruz.Anlami ben buirdaki tüm degerleri children olarak gönderebilirim artik
