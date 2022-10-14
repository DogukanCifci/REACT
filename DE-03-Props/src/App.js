import Person from "./Person";

function App() {
  return (
    <div>
      <p>App</p>
      <Person
        name="Osman Kara"
        img="https://cdn.pixabay.com/photo/2022/07/25/17/35/wildlife-7344228__340.jpg"
        tel="555 55 55"
      />
      <Person
        name="Angelia Miller"
        img="https://cdn.pixabay.com/photo/2022/09/08/10/19/eye-7440640__340.jpg"
        tel="111 222 33"
      />
    </div>
  );
}

export default App;
