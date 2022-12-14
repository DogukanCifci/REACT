import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //! GET (Read)

  const getBilgiler = async () => {
    const { data } = await axios.get(url);

    setBilgiler(data);
  };

  useEffect(() => {
    getBilgiler();
  }, []);
  console.log(bilgiler);
  //? Sadece Component mount oldugunda istek yapar

  //! POST (Create)
  const postData = async (gelenVeri) => {
    await axios.post(url, gelenVeri);
    getBilgiler();
  };

  //! DELETE (delete)
  const deleteData = async (id) => {
    console.log("a", id);
    await axios.delete(`${url}/${id}`);
    getBilgiler();
  };

  //! Update (PUT:tüm Update,PATCH :kısmen Update)

  const putData = async (güncellenenVeri) => {
    await axios.put(`${url}/${güncellenenVeri.id}`, güncellenenVeri);
    getBilgiler();
  };
  return (
    <>
      <AddBilgi postData={postData} />
      <BilgiList
        deleteData={deleteData}
        bilgiler={bilgiler}
        putData={putData}
      />
    </>
  );
};

export default Home;
