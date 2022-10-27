import notFound from "../img/fehlerbeispiel.gif";

//Yanlis veya olmayan bir adres girildiginde bu sayfaya yönlendirmek icin bu sayfayi olusturuyoruz.
const NotFound = () => {
  return (
    <div className="container-fluid">
      <img src={notFound} alt="" style={{ width: "100%", height: "50vh" }} />
    </div>
  );
};

export default NotFound;
