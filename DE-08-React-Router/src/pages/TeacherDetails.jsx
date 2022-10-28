import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({});
  //useNavigate ile gönderdigimiz id yi useParams ile yakalayip burda kullanacagiz
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  }, [id]);
  //aslinda id burda yazmasak da olur. Cünkü sayfayi her yeniledigimde bir kere calisacagi icin sikinti olmaz. Ama terminal idyi burda belki tekrar degistirmek istersem diye icerde id degerine göre güncellememi istiyor. Mesela hem gelen id'yi yazdir. Hemde ondan bir sonraki elemani da yazdir. O zaman eger parantez icine idyi degisken olarak yazmazsam sadece bir kere calisir ve ondan sonraki elemani yazdirmaz. Güncellenme ihtimaline karsi oranin icine de degisken degerimizi yazmamizi istiyor.
  return (
    <div className="container text-center mt-2">
      <h3>{person.name}</h3>
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
        alt=""
        width={300}
      />
      <h4>{person.email}</h4>
      <h4>{person.phone}</h4>

      <div>
        <button onClick={() => navigate(-1)} className="btn btn-success">
          Go Back
        </button>

        <Link to="/">
          <button className="btn btn-warning">Go Homepage</button>
        </Link>
        {/* <button onClick={()=>navigate("/")} className="btn btn-warning">Go Homepage</button> */}
        {/* Link ile bu ayni sey Link yerine bunu da yazabiliriz. Ama ilk buton icin önceki sayfalari useNavigate hafizasinda tuttugu icin orada Link to kullanamayiz. Sadece useNavigate kullanabilirim. -1 bir önceki sayfa. -2 2 önceki ..... */}
      </div>
    </div>
  );
};
export default TeacherDetails;
