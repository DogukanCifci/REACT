import React, { memo } from "react";
import clarusLogo from "../assets/cw_logo.png";

const Header = ({ resim }) => {
  console.log("HEADER COMPONENT RENDERED");
  return (
    <div className="header">
      <img
        src={resim ? resim : clarusLogo}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);

//Header cagirildigi diger sayfalarda degisiklik oldugunda header da degismedigi halde her seferinde cagirilir. Bu sebeple basina memo yazarak dedik ki bunu bir kere hafizaya kaydet ve diger sayfalarda her degisiklik oldugunda sen cagirilma. Direk senin üzerinde degisiklik yoksa.
