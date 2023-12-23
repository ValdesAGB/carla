import React from 'react'
import GalerieComponent from '../../components/GalerieComponent'
import styled from 'styled-components'
import { GalerieElements } from '../../data'
import AllSectionHead from '../../components/AllSectionHead'
import { colors } from '../../untils/color'
import { polices } from '../../untils/police'

const Section = styled.section`
  background-color: ${colors.mainColor};
  color: white;
  font-family: ${polices.main};

  padding-top: 20%;
  padding-bottom: 20%;

  @media (min-width: 576px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 8%;
    padding-bottom: 8%;
  }
  @media (min-width: 1400px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const Paragraph = styled.p`
  text-align: center;
  span {
    color: ${colors.secondColor};
    font-weight: 700;
  }
`
function Galerie() {
  return (
    <React.Fragment>
      <Section id="galerie">
        <div className="container">
          <AllSectionHead
            title={'ma'}
            designation={'galerie'}
            paragraph={
              <div className="row justify-content-center col-12">
                <Paragraph className="col-md-7 col-lg-7 col-12 ">
                  J'ai regroupé ici, l'ensemble de mes prises,{' '}
                  <span>Images et vidéos</span> pour vous permettre d'apprécié
                  ma créativité.
                </Paragraph>
              </div>
            }
          />
          <div className="row justify-content-center ">
            {GalerieElements.map(({ id, cover, designation }) => (
              <GalerieComponent cover={cover} title={designation} key={id} />
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Galerie
