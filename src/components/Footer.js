import React from 'react'
import styled from 'styled-components'

const Copyright = styled.div`
  background-color: #00121c;
  color: white;
  border-top: solid rgba(255, 255, 255, 0.5) 1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
`

const CopyrightContent = styled.p`
  padding-top: 2%;
  padding-bottom: 1%;
  a {
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    color: white;
    transition: all 400ms;
    &:hover {
      transform: scale(0.95);
      color: #00aff9;
    }
  }

  @media (max-width: 322px) {
    line-height: 20px;
  }
`

const date = new Date()

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <Copyright className="row">
          <CopyrightContent className="text-center">
            &copy; {date.getFullYear()},{' '}
            <a href="https://webgrowth.valdesagbokoni.com/" target="_blank">
              @WebGrowth
            </a>{' '}
            All Rights Reserved.
          </CopyrightContent>
        </Copyright>
      </footer>
    </React.Fragment>
  )
}

export default Footer
