import React from 'react'
import styled from 'styled-components'
import { alerts } from '../data'
import { colors } from '../untils/color'

const Card = styled.div`
  width: 100%;
  border: 1px solid ${colors.blogCardBorderColor};
  padding: 0;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.5s 0.2s ease-in-out, transform 0.8s;
  &:hover {
    box-shadow: 0 0 10px ${colors.secondColor};
    transform: translateY(-10px);
  }
`

const Cover = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.8s;
  ${Card}:hover & {
    transform: scale(1.15);
  }
`

const CardBody = styled.div`
  padding: 10px;
`

const Title = styled.h5`
  font-weight: bolder;
`

const Paragraph = styled.p`
  font-size: 0.95em;
  font-weight: 400;
`

function BlogCard({ id, cover, title, text }) {
  return (
    <React.Fragment>
      <Card className="card" onClick={() => alert(alerts)}>
        <Cover src={cover} className="card-img-top" alt={id} />
        <CardBody>
          <Title className="card-title ">{title}</Title>

          <Paragraph className="card-text">
            {text && text.slice(0, 90)}...
          </Paragraph>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default BlogCard
