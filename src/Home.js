
import "./Home.css";
import Navbar from "./Navbar";
import headerPhone from "./assets/images/header-phone.jpg";
import logo from "./assets/images/logo.jpg";
export default function Home() {
  return (
    <>
      <div className="container">
        <header className="header">
    <img src={logo} alt="Phone Banner" width="80" height="80" />

{/* 
          <h1>Welcome To Second hand Mobile</h1> */}
        </header>
        <div className="header1">
          <Navbar />
        </div>
             <section className="section">
                <div className="banner">
                  <img src={headerPhone} alt="Phone Banner" />
                </div>
              </section>
      </div>
    </>
  );
}
