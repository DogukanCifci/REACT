import moment from "moment";
import { useEffect, useState } from "react";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  //const zaman = moment();
  useEffect(() => {
    setInterval(() => {
      setZaman(moment());
    }, 1000);
  }, []);
  return <div>{zaman.format("HH:mm:ss")}</div>;
};
export default Clock;
