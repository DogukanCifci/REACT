import { useEffect, useState } from "react";
const People = () => {
  const [insan, setInsan] = useState([]);
  //!!!useState icine bos parantez koyarak insan degiskenini bos bir liste yapmis olduk. Daha sonra json formatindaki veriyi bu listenin icine setInsan(data) ile atayacagiz. const insan = [] gibi yapmis olduk aslina bakarsak
  //!!!!Eger liste halini ilk basta vermezsek console.log ' a bakarsa ilk basta bos liste gözüküyor. Yani bu demek oluyor ki fetch olmadan önce asagida console.log calisir ve return bir tur döner. Map fonksiyonu sadece array'lerde calistigi icin o ara liste olmayan bir seyi map ile gezmeye calistigimizdan dolayi hata verir. Bunu engellemek icin en basta useState'de insan'i liste olarak tanimlamaliyiz ve ek önlem olarak asagida "&&" mantigini kullanarak eger listeyse gez degilse bi sey yapma diyip hata alinmasini engelleyebiliriz.Eger öyle yaparsak useState ici bos olsa bile hata vermez. Fetch islemi tamamlandiktan sonra fetch insan degiskenini kendisi otomatik olarak liste haline sokar ve map fonskiyonu islevine devam eder.

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
      <div className="row">
        {insan &&
          insan.map((e) => {
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
export default People;
