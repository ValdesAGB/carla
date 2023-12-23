import React from 'react'
import { indice } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/color'
import { polices } from '../untils/police'

const Card = styled.div`
  width: 18rem;
  padding: 0;
  border: none;
  margin: 1rem 0.5rem;
  @media (min-width: 768px) {
    margin: 0.75rem 0.5rem;
    margin-bottom: 0;
  }
`

const Title = styled.h5`
  text-align: center;
  color: ${colors.galerieTitleColor};
  span {
    font-weight: bold;
  }
`
const BtnContainer = styled.div`
  text-align: center;
`

const Boutton = styled.button`
  border: none;
  border-radius: 10rem;
  padding: 2% 10%;
  background-color: ${colors.mainColor};
  font-family: ${polices.main};
  color: ${colors.secondColor};
`

function GalerieComponent({ title, cover }) {
  return (
    <React.Fragment>
      <Card className="card">
        <img src={cover} className="card-img-top " alt={title} />
        <div className="card-body">
          <Title className="card-title">
            Mes <span>{title}</span>
          </Title>

          <BtnContainer className="row justify-content-center">
            <Boutton className=" col-7" onClick={() => alert(indice)}>
              Parcourir
            </Boutton>
          </BtnContainer>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default GalerieComponent
