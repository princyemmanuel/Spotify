import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "react-bootstrap-star-rating";
import Artist from "../components/Artist/Artist";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import { useHistory } from "react-router-dom";
import image from '../components/starr.png'

const Song = (props) => {
  const history = useHistory();
  const onclicksong = () => {
    history.push("/Addsong");
  };
  return (
    <div>
      <NavbarComponent />
     

     
           
      <Container>
        <h1>Top 10 Songs    </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Artwork</th>
              <th>song</th>
              <th>Date of Release</th>
              <th>Artists</th>
              <th>Rate</th>
              <th>
                <button onClick={onclicksong}>Add Song</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  style={{ height: 100, width: 100 }}
                  src="https://memberdata.s3.amazonaws.com/hi/hitsdd/photos/hitsdd_photo_gal__photo_1404673833.jpg"
                ></img>
              </td>
              <td>Someone You Loved</td>
              <td>July 21, 2019</td>
              <td>Lewis Capaldi</td>
              <td>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  style={{ height: 100, width: 100 }}
                  src="https://www.syracuse.com/resizer/F2vTqfzDox7bt6axhoOc_jpPDeA=/1280x0/smart/image.syracuse.com/home/syr-media/width600/img/parade/photo/2017/10/17/post-malone-ae137c37ead6c9e7.jpg"
                ></img>
              </td>
              <td>Circles</td>
              <td>September 27, 2019</td>
              <td>Post Malone</td>
              <td> <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img></td>
            </tr>
            <tr>
              <td>
                <img
                  style={{ height: 100, width: 100 }}
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ"
                ></img>
              </td>
              <td>Intentions</td>
              <td>January 02,2020</td>
              <td>Justin Bieber</td>
              <td><img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img></td>
            </tr>
            <tr>
              <td>
                <img
                  style={{ height: 100, width: 100 }}
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features128/v4/74/ef/b4/74efb491-679c-6aa2-97be-fcbbd5e75062/mzl.hfrvgrda.jpg/800x800bb.jpeg"
                ></img>
              </td>
              <td>A Thousand Year</td>
              <td>October 18, 2011</td>
              <td>Christina perri</td>
              <td><img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img></td>
            </tr>

            <tr>
              <td>
                <img
                  style={{ height: 100, width: 100 }}
                  src="https://imgix.bustle.com/rehost/2016/9/13/3997bfbe-581b-489d-92c5-11c00e00d803.jpg?w=800&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces"
                ></img>
              </td>
              <td>Same Old Love</td>
              <td>September 10,2015</td>
              <td>Selena Gomez</td>
              <td><img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img>
              <img src={image} style={{width:'20px'}}></img></td>
            </tr>
          </tbody>
        </Table>
        <Artist />
      </Container>
    </div>
  );
};

export default Song;
