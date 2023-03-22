import React from "react";
import Card from "../../UI/Card/Card";
import "./gallery.css";
import g1img from "../../assets/image-03-03-20-07-29-1.jpeg";
import g2img from "../../assets/image-03-03-20-07-29-2.jpeg";
import g3img from "../../assets/image-03-03-20-07-29-3.jpeg";
import g4img from "../../assets/image-03-03-20-07-29-4.jpeg";
import g5img from "../../assets/image-03-03-20-07-29-5.jpeg";
import g6img from "../../assets/image-03-03-20-07-29.jpeg";
import g7img from "../../assets/image-03-03-20-07-55-1.jpeg";
import g8img from "../../assets/image-03-03-20-07-55-2.jpeg";
import g9img from "../../assets/image-03-03-20-07-55-3.jpeg";
import g10img from "../../assets/image-03-03-20-07-55.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: g1img },
    { src: g2img },
    { src: g3img },
    { src: g4img },
    { src: g5img },
    { src: g6img },
    { src: g7img },
    { src: g8img },
    { src: g9img },
    { src: g10img },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <Card>
      <div className="gallery">
        <div>
          <h1>Gallery</h1>
        </div>
        <div className="galleryContainer">
          {open && (
            // 幻灯片
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}

          <div className="bakeImages">
            {photos.map((photo, i) => (
              <div className="bakeImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="bakeImg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Gallery;
