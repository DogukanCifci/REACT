import "./Footer.scss";
const Myfooter = () => {
  return (
    <div>
      <footer>
        <p>Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Myfooter;
