import React from "react";
import Carousel from "../../Components/Carousel/Carousel";

const Home = (props) => {
  return (
    <div>
      <Carousel pictures={props.pictures}/>
    </div>
  );
};

export default Home;
