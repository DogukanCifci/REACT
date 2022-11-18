import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";
import haberSlice from "../features/haberSlice";

const store = configureStore({
  //! burada redux için gerekli verileri yazacağım file ların adını belirttim
  //Proje icin olusturdumuz sayfalarin adini bir keyword atayarak reducerda tanimladik.
  //Cocuklara göndeririken soldaki verdigimiz keywordleri kullanacagiz.
  //redux toolkit adinda bir dosyam var. Oradan bakarak devam ede ede gidebilirim.
  reducer: {
    yetkiSlice: yetkiSlice,
    haberSlice: haberSlice,
  },
});
export default store;
