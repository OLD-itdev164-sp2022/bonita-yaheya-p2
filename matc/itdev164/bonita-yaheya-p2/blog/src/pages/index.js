import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Info from "../components/Info"
import Contact from "../components/Contact"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
    <Info />
    <Contact /> 
  </Layout>
)

  export default IndexPage

  