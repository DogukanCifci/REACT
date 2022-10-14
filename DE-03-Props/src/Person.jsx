import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props; //Destructiring yaptigim icin asagidaki parantezlerde props. yapmama gerek kalmadi
  console.log(props);
  return (
    <div>
      <p>Hello from Person file</p>
      <h2>{name}</h2>
      <Msg isim={name} telefon={tel} />
      <img src={img} alt="" />
      <h4>{tel}</h4>
    </div>
  );
};
export default Person;
//Person a gelen props aslinda bu alttakidir.
/*props = {
 name:"Angelia Miller";
        img:"https://cdn.pixabay.com/photo/2022/09/08/10/19/eye-7440640__340.jpg";
        tel:"111 222 33"
} */
