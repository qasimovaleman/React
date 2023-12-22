import React from "react";
import "./index.css";
import Shekil from"../../assets/images/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.webp"
const Home = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="banner">
            <div className="divLeft">
              <h1>
                ELECTRICAL <br />
                SERVICE <br /> PROVIDERS
              </h1>
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dicta ratione quas reprehenderit odit esse!
              </p>
              <button className="contact">Contact Us</button>
            </div>
            <div className="divRight">
                <img src={Shekil} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
