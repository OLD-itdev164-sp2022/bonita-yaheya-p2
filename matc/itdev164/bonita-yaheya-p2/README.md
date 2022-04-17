# bonita-yaheya-p2

# created new repo for Project 2

import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    
    <h2>Welcome to my Photo Gallery.</h2>

    <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
           <Row>         
      {data.gallery.edges.map(({node}) => (
      <Col lg={4} md={6} key={node.id} className='py-3'>
         <a href={node.publicURL}>
         <GatsbyImage image={node.childImageSharp.gatsbyImageData}
         alt = {node.base.split('-').join(' ').split('.')[0]} />
         </a>
         
      </Col>
           ))}
           </Row>
        </SRLWrapper>
     </SimpleReactLightbox>     
    </Container>
     
    <p>
      <h3>Click image for content</h3> <br />
      <Link to="/page-2/">Next Page</Link><br />
    </p>
  </Layout>
)
export default IndexPage

export const pageQuery = graphql `
  query {
    gallery: allFile(filter: 
      {relativeDirectory: {eq: "college-photos"}}
      sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 900
              transformOptions: {fit: COVER}
              placeholder: BLURRED
              webpOptions: {quality: 50}
            )
          }
        }
      }
    }
  }
		
		import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site text-center text-capitalize"
      
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          marginTop: `1.5rem`,
          padding: `0 1.0875rem 1.45rem`,
          color: `crimson`,
        }}
      >
        <main>{children}</main>
        <footer className="col-10 mx-auto col-md-6 text-center text-capitalize"
          style={{
            marginTop: `1.5rem`,
            color: `crimson`,
          }}
        >
          <h4> © {new Date().getFullYear()}, ITDEV Class Project </h4>
          <h5>All Rights Reserved</h5> 
         
          {` `}
                      
        </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

----------------------
const ProductsContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) / 2);
background: #fff;
color: #fff;
`
const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProductImage = styled.div`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 0 2 rem;

 @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items:center;
  position: absolute;
  top: 375px;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`


`

