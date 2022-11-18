import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);
  
 
  


  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
     
      <button>Search User</button>
      <button id="add-button" >
        Add User
      </button>
      <Users users={users}/>
    </div>
  );
};

export default UseMemoCallBack;
