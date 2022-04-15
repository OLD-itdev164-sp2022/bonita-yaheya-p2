import React from 'react'
import styled from 'styled-components'


const Info = () => {
  return (
   
    <InformationContainer>
        <Topline>
            <Description>
            <h4>Imagine you are here..</h4>
            <p>Plan your next trip to one of these beautiful destinations.  
            There are many breathtaking places to explore, so get ready and start planning your trip now ....
                </p>
            </Description>
            <ContentWrapper>
                <ColumnOne>
                
                </ColumnOne>
            </ContentWrapper>
        </Topline>
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
const Topline = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2 rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;

`
