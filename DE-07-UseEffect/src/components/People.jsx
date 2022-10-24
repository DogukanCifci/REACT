import { useEffect, useState } from "react";
const People = () => {
  const [insan, setInsan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setInsan(data));
  }, []);

  // console.log(insan);
  return <div></div>;
};
export default People;
