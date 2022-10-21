//?==================================================================
//?                       USEEFFECT HOOK
//?==================================================================
//! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
//! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);
import { useEffect, useState } from "react";
const ExampleUseEffect = () => {
  const [count, SetCount] = useState(0);

  //Count' u her artirrdigimda yilardaki useState'e gelecegi icin alttaki settimeoutda oraya her geldiginde otomatikmen 1 kere calisacak. setTimeOut'u bir kere yapip daha sonr aoraya bir daha gelse bile atlamasi icin useEffect icine aldik.Sadece sayfa yüklendiginde bir kere calisir. Daha sonra calismaz.
  useEffect(() => {
    setTimeout(() => {
      alert("Merhaba Hosgeldin");
    }, 3000);
  }, []);

  const artir = () => {
    SetCount(count + 1);
  };
  return (
    <div className="mt-4">
      <h3>Count : {count}</h3>
      <button className="btn btn-success" onClick={artir}>
        ARTIR
      </button>
    </div>
  );
};
export default ExampleUseEffect;
