import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Info from "../components/Info"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
    <Info />
    
    </Layout>
)


  export default IndexPage

  