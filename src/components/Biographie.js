import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/color'

const title = "L'essentiel à connaître sur moi."

const Title = styled.h5`
  @media (max-width: 575px) {
    font-size: 1.5em;
  }
  font-size: 1.8em;
`

const AboutMe = styled.p`
  font-weight: 400;
  text-align: justify;
  font-size: 0.9em;
`

const Download = styled.button`
  background-color: ${colors.secondColor};
  color: white;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
`

function Biographie() {
  return (
    <React.Fragment>
      <div className="col-12 col-md order-md-0 order-1 ">
        <Title>{title.toUpperCase()}</Title>
        <AboutMe>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit. smod tempor incididunt ut labore et
          dolore magna aliqua.
        </AboutMe>
        <Download>Télécharger mon CV</Download>
      </div>
    </React.Fragment>
  )
}

export default Biographie
