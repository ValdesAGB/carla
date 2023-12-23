import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/color'

const Input = styled.input`
  border: none;
  background-color: ${colors.inputBgColor};
  color: white;
`

const Textarea = styled.textarea`
  border: none;
  background-color: ${colors.inputBgColor};
  color: white;
`
const SubmitBtnContainer = styled.div`
  text-align: end;
`
const SubmitBtn = styled.button`
  background-color: ${colors.secondColor};
  color: white;
  font-weight: 600;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
`

function ContactForm() {
  return (
    <React.Fragment>
      <form className="row">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">
            Ton nom
          </label>
          <Input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="mail" className="form-label">
            Ton E-mail
          </label>
          <Input
            type="email"
            className="form-control"
            id="mail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Ton message
          </label>
          <Textarea className="form-control" rows={5}></Textarea>
        </div>
        <SubmitBtnContainer>
          <SubmitBtn type="submit" onClick={(e) => e.preventDefault()}>
            Envoyer
          </SubmitBtn>
        </SubmitBtnContainer>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
