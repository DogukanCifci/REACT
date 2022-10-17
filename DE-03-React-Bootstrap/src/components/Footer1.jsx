import { Navbar } from "react-bootstrap";

const Footer1 = () => {
  return (
    <div>
      <Navbar className="bg-dark d-flex justify-content-center fixed-bottom p-4 text-light align-items-center">
        <p>Copyright {new Date().getFullYear()}</p>
      </Navbar>
    </div>
  );
};

export default Footer1;
