import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <img
              className='slider-img'
              src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/4/17/c8d11a3b-3735-40fa-b9a2-27f70509387f.jpg.webp?ect=4g'
            />
          </div>
          <div>
            <img
              className='slider-img'
              src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/4/17/051348c6-a754-4ca1-9487-17850ccd00e5.jpg.webp?ect=4g'
            />
          </div>
          <div>
            <img
              className='slider-img'
              src='https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/4/17/7980b7fb-3763-42e5-a8e9-6fb853c4d554.jpg'
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
