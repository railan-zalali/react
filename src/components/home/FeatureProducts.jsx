import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class FeatureProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>FEATURE PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, you May Like</p>
          </div>
          <Row>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to='/productdetails'>
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
              </Link>
            </Col>
            <Col className='p-1' key={2} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
            <Col className='p-1' key={3} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
            <Col className='p-1' key={4} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
            <Col className='p-1' key={5} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
            <Col className='p-1' key={6} xl={2} lg={2} md={2} sm={4} xs={6}>
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeatureProducts;
