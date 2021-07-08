import * as React from 'react'
import Layout from './/components/layout'
import ".//components/index.css";
import library from './/images/library.png';
import secretsanta from './/images/secretsanta.png';

const ExperiencePage = () => {
    return (
      <Layout pageTitle="Experience">
        <p class="experienceText">I have experience in the fields of Website Creation with HTML, CSS and JavaScript (+libraries like ReactJS), Software Development with Java, C, ASP.NET and C# and Database Construction with SQL.</p>
        <p class="experienceText">I have programmed little Applications in Java such as a library application, in ASP.NET I have programmed a secret santa application and I have created multiple Websites, which I have not hosted though.</p>
        <p class="applicationTitle">Example 1: Library Application</p>
        <img src={library} alt="program library borrow" class="fotoApplication"></img>
        <p class="applicationTitle">Example 2: Secret Santa Application</p>
        <img src={secretsanta} alt="program secret santa wish" class="fotoApplication"></img>
      </Layout>
    )
  }

  export default ExperiencePage