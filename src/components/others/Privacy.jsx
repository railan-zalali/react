import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='p-2'>
            <Col className='shadow bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
              <h4 className='section-title-login'>Privacy Page</h4>
              <p className='section-title-contact'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, recusandae sed!
                Ea dolor temporibus explicabo quisquam laboriosam officia libero, laborum esse
                assumenda provident suscipit vero, dolore tenetur. <br />
                <br /> Odit vel voluptates velit autem ipsa dolores illum consectetur? Natus dicta
                id quasi beatae distinctio, praesentium magnam ipsam, deserunt libero facilis
                explicabo itaque nostrum quos veniam placeat sed. <br />
                <br /> Facere amet dolorem ex numquam ipsam delectus non consequatur nam quae,
                accusantium maiores. Soluta, atque officiis ea totam necessitatibus aperiam odit
                dolor repellat doloremque sed adipisci provident hic aspernatur est vero excepturi
                ipsa? Reprehenderit, est!
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Privacy;
