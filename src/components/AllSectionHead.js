import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/color'

const SectionHead = styled.h3`
  text-transform: uppercase;
  text-align: center;
  span {
    color: ${colors.secondColor};
  }
`
function AllSectionHead({ title, designation, paragraph }) {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <SectionHead className=" col-12">
          {title} <span>{designation}</span>
        </SectionHead>
        <hr className="text-center col-3 col-md-1 " />
        {paragraph && paragraph}
      </div>
    </React.Fragment>
  )
}

export default AllSectionHead
