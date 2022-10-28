import { useState, useEffect } from "react";
//!useEffect teki People.jsx componenti
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();
  const [insanlar, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInsan(data));
  }, []);
  console.log(insanlar);

  //Bu sekilde yaparsam sadece ayni sekilde o user gelir.Ekstra buton ekleyeme veya stil ekleyemem. O zaman farkli bir yol kullanmaliyim. Ama ekstra bir sey eklemeden sadece ayni sekilde gözükmesini istersem fetch ile veriyi bir daha cekip sonra id keyword'ünü ekleyip bu sekilde sadece o veriyi cekmis oluruz.
  /* const getir = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInsan([data]));
  }; */

  return (
    <Container className="text-center mt-4">
      <div className="row">
        {insanlar.map((insan) => {
          const { id, name, phone } = insan;
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
                style={{ cursor: "pointer" }}
                //onClick={() => {getir(id);}}
                onClick={() => navigate(`/teacher/${id}`)}
              />
              <h5>{name}</h5>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Teacher;
