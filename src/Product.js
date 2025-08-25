import "./Home.css";
import Navbar from "./Navbar";
import "./Product.css";
// import apple from "./assets/images/apple.png";
// import samsung from "./assets/images/samsung.png";
// import google from "./assets/images/google.jpg";
// import vivo from "./assets/images/vivo.svg";
// import oppo from "./assets/images/oppo.png";
// import oneplus from "./assets/images/oneplus.png";
// import realme from "./assets/images/realme.png";
// import nothing from "./assets/images/nothing.png";
// import sony from "./assets/images/sony.png";
// import huwei from "./assets/images/Huawei.png";
// import mi from "./assets/images/mi.png";
// import moto from "./assets/images/Motorola-logo.jpg";
// import techno from "./assets/images/Techno.png";
// import poco from "./assets/images/poco.png";
// import infonix from "./assets/images/infonix.png";
export default function Home() {
  function Handler() {
    alert("HELLO");
  }

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Welcome Mobile</h1>
        </header>
        <div className="header1">
          <Navbar />
        </div>
      </div>
      <section className="prdct-section">
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-pq">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
        </div>
        <div className="prdct">
          <div className="prdct-p">
            <button onClick={Handler}>ADD</button>
            <button>BUYNOW</button>
          </div>
         </div>
         <div className="prdct">
          <div className="prdct-p">
             <button onClick={Handler}>ADD</button>
             <button>BUYNOW</button>
           </div>
         </div> 
      </section>

      <footer className="footer-one">
        <p>Copy right reserved 2025</p>
      </footer>
    </>
  );
}
