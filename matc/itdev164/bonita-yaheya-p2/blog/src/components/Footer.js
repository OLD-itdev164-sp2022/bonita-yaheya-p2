import React from 'react';
import styled from 'styled-components'



const Footer = () => {
    const today = new Date();

    return (
       
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
            <p>Built with Gatsby</p>
        </footer>
    )
}

export default Footer

const footer = styled.footer`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
  display: none;
}
  `