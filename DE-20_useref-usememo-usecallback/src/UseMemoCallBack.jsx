import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [text, setText] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setKullanicilar(res.data));
  }, []);

  //Eger kullanicilari [] icine eklemezsem sadece lastSearch degistiginde burasi calisacagi icin sayfa ilk yüklendiginde bos gözükür. Ondan dolayi [] icine kullanicilari da ekliyoruz. Cünkü kullancilar sayfa ilk yüklendiginde render edildigi icin bos gözükmez.
  const filteredUsers = useMemo(
    () =>
      kullanicilar.filter((i) =>
        i.name.toLowerCase().includes(lastSearch.toLowerCase())
      ),
    [lastSearch, kullanicilar]
  );

  const ekle = useCallback(() => {
    setKullanicilar([
      ...kullanicilar,
      { id: kullanicilar.length + 1, name: "Osman" },
    ]);
  }, [kullanicilar]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />

      <button onClick={() => setLastSearch(text)}>Search User</button>
      <button id="add-button" onClick={ekle}>
        Add User
      </button>
      {/*  <Users kullanicilar={kullanicilar} /> */}
      <Users kullanicilar={filteredUsers} />
    </div>
  );
};

export default UseMemoCallBack;
