import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.js";
const CardDetails = () => {
  const navigate = useNavigate();
  /* const props = useParams();
  return <div>{props.name}</div>; */

  //--->Alirken destructin yapmak icin asagidaki metodu kullaniyoruz. Direk {} icinde yaziyoruz.
  //parametre adi App.js 'de linkte kullandigimiz isim ile ayni olmak zorunda

  const { name } = useParams();
  console.log("adsas", data);

  return (
    <div>
      {data.map(
        (element, index) =>
          element.name === name && (
            <div className="container text-center mt-3" key={index}>
              <h3>{element.name}</h3>
              <img src={element.img} alt="" width={300} />
              <p className="mt-4">{element.text}</p>
              <div>
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-success"
                >
                  Go Back
                </button>

                <Link to="/">
                  <button className="btn btn-warning">Go Homepage</button>
                </Link>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default CardDetails;
