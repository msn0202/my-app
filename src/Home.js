import "./Home.css";
import Navbar from "./Navbar";
import apple from "./assets/images/apple.png";
import samsung from "./assets/images/samsung.png";
import google from "./assets/images/google.jpg";
import vivo from "./assets/images/vivo.svg";
import oppo from "./assets/images/oppo.png";
import oneplus from "./assets/images/oneplus.png";
import realme from "./assets/images/realme.png";
import nothing from "./assets/images/nothing.png";
import sony from "./assets/images/sony.png";
import huwei from "./assets/images/Huawei.png";
import mi from "./assets/images/mi.png";
import moto from "./assets/images/Motorola-logo.jpg";
import techno from "./assets/images/Techno.png";
import poco from "./assets/images/poco.png";
import infonix from "./assets/images/infonix.png";
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
          <div className="box">
            <img src={samsung} alt="name" />
          </div>
          <div className="box">
            <img src={apple} alt="name" />
          </div>
          <div className="box">
            <img className="google" src={google} alt="name" />
          </div>
          <div className="box">
            <img className="oppo" src={oppo} alt="name" />
          </div>
          <div className="box">
            <img className="realme" src={realme} alt="name" />
          </div>
          <div className="box">
            <img className="vivo" src={vivo} alt="name" />
          </div>
          <div className="box">
            <img className="oneplus" src={oneplus} alt="name" />
          </div>
          <div className="box">
            <img className="nothing" src={nothing} alt="name" />
          </div>
          <div className="box">
            <img src={sony} alt="name" />
          </div>
          <div className="box">
            <img src={mi} alt="name" />
          </div>
          <div className="box">
            <img src={huwei} alt="name" />
          </div>
          <div className="box">
            <img src={moto} alt="name" />
          </div>
          <div className="box">
            <img src={poco} alt="name" />
          </div>
          <div className="box">
            <img src={techno} alt="name" />
          </div>
          <div className="box">
            1
            <img src={infonix} alt="name" />
          </div>
          <div className="box">1</div>
        </section>

        <footer className="footer">
          {/* <p>Copy right reserved 2025</p> */}
          <div>1</div>
            <div>2</div>
              <div>3</div>
        </footer>
      </div>
    </>
  );
}
