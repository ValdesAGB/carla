import React from 'react'
import { coordonnes } from '../../data'
import ContactForm from '../../components/ContactForm'
import styled from 'styled-components'
import AllSectionHead from '../../components/AllSectionHead'
import { colors } from '../../untils/color'

const Section = styled.section`
  background-color: ${colors.mainColor};
  color: white;

  padding: 20% 0;

  @media (min-width: 576px) {
    padding: 10% 0;
  }
  @media (min-width: 992px) {
    padding: 8% 0;
  }

  @media (min-width: 1200px) {
    padding: 5% 0;
  }
`

const Content = styled.div`
  margin-top: 5%;
`

const CoordonneContent = styled.div`
  text-align: center;
  height: 100%;
`

const Coordoonee = styled.i`
  font-size: 1em;
  cursor: pointer;
  margin: 2% 0;
  @media (min-width: 768px) {
    margin: 0;
  }
  span {
    transition: all 500ms;
    &:hover {
      color: ${colors.secondColor};
    }
  }
`

const FormulaireContainer = styled.div`
  margin-top: 10%;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`
function Contact() {
  return (
    <React.Fragment>
      <Section>
        <div className="container" id="contact">
          <AllSectionHead title={'Contactez -'} designation={'Moi'} />
          <Content className="row">
            <div className="col-12 col-md">
              <CoordonneContent className="row">
                <h4 className="d-none d-md-block">CONTACTEZ-MOI ICI</h4>
                {coordonnes.map(({ id, icone, title }) => (
                  <Coordoonee className={`col-12  ${icone}`} key={id}>
                    <span> {title}</span>
                  </Coordoonee>
                ))}
              </CoordonneContent>
            </div>

            <FormulaireContainer className="col">
              <ContactForm />
            </FormulaireContainer>
          </Content>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Contact
