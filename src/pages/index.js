import * as React from 'react';
import Layout from './/components/layout';
import lenny from './/images/fotolenny.png';
import ".//components/index.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <img src={lenny} alt="Lenny" class="fotoLenny"></img>
      <p class="fotoText">Lenny Puente</p>
      <p id="space"></p>
      <p class="fotoText">Welcome to my Portfolio!</p>
    </Layout>
  )
}

export default IndexPage