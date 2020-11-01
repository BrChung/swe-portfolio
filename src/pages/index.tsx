import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Work from "../components/Work"
import "../styles/index.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <Landing pic={data.landingPic} />
      <About pic={data.aboutPic} />
      <Work
        pic1={data.project1}
        pic2={data.project2}
        pic3={data.project3}
        pic4={data.project4}
      />
      <Contact />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    aboutPic: file(relativePath: { eq: "about.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1: file(relativePath: { eq: "example1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "example2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3: file(relativePath: { eq: "example3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project4: file(relativePath: { eq: "example4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landingPic: file(relativePath: { eq: "landing.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
