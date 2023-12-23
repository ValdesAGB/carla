import React from 'react'
import { experienceElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/color'

const Container = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 10%;
  }
`

const Master = styled.div`
  border: solid 1px ${colors.secondColor};
  cursor: pointer;
  padding: 4%;
  transition: background-color 0.5s, transform 0.8s;
  &:hover {
    background-color: ${colors.secondColor};
    transform: translateY(-10px);
  }
  margin: 10px;
  text-align: center;
  border-radius: 0.375rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

const Level = styled.h1`
  color: ${colors.secondColor};
  font-weight: bolder;
  transition: color 0.6s 0.2s;
  ${Master}:hover & {
    color: white;
  }
`

const Text = styled.h4`
  font-weight: 500;
  margin-top: 10%;
`

function Experience() {
  return (
    <React.Fragment>
      <div className="col-12 col-md">
        <Container className="row justify-content-center">
          {experienceElements.map(({ id, level, text }) => (
            <Master key={id} className="col-5 ">
              <Level>+{level}</Level>
              <Text>{text.toUpperCase()}</Text>
            </Master>
          ))}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Experience
