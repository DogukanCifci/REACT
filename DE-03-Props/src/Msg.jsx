const Msg = (props) => {
  const { isim, telefon } = props;
  console.log("111", props);
  return (
    <div>
      <h5>Hello I am {isim}</h5>
      <p>My number is {telefon}</p>
    </div>
  );
};

export default Msg;

/*
const Msg = ({isim,telefon}) => { ---> Destructiring bu sekilde de yapabiliriz, eger ne gelecegini biliyorsak
 
  console.log("111", props);
  return (
    <div>
      <h5>Hello I am {isim}</h5>
      <p>My number is {telefon}</p>
    </div>
  );
};

export default Msg;

*/
