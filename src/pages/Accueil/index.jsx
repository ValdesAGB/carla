import React from 'react'
import Welcome from '../../components/Welcome'
import styled from 'styled-components'
import { colors } from '../../untils/color'
import { polices } from '../../untils/police'

const cover =
  'https://www.portraitprofessionnel.fr/wp-content/uploads/2022/02/Photographe_profesionnel_portrait_studio_corporate.jpg'

const Section = styled.section`
  background-color: ${colors.mainColor};
  color: white;
  font-family: ${polices.main};

  padding: 10% 0;

  @media (min-width: 992px) {
    padding: 8% 0;
  }

  @media (min-width: 1200px) {
    padding: 5% 0;
  }
`

const Cover = styled.img`
  width: 100%;
`

function Accueil() {
  return (
    <React.Fragment>
      <Section className="" id="accueil">
        <div className="container">
          <div>
            <div className="row justify-content-center align-items-center ">
              <div className="col-12 col-md-5">
                <Cover src={cover} alt="Carla TOWN" />
              </div>
              <Welcome />
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Accueil
