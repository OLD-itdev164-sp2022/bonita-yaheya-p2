import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image' 
  
const Trips = () => {
      return (
        <ProductsContainer>

          <ProductsHeading><h4> Favorite desinations from around the world! </h4> </ProductsHeading>
         
          <ProductWrapper>

            <article>
            <figure className="position-relative"></figure>
            <figcaption>Dunhinda Falls</figcaption>
            
            <StaticImage src='../images/waterfall.jpg' alt="splashing waterfall"
               placeholder="tracedSVG"
               layout="constrained"
               className="example-img"
               as="div"
               
             />
            </article>
           
            <article>
            <figure className="position-relative"></figure>
            <figcaption>Horton Plains</figcaption>
            <StaticImage src='../images/nature.jpg' alt="a tree"

               placeholder="tracedSVG"
               layout="constrained"
               className="example-img"
               as="div"
               
             />
            </article>
            <article>
            <figure className="position-relative"></figure>
            <figcaption>Terraced field</figcaption>
            <StaticImage src='../images/terracedField.jpg' alt="terraced fields"
    
               placeholder="tracedSVG"
               layout="constrained"
               title="a field with rice crop"
               className="example-img"
               as="div"
             />
            </article>
            <article>
            <figure className="position-relative"></figure>
            <figcaption>Abode in rock</figcaption>
            <StaticImage src='../images/rockAbode.jpg' alt="living places carved out of rocks"

               placeholder="tracedSVG"
               layout="constrained"
               className="example-img"
               as="div"
             />
            </article>

          </ProductWrapper> 
        </ProductsContainer>
        )
  } 

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #e6a428;
  color: black;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: crimson;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2 rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
  .example-img {
    border-radius: 1.5rem;
    height: 400px;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid black;
    border-radius: 20px;
    height: 100%;
    max-width: 100%;
    position: relative;   
  }
  .figcaption {
    position: absolute;
    justify-content: space-between;
    bottom: 2rem;
    margin: 0 2rem;
    color: black;
    font-size: 2rem;
    padding-right: 2em;
  }
  @media screen and (max-width: 768px) {
    figcaption {
      position: inherit;
      bottom: inherit;
      margin: .25rem 0px;
      font-size: inherit;
    }

  }
`





