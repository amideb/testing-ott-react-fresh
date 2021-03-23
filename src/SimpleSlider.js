import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <h2> Sliding Banner</h2>
        <Slider {...settings}>
          <div>
          <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
          <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}