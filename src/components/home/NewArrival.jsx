import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previos = this.previos.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previos() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>
              NEW ARRIVAL &nbsp;
              <a className='btn btn-dark btn-sm ml-2 site-button' onClick={this.previos}>
                <i className='fa fa-angle-left'></i>
              </a>
              &nbsp;
              <a className='btn btn-dark btn-sm ml-2 site-button' onClick={this.next}>
                <i className='fa fa-angle-right'></i>
              </a>
            </h2>
            <p>Some Of Our Exclusive Collection, you May Like</p>
          </div>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi 13 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Oppo Find X6 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-turbo.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi Redmi Note 12 Turbo</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Pixel 7 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi 13 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi 13 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi 13 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img
                    className='center'
                    src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg'
                  />
                  <Card.Body>
                    <p className='product-name-on-card'>Xiaomi 13 Pro</p>
                    <p className='product-price-on-card'>Price : $120</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
