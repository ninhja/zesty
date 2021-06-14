import "./styles.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    setCurrentImage((currentImage) => {
      return currentImage < images.length - 1 ? currentImage + 1 : 0;
      // if (currentImage < images.length - 1 ) {
      //   return currentImage + 1
      // } else {
      //   return 0
      // }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br />
          by Ella Fieldling
        </h2>
      </header>

      <figure className="image-container">
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
