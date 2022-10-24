import { useState, useEffect } from "react";
import axios from "axios";
const PeopleAxios = () => {
  const [insanlar, setInsanlar] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setInsanlar(response.data))
      .catch((error) => console.log(error));
  }, []);
  //setInsanlar icine response.data yazmamzin sebebi response olarak geleni console.log ile yazdirirsak icinde bir süreü gereksiz bilgiler de beraber geliyor. Bize lazim olan array ise data keyinin icinde. Onun icin icinden datayi cekip aldik.

  //catch i istege bagli olarak yaptim. Yapmayabilirdim. Catch'i istersem normal fetch'de de kullanabilirim.

  const postData = () => {
    /* ... adresine , den sonraki veriyi yolladik ve daha sonra da o veriyi set metoduyla degistirdik. Ama bir önceki array#a ekleyerek gitmek icin spread metdounu kullaniyrouz. Bir önceki listeyi temsil eden insanlar degiskenini ... ile acip , koyduktan sonra yeni ekledigimiz degeri ekliyoruz.   */
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "Sultan",
        phone: 12345678,
      })
      .then((res) => setInsanlar([...insanlar, res.data]));
  };
  // console.log(insanlar);

  return (
    <div className="container text-center mt-4">
      <button
        className="btn btn-success"
        onClick={postData}
        style={{ fontSize: "1rem" }}
      >
        Post Data
      </button>
      <div className="row">
        {insanlar &&
          insanlar.map((e) => {
            const { id, name, phone } = e;
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto"
                key={id}
              >
                <img
                  src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                  alt=""
                />
                <h5>{name}</h5>
                <h5>{phone}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PeopleAxios;
