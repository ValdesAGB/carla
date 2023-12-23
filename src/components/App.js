import React from 'react'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import { createGlobalStyle } from 'styled-components'
import Galerie from '../pages/Galerie'
import APropos from '../pages/APropos'
import Accueil from '../pages/Accueil'
import Header from './Header'
import { BlogProvider } from '../untils/context'
import Footer from './Footer'
import { polices } from '../untils/police'

const GlobalStyle = createGlobalStyle`
*{
  font-family : ${polices.main};
}
`
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BlogProvider>
        <Header />
        <main className="row">
          <Accueil />
          <APropos />
          <Galerie />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </BlogProvider>
    </React.Fragment>
  )
}

export default App
