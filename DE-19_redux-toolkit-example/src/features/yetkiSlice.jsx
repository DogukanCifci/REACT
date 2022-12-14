import { createSlice } from "@reduxjs/toolkit";

//state keywordu ile initialState'dekki degerleri aliriz.
//Action ise Login sayfasinda olusturKullanici' ya gönderilen veridir.

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    kullanici: {},
  },
  reducers: {
    olusturKullanici: (state, action) => {
      state.kullanici = action.payload;
      console.log(action);
      console.log(state.kullanici);
    },
    kullaniciSil: (state) => {
      state.kullanici = "";
    },
  },
});

export const { olusturKullanici, kullaniciSil } = yetkiSlice.actions;
// fonksiyonlarımızı actions dan üstteki gibi export ediyoruz, tüm sayfayı alttaki gibi reducer den export ediyoruz
export default yetkiSlice.reducer;
