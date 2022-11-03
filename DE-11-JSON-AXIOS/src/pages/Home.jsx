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
    console.log(gelenVeri);
    await axios.post(url, gelenVeri);
    getBilgiler();
  };

  postData();
  //! DELETE (delete)

  //! Update (PUT:tüm Update,PATCH :kısmen Update)

  return (
    <>
      <AddBilgi postData={postData} />
      <BilgiList bilgiler={bilgiler} />
    </>
  );
};

export default Home;
