import React, { useState } from "react";
const Form1 = () => {
  const [ad, setAd] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  console.log(password);

  const formGet = () => {
    alert(`Username :${ad}
    Password : ${password}
    Country : ${country}`);
  };
  return (
    <div className="container-fluid">
      <h1>******************************************</h1>
      <h2 className="text-center">FORMS(EVENTS)</h2>
      <form onSubmit={formGet}>
        <div className="form text-center">
          <div className="mb-3">
            <label htmlFor="usernameControl" className="form-label">
              Username: <span className="text-danger fw-bold">{ad}</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameControl"
              onChange={(e) => setAd(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordControl" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordControl"
              onChange={(a) => setPassword(a.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>{" "}
            <span className="text-danger fw-bold">{country}</span>
            <select
              className="form-select"
              aria-label="Default select example"
              id="country"
              onChange={(b) => setCountry(b.target.value)}
            >
              <option value="">Countries</option>
              <option value="Türkiye">Türkiye</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
