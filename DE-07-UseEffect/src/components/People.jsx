import { useEffect, useState } from "react";
const People = () => {
  const [insan, setInsan] = useState([]);
  //!!!useState icine bos parantez koyarak insan degiskenini bos bir liste yapmis olduk. Daha sonra json formatindaki veriyi bu listenin icine setInsan(data) ile atayacagiz. const insan = [] gibi yapmis olduk aslina bakarsak

  // !!!Burada useEffect kullanmamizin amaci useEffect eger sonunda [] ile kullanilirsa sayfa yüklendigi zaman sadece bir kere cagiriliyor ve bir daha kod en basa dönse bile useEffecti pas geciyor bir sonraki karsilasmada.
  // !Burada biz datamizi useState(data) ile insan degiskenine atadigimiz icin her seferinda basa dönecek. Böyle olunca da useEffect kullanmazsak her basa döndügünde yani insan degiskeni her yenilendiginde bir daha fetch islemi gerceklesecek. Bu da bilgisayari dondururur.

  /********************* */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setInsan(data));
  }, []);

  //setInsan(data) == const insan = insan.push(data) oldu biraz
  console.log(insan);

  //***************** */

  return (
    <div className="container text-center mt-4">
      <div className="row" xs={1} sm={2} md={3} lg={4}>
        {insan.map((e) => {
          const { id, name, phone } = e;
          return (
            <div className="col" key={id}>
              <img src="" alt="" />
              <h5>{name}</h5>
              <h5>{phone}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default People;
