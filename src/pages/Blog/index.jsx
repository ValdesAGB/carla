import React, { useContext } from 'react'
import { blogElemens } from '../../data'
import BlogCard from '../../components/BlogCard'
import AllSectionHead from '../../components/AllSectionHead'
import styled from 'styled-components'
import { BlogContext } from '../../untils/context'
import BlogBtn from '../../components/BlogBtn'

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

const BlogContainer = styled.div`
  margin: 0.75rem 0;
  @media (max-width: 1199px) {
    overflow: auto;
    height: 700px;
  }
`

const BlogContent = styled.div`
  margin: 20px 0;
`

function Blog() {
  const { all } = useContext(BlogContext)
  const item = all ? blogElemens.length : 4
  return (
    <React.Fragment>
      <Section id="blog">
        <div>
          <div className="container">
            <AllSectionHead title={'Mon'} designation={'Blog'} />
            <BlogContainer className="row justify-content-center">
              {blogElemens.slice(0, item).map(({ id, cover, title, text }) => (
                <BlogContent
                  key={id}
                  className="col-12 col-sm-7 col-md-6 col-xl-3"
                >
                  <BlogCard id={id} cover={cover} title={title} text={text} />
                </BlogContent>
              ))}
            </BlogContainer>
            <BlogBtn />
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Blog
