import { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";
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
      .post("https://jsonplaceholder.typicode.com/users", { myVeri })
      .then((res) => setInsanlar([...insanlar, res.data.myVeri]));
  };
  console.log(insanlar);
  //Yukarda res.data.veri yazmamin sebebi; veri ismiyle bir object olusturdugum icin key myVeri oluyor ve value bu object icindeki key:value pairleri oluyor. Benim de data'ya eklemek istedigim asil bilgiler id,name,phone oldugu icin önce myVeri key'ine ulasiyorum.

  //!!Normalde veriyi direk yukarda post isleminden sonraki {veri} yerine de yazabilirim, ama biz burda hazi olan bir site üzerinden calistigim icin orada kalici degisiklik yapamiyorum Bu sebeple uzunluk her zaman 10 olarak kalicak. Bu sefer ben insanlar.length+1 üzerinden id verdigim icin id hep 11 olur. O zaman da key'de hata alirim ve warning alirim. Ama kendi API'miz üzerinden calisirken kalici olarak degisiklik yapabilecegimiz icin veriyi icerde yazabiliriz.

  const myVeri = {
    id: insanlar.length + 1,
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
  };

  console.log(myVeri); //Veri her tikladigimda bir sonraki veri olusut ama post'a bastigimda eklenir ve bir sonraki veri otomatik olusur.Yani posta basmadan aslinda veri olusuyor. Bastiktan sonra o veri ekleniyor ve yeni bir veri otomatik olarak olusuyor.Yani önce veri olusuyor eger post butonuna basarsam data arraya'ine eklenir.
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
