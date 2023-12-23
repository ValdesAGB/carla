import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/color'

const Container = styled.div`
  margin-top: 10%;

  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 5%;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const Greeting = styled.h2`
  font-weight: lighter;

  .firstName {
    font-weight: 400;
  }
  .lastName {
    color: ${colors.secondColor};
    font-weight: bold;
  }
`

const Profession = styled.h2`
  color: ${colors.secondColor};

  letter-spacing: 5px;
  margin: 5% 0;

  @media (min-width: 576px) {
    margin: 2% 0;
  }
`

const Biographie = styled.p`
  text-align: justify;
  font-weight: light;
  font-size: 0.9em;
  @media (min-width: 992px) {
    max-width: 95%;
  }
`

const DownloadBtn = styled.button`
  color: white;
  font-weight: 500;
  border: solid 1px ${colors.secondColor};
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 2px;
  transition: all 500ms;
  &:hover {
    background-color: ${colors.secondColor};
  }
`

function Welcome() {
  return (
    <React.Fragment>
      <Container className="col-12 col-md">
        <Greeting>
          Hello, je suis <span className="firstName">Carla</span>{' '}
          <span className="lastName">TOWN</span>
        </Greeting>
        <Profession>PHOTOGRAPHE</Profession>
        <Biographie>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Biographie>
        <DownloadBtn>Télécharger mon CV</DownloadBtn>
      </Container>
    </React.Fragment>
  )
}

export default Welcome
