
import Navbar from "./Navbar";
import "./Contact.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Welcome Mobile</h1>
        </header>
        <div className="header1">
          <Navbar />
        </div>
       

        <footer className="footer-one">
          <p>Copy right reserved 2025</p>
        </footer>
      </div>
    </>
  );
}
