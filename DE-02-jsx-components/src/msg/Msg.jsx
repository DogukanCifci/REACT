//INternal css
import resim from "../images/background-image.jpg";

//External css
import "./Msg.css";

const styleA = {
  color: "green",
  fontFamily: "Tahoma",
  border: "1px solid red",
};

const Msg = () => {
  return (
    <div>
      <h3 style={styleA}>Burasi MSG Alani </h3>
      <p style={{ color: "red" }}>React' a Hosgeldin</p>

      <img
        className="resim-msg"
        src="https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445__340.jpg"
        alt=""
      />

      <img src={resim} alt="" className="resim-msg" />
    </div>
  );
};
export default Msg;
