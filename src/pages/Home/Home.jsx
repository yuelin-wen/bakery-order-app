import React from "react";
import heroImg from "../../assets/WechatIMG15202.jpeg";
import Card from "../../UI/Card/Card";
import "./home.css";

const Home = () => {
  return (
    <Card>
      <div className="home">
        <img src={heroImg} alt="main page" />
      </div>
    </Card>
  );
};

export default Home;
