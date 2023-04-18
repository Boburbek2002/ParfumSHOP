import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

const Checkout = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h6 className="mb-4 fw-bold">Billing information</h6>
            <Form>
              <FormGroup className="form__group">
                <input type="text" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="number" placeholder="Phone number" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Street address" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="City" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Postal code" />
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      ;{" "}
    </section>
  );
}

export default Checkout;