import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import Modalnew from "../Modalnew";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Song from "../../song/Song";
import { useHistory } from "react-router-dom";
//import {DatePicker,state,handleChange} from "react-datepicker";
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Addsong = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history=useHistory()
  const oncancel =() =>{
    history.push('/song')
  }

  const mySubmitHandler = (values) => {
    console.log(values);
    fetch("http://192.168.225.41:4000/api/song", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          alert("success");
        } else {
          alert("fail");
        }
      })
      .catch((error) => {});
  };

  const [selectedDate, setselectedDate] = useState(null);

  const initialProfileValues = {
    name: "",
  };

  const profileValidationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
  });
  return (
    <React.Fragment>
      <Container>
        <Formik
          enableReinitialize={true}
          initialValues={initialProfileValues}
          validationSchema={profileValidationSchema}
          onSubmit={mySubmitHandler}
        >
          <Form className="form-group">
          <h3>Add Song</h3>
          <div>
            
          </div>
            <Table>
              {/* <h3>Add Song</h3> */}

              <tr>
                <td>
                  {" "}
                  <label>Enter your name</label>
                </td>
                <td>
                  <Field
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label>Enter date</label>
                </td>
                <td>
                  <Field
                    type="text"
                    name="date"
                    className="form-control form-control-lg"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label>Artist</label>
                </td>
                <td>
                  {" "}
                  <Field
                    type="text"
                    name="artist"
                    className="form-control form-control-lg"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {" "}
                  <Button type="submit" onClick={() => setModalShow(true)}>
                    + Add Artist
                  </Button>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <Button variant="primary" size="sm" onClick={oncancel}>
                    Cancel
                  </Button>
                </td>
                <td>
                  <input type="submit" value="Save" />
                </td>
              </tr>
            </Table>
          </Form>
        </Formik>
              
      </Container>
      <Modalnew show={modalShow} onHide={() => setModalShow(false)}></Modalnew>
        
    </React.Fragment>
  );
};

export default Addsong;
