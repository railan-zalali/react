import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, you May Like</p>
          </div>
          <Row>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/a809e96e-3c18-4e63-ac83-8deb9b4c1b1c.png'
                      />
                      <h5 className='category-name mt-2'>Handphone & Tablet</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png'
                      />
                      <h5 className='category-name mt-2'>Top Up & Tagihan</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png'
                      />
                      <h5 className='category-name mt-2'>Travel & Entertainment</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png'
                      />
                      <h5 className='category-name mt-2'>Perawatan Hewan</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5a8add5-ed3f-400b-8f98-f484d22af153.png'
                      />
                      <h5 className='category-name mt-2'>Keuangan</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png'
                      />
                      <h5 className='category-name mt-2'>Komputer & Laptop</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png'
                      />
                      <h5 className='category-name mt-2'>Komputer & Laptop</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='h-100 w-100 text-center'>
                    <Card.Body>
                      <img
                        className='center'
                        src='https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png'
                      />
                      <h5 className='category-name mt-2'>Komputer & Laptop</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
