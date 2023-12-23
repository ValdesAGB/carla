import React, { useContext } from 'react'
import { BlogContext } from '../untils/context'
import styled from 'styled-components'
import { colors } from '../untils/color'

const Buttton = styled.button`
  border: solid 2px ${colors.secondColor};
  background-color: transparent;
  border-radius: 10px;
  width: 90%;
  font-weight: 500;
  transition: background-color 500ms, color 500ms 200ms;
  &:hover {
    color: white;
    background-color: ${colors.secondColor};
  }
  padding: 5px 10px;
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`

function BlogBtn() {
  const { all, setAll } = useContext(BlogContext)
  return (
    <React.Fragment>
      <div className="row justify-content-end">
        <div className="col-6  col-sm-4 col-md-3 col-lg-2">
          <Buttton className=" " onClick={() => setAll(all ? false : true)}>
            {all ? 'Voir moins' : 'Voir plus'}
          </Buttton>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BlogBtn
