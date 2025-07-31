import "./Home.css";
import Navbar from "./Navbar";
// import myImage from "./assets/images/banner-image.jpg";

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
        <section className="section">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
          <div className="box">1</div>
        </section>

        <footer className="footer">
          <p>Copy right reserved 2025</p>
        </footer>
      </div>
    </>
  );
}
