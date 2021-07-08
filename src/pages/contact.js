import * as React from 'react'
import Layout from './/components/layout'
import ".//components/index.css";
import { FaGithub } from 'react-icons/fa';
import { MdComputer } from "react-icons/md";
import { ImSpotify } from "react-icons/im";


const ContactPage = () => {
    return (
      <Layout pageTitle="Contact">
        <p class="contactTitle">My Contact</p>
        <p class="contactDesc">Adress / Zip Code / Country:</p>
        <p class="contactText">Schachenstrasse 14a / 9430 St. Margrethen (SG) / Switzerland</p>
        <p class="contactDesc">Phone Number:</p>
        <p class="contactText">+41 78 896 70 35</p>
        <p class="contactDesc">EMail:</p>
        <p class="contactText">lennyelia.puente@ksb-sg.ch -> <a href="mailto:lennyelia.puente@ksb-sg.ch">Send me an EMail!</a></p>
        <p id="space"></p>
        <p class="contactText">Or find me on the Internet!:</p>
        <a href="https://github.com/lennypuente" target="_blank"><FaGithub class="githubicon" size={40}></FaGithub></a>
        <a href="http://webseiten.informatik.sg/2020/3gwi/gruppe13/" target="_blank"><MdComputer class="m152icon" size={40}></MdComputer></a>
        <a href="https://open.spotify.com/user/0nmz8urykx48qaf70819q3n2i?si=29ade26d7fa84fd2" target="_blank"><ImSpotify class="spotifyicon" size={40}></ImSpotify></a>

      </Layout>
    )
  }

  export default ContactPage