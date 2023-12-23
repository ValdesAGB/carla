import React from 'react'
import styled from 'styled-components'
import { HeaderContent } from '../data'
import { colors } from '../untils/color'

const Container = styled.header`
  position: fixed;
  z-index: 3;
  top: 35%;
  right: -15px;

  @media (min-width: 576px) {
    top: 50%;
  }

  @media (min-width: 768px) {
    top: 10%;
    cursor: pointer;
    transform: translateX(25px);
    transition: all 0.8s;
    &:hover {
      transform: translateX(-10px);
    }
  }
  @media (min-width: 992px) {
    top: 20%;
  }
  @media (min-width: 1200px) {
    top: 10%;
  }
  @media (min-width: 1400px) {
    top: 25%;
  }
`

const ToggleBtn = styled.button`
  background-color: ${colors.mainColor};
  border: 0;
  border-radius: 0;
`

const Toggle = styled.i`
  font-size: 2em;
  color: white;
`

const OffcanvasBody = styled.div`
  background-color: ${colors.mainColor};
  @media (min-width: 768px) {
    background-color: ${colors.offcanvasBodyBgColor};
    transition: all 0.8s 0.3s;
    ${Container} : hover & {
      background-color: ${colors.offcanvasBodyHoverBgColor};
    }
  }
`

const MenuList = styled.ul`
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  color: white;
  padding: 1rem;
  list-style: none;
`

const Menu = styled.li`
  margin-top: 2rem;
  margin-bottom: 2rem;

  .icone {
    display: none;
    transition: color 0.7s 0.2s, transform 0.6s;
    &:hover {
      color: ${colors.secondColor};
      transform: translateY(-5px);
    }
    @media (min-width: 768px) {
      display: block;
    }
    @media (min-width: 992px) {
      font-size: 1.2em;
    }

    @media (min-width: 1200px) {
      font-size: 1.5em;
    }
  }

  .text {
    border: solid 1px ${colors.secondColor};
    border-radius: 5px;
    font-size: 0.6em;
    display: block;
    padding: 10px 0;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

function Header() {
  return (
    <React.Fragment>
      <Container>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <ToggleBtn
              className="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
            >
              <Toggle className="bi bi-list" />
            </ToggleBtn>

            <div
              className="offcanvas offcanvas-start w-75"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  MENU
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <OffcanvasBody className="offcanvas-body">
                <MenuList>
                  {HeaderContent.map(({ id, href, icone, text }) => (
                    <Menu className="nav-item" key={id}>
                      <a
                        className="nav-link col-12 col-sm-6 col-md-12 mx-auto"
                        href={`#${href}`}
                      >
                        <i className={` bi ${icone} icone `} />
                        <span className="text ">{text.toUpperCase()}</span>
                      </a>
                    </Menu>
                  ))}
                </MenuList>
              </OffcanvasBody>
            </div>
          </div>
        </nav>
      </Container>
    </React.Fragment>
  )
}

export default Header
