export const ekle = (bilgi) => ({
  type: "EKLE",
  payload: bilgi,
});

export const temizle = () => ({
  type: "CLEAR",
});
