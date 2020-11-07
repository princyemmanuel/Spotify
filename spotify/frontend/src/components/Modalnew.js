import React from "react";
import { Modal, Button,Form,Row,Col,Container} from "react-bootstrap";
const Modalnew = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        style={{ opacity: 1 }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <label>Artist Name</label>
              </Col>
              <Col xs={6} md={4}>
                <input type="text" name="artistName" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label>Date of Birth</label>
              </Col>
              <Col xs={6} md={4}>
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>Select Date</Form.Label>
                      {/* <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setselectedDate(date)}
                        /> */}
                      <Form.Control
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                      />
                    </Form.Group>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <label htmlFor="exampleFormControlTextarea1">
                  Bio
                </label>
              </Col>
              <Col xs={12} md={6}>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modalnew;
