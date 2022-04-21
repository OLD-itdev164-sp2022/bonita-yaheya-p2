import React from 'react'
import styled from 'styled-components'

const Info = () => {
    
  return (
   
    <InformationContainer>
         <ContentWrapper>
            
            <Description>
            <h6>The possibilities are endless ..</h6>
            <p>Plan your next trip to one of these beautiful destinations.  
               There are many breathtaking places to explore, so get ready and start planning your trip now ....
                </p> 
           
            <h6> Review from a visitor ..</h6>
            <p>I am happy that I visited the Dunhinda Waterfall while vacationing in Sri Lanka.  It was the
                most unforgettable experience!
                I have told my friends that they should visit this resplendent island.
                </p>
            </Description>
           
            </ContentWrapper>
    </InformationContainer>
  )
}
export default Info

const InformationContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5 rem calc((100vw - 1300px) / 2);
    height: 100%;

`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: 16px;
    color: crimson;
    font-style: italic;
    font-weight: normal;

    h6 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 4vw, 2rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2 rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

