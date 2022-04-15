import React from 'react';
import styled from 'styled-components'



const Footer = () => {
    const today = new Date();

    return (
       
        <FooterContainer>
            <h2>This website is Copyright &copy; {today.getFullYear()}</h2>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
  background: transparent;
  color: #077bf1;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: 0;
  position: relative;

  @media screen and (max-width: 768px) {
  display: none;
}
  `