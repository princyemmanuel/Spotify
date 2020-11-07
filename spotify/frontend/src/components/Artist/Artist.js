import React from 'react'
import {Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


/**
* @author
* @function Artist
**/

const Artist = (props) => {
  return(
    <div>
      <h1>Top 10 Artist</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Artist</th>
      <th>Date of Birth</th>
      <th>Song</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lewis Capaldi</td>
      <td>September 17.1993</td>
      <td>Someone You Loved,Before You Go,Bruises,Hold me While You Wait</td>
     
    </tr>
    <tr>
      <td>Post Malone</td>
      <td>August 10.1998</td>
      <td>Circles,Rockstar,Sunflower,Psycho,Wow,Better Now</td>
     
    </tr> 
    <tr>
      <td>Justin Bieber</td>
      <td>July 22.1989</td>
      <td>Intentions,Let me Love you,Despacito,Yummy,Idon't care</td>
     
    </tr>
     <tr>
      <td>Christina perri</td>
      <td>November 15.1998</td>
      <td>A Thousand Year</td>
     
    </tr>
    <tr>
      <td>Selena Gomez</td>
      <td>February 27</td>
      <td>Same Old Love</td>
     
    </tr>
   
  </tbody>
</Table>
    </div>
   )

 }

export default Artist