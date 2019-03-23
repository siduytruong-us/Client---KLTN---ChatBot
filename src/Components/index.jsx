import React, { Component } from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const carouselStyle = { 
    textAlign: "center",
    height: "160px",
    lineHeight: "160px",
    background: "#364d79",
    overflow: "hidden",
} 

const imageStyle = { 
  maxHeight: "100%",
  maxWidth: "100%",
  objectFit: "contain"
}

class index extends Component {
    render() {
        return (
   <div>
            <Carousel afterChange={onChange} style = {carouselStyle} autoplaySpeed = {2 * 1000} autoplay>
            <img style = {imageStyle} src = "/assets/img/slider/1.jpg" alt ="" />
            <img style = {imageStyle} src = "/assets/img/slider/2.jpg" alt ="" />
            <img style = {imageStyle} src = "/assets/img/slider/3.jpg" alt ="" />
            <img style = {imageStyle} src = "/assets/img/slider/1.jpg" alt ="" />
          </Carousel> 
          
    </div>  
          );
    }
}

export default index;   