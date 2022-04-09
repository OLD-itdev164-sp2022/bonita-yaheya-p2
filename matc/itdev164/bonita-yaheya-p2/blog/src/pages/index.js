import * as React from "react"
import { Link } from "gatsby"
import { Container, Card } from 'react-bootstrap'
import Layout from "../components/layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Footer from "../components/Footer"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
    <Footer />
   
    
   
    
  </Layout>
)

export default IndexPage
