import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./cars";
import arrow from "./images/chevron-circled.svg";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="App"
      style={{
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <div style={{ backgroundColor: "black" }}></div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-top">
                <div
                  style={{
                    fontWeight: "500",
                    color: "grey",
                    fontSize: "20px",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div>{item.bodyType}</div>
                </div>

                <b style={{ fontSize: "18px" }}>{item.modelName}</b>
                <span style={{ color: "grey", fontWeight: "400" }}>
                  {item.modelType}
                </span>
                <div className="card-bottom" style={{ marginTop: "20px" }}>
                  <img
                    src={item.imageUrl}
                    alt={item.modelName}
                    style={{ height: "250px", width: "300px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    fontSize: "20px",
                    marginTop: "1rem",
                    fontWeight: "500",
                  }}
                >
                  <a href="#">Learn &gt;</a>
                  <a href="#">Shop &gt;</a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div style={{ position: "absolute", right: "0", bottom: "0" }}>
        <div>
          <img
            src={arrow}
            alt="#" 
            style={{
              height: "3rem",
              webkitTransform: "scaleX(-1)",
              transform: "scaleX(-1)",
            }}
          />
          <span>
            <img src={arrow} alt="#" style={{ height: "3rem" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
