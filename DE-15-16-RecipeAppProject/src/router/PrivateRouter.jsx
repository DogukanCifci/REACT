import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return JSON.parse(localStorage.getItem("user")) === "Dogukan" &&
    JSON.parse(localStorage.getItem("userPassword")) === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

//Kullanici dogru isim ve sifre girdiyse Outlet componenti sayesinde istenilen sayfaya gönderir. Yanlislik varsa Navigate ile bulundugu yerde kal.Navigate icine istedigim bir sayfa yazabilirim. Ama suan ayni sayfada kalmasini yani ilk login sayfasinda kalmasini istedigim icin sadece / koyarim.

//Ama Outlet icin öyle degil. Acmali kapamali Router icine yazdigim path neyse oraya gider. Outlet icine bir path belirleyemem
export default PrivateRouter;
