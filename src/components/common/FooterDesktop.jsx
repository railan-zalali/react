import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

export class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm '>
          <Container>
            <Row className='px-0 my-5'>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellendus
                  consectetur deserunt. Eius porro, odit fugit perspiciatis odio consequatur
                  laborum.
                  <br />
                  <br />
                  Email: Railanzalali56@gmail.com
                </p>
                <h5 className='footer-menu-title'>Social LINK ADDRESS</h5>
                <a href='https://www.instagram.com/railan_zll56/'>
                  <i className='fab m-1 h4 fa-instagram'></i>
                </a>
                <a href='https://www.instagram.com/railan_zll56/'>
                  <i className='fab m-1 h4 fa-facebook'></i>
                </a>
                <a href='https://www.instagram.com/railan_zll56/'>
                  <i className='fab m-1 h4 fa-twitter'></i>
                </a>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>THE COMPANY</h5>
                <Link to='/' className='footer-link'>
                  About Us
                </Link>
                <br />
                <Link to='/' className='footer-link'>
                  Company Profile
                </Link>
                <br />
                <Link to='/contact' className='footer-link'>
                  Contact Us
                </Link>
                <br />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>MORE INFO</h5>
                <Link to='/purchase' className='footer-link'>
                  How To Purchase
                </Link>
                <br />
                <Link to='/privacy' className='footer-link'>
                  Privacy Policy
                </Link>
                <br />
                <Link to='/refund' className='footer-link'>
                  Refund Policy
                </Link>
                <br />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                <a href=''>
                  <img className='mt-2' src={Google} />
                </a>
                <a href=''>
                  <img className='mt-2' src={Apple} />
                </a>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
            <Container>
              <Row>
                <h6 className='text-white'>© 2023 By RailanZalali, Inc.</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterDesktop;
