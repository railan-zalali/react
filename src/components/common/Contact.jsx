import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='p-2'>
            <Col className='shadow bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
              <Row className='text-center'>
                <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className='section-title-login'>Contact Us</h4>
                    <h6 className='section-sub-title'>Please Contact Us</h6>
                    <input
                      type='text'
                      className='form-control m-2'
                      placeholder='Enter Mobile Number'
                    />
                    <input type='email' className='form-control m-2' placeholder='Enter Email' />
                    <textarea
                      className='form-control m-2'
                      placeholder='Enter Your Message'
                    ></textarea>
                    <Button className='btn tbn-block m-2 site-btn-login'>
                      Send <i className='fab h6 ms-2 fa-telegram'></i>
                    </Button>
                  </Form>
                </Col>
                <Col md={6} lg={6} sm={6} xs={6} className='p-0 Desktop m-0'>
                  <br />
                  <p className='section-title-contact'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus Email :
                    Railanzalali56@gmail.com
                  </p>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.2518225043777!2d107.45975207405635!3d-7.0967836695749575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDUnNDguNCJTIDEwN8KwMjcnNDQuNCJF!5e0!3m2!1sid!2sid!4v1682616478420!5m2!1sid!2sid'
                    width='450'
                    height='300'
                    styleS='border:0;'
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
