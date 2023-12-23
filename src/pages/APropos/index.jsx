import React from 'react'
import Biographie from '../../components/Biographie'
import Experience from '../../components/Experience'
import styled from 'styled-components'
import AllSectionHead from '../../components/AllSectionHead'

const Section = styled.section`
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
  margin: 2% 0;
`

function APropos() {
  return (
    <React.Fragment>
      <Section id="aboutme">
        <div>
          <div className="container">
            <div>
              <AllSectionHead title={'à PROPOS DE'} designation={'MOI'} />
              <div className=" row justify-content-center">
                <Content className="row align-items-center col-12 col-lg-8 col-xxl-7">
                  <Biographie />
                  <Experience />
                </Content>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default APropos
/**col-sm-10 col-lg-8  col-xl-6  */
