import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
  return (
    <ContactContainer>
      <StaticImage 
      src='../images/email.jpg'
      width={400}
      alt="Sign-up page"
      placeholder='tracedSVG'
      />
      <ContactContent>
        <h2>Contact us</h2>
        <p>Sign up for our newsletter!</p>
        <form
          name="contact" method="POST" data-netlify="true" onSubmit="submit"
          action="/success-thank-you/" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don't fill this out: <input name="bot-field" />
              </label>
            </p>
         
          <FormWrap>
          <label htmlFor="name">
            <input type="text" placeholder="Enter your name" id="name"
            name = "name"/>
            </label>

            <label htmlFor="email">
            <input type="email" placeholder="Enter your email address" id="email"
            name = "email"/>
            </label>

            <Button as="button"
             type="submit" 
             primary="true"
             round="true"
             css={`height: 40px; 
              @media screen and (max-width: 768px) {
                width: 100%;
                min-width:350px;
              }
              @media screen and (max-width: 400px) {
                width: 100%;
                min-width:200px;
              }
             
             `}
              
              >Sign Up</Button>
          
          </FormWrap>
          
        </form>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div `
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%,
  rgba(0, 0, 0, 0.5) 35%,
  rgba(0, 0, 0, 0.1) 100%);
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`
const FormWrap = styled.div `
input {
  padding: 1rem 1.5rem;
  outline: none;
  width: 300px;
  height: 40px;
  border-radius: 50px;
  border: none;
  margin-right: 1rem;
  margin-left: 1rem;
  background: bisque;
}
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  .img {
    display: none;
  }

 input {
   margin-bottom: 1rem;
   width: 100%;
   margin-right: 0;
 }
}

`