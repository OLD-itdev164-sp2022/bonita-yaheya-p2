import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from './Button'
import { ImLocation } from 'react-icons/im'
import 'bootstrap/dist/css/bootstrap.min.css'

 
  
const Trips = () => {
  
  <ProductCard>
    <ProductInfo>
      <TextWrap>
        <ImLocation />
       
      </TextWrap>
      <Button to='/trips' primary="true" round="true"
      css={`
      position: absolute; 
      top: 420px;
      font-size: 14px; 
      `}>
      </Button>
    </ProductInfo>
  </ProductCard>
 
      return (
        <ProductsContainer>
          <ProductsHeading><h4> Favorite desinations from around the world! </h4> </ProductsHeading>
          <ProductTitle></ProductTitle>
      

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
            <figcaption>Tree View</figcaption>
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
            <StaticImage src='../images/terracedField.jpg' alt="terraced paddy fields"
    
               placeholder="tracedSVG"
               layout="constrained"
               title="a field with crops"
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
  background: pink;
  color: black;

`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: red;

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
  }
  .figcaption {
    position: absolute;
    justify-content: space-between;
    bottom: 2rem;
    margin: 0 2rem;
    color: black;
    font-size: 2rem;
    padding: 2rem;
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
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProductImage = styled(Image)`
  height: 100%;
  max-width: 100%;
  position: relative;
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
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  } 
  `
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375 px;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: red;
  flex-direction: column;
`




