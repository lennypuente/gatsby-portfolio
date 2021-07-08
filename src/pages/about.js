import * as React from 'react'
import Layout from './/components/layout'
import ".//components/index.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p class="aboutText">Hi there! My Name is Lenny Puente. I am a student at the Kantonsschule am Brühl in St. Gallen.</p>
      <p class="aboutText">I am currently in training to become a software developer and just finished school with passed exams for a vocational baccalaureate in economics</p>
      <p class="aboutText">I have exprience in creating Websites with HTML, CSS and JavaScript Librarys like ReactJS (with which I have created this portfolio) and also with Java, C, C# and SQL.</p>
      <p id="space"></p>
      <p class="aboutText">Name: Lenny Puente</p>
      <p class="aboutText">Age: 17 years</p>
      <p class="aboutText">Email: lennyelia.puente@ksb-sg.ch</p>
      <p class="aboutText">Phone: +41 78 896 70 35</p>
      <p class="aboutText">Adress: Schachenstrasse 14a, 9430 St. Margrethen</p>
      <p class="aboutText">Hobbies: Football, Coding</p>
    </Layout>
  )
}

export default AboutPage