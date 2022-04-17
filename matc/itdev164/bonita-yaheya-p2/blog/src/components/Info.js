import React from 'react'
import styled from 'styled-components'

const Info = () => {
  return (
   
    <InformationContainer>
         <ContentWrapper>
            
            <Description>
            <h3>The possibilities are endless ..</h3>
            <p>Plan your next trip to one of these beautiful destinations.  
               There are many breathtaking places to explore, so get ready and start planning your trip now ....
                </p> 
           
            <h3> Review of a visitor ..</h3>
            <p>I am happy that I visited the Dunhinda Waterfall while vacationing in Sri Lanka.  It was the
                best and most unforgettable experience!
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
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 2 rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

