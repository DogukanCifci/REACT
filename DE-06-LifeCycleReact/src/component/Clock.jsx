import moment from "moment";
import { useEffect, useState } from "react";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  //const zaman = moment();
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("merhaba");
      setZaman(moment());
    }, 1000);

    //Bu kisim artik sayfadan ayrildigimizda veya  olayi kapattigimizda artik bitsin diye. biZ App.js'te eger butona basrsak Clokc.jsx'i kapat gösterme dedik. Burasi da Clock.jsx. Butona bastzigimizda sayfadan ayrilmis olacagiz.Onun icin calismaya devam etmez.
    return () => {
      clearInterval(timer);
      console.log(
        "Bu sayfa kapatildigi veya baska sayfaya gidildigi icin olay durdu. Sayfa bir daha acilirsa otomatik olarak baslar!"
      );
    };
  }, []);
  //Eger sadece [] isareti varsa sonda bu sayfa yenilendiginde kontagi calistir daha sonra bi daha gelme buraya demek. Sayfa her yenilendiginde olacak. Am bu sayfadan ayrildigimizda da devam eder.Onun icin return eklemeliyiz
  return (
    <div>
      {/*{zaman.format("HH:mm:ss") ----> Bu sekilde yapabiliriz ama iki noktalarin bir görünüp bir kaybolmasini istiyorum. O yüzden bir algoritma olusturmaliyim*/}

      {zaman.format("hh")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("mm")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("ss")}
    </div>
  );
};
export default Clock;
