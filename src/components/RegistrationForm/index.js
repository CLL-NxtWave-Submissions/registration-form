import {Component} from 'react'

import './index.css'

export default class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isSubmissionSuccess: false,
  }

  onFirstNameInputBlur = firstNameBlurEvent => {
    const changedFirstName = firstNameBlurEvent.target.value
    this.setState({
      firstName: changedFirstName,
    })
  }

  onLastNameInputBlur = lastNameBlurEvent => {
    const changedLastName = lastNameBlurEvent.target.value
    this.setState({
      lastName: changedLastName,
    })
  }

  onRegistrationFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault()

    const {firstName, lastName} = this.state
    const isInputFirstNameEmpty = firstName === ''
    const isInputLastNameEmpty = lastName === ''
    const isCurrentSubmissionSuccess = firstName !== '' && lastName !== ''

    this.setState({
      isFirstNameEmpty: isInputFirstNameEmpty,
      isLastNameEmpty: isInputLastNameEmpty,
      isSubmissionSuccess: isCurrentSubmissionSuccess,
    })
  }

  onSubmitAnotherResponse = () =>
    this.setState({
      firstName: '',
      lastName: '',
      isFirstNameEmpty: false,
      isLastNameEmpty: false,
      isSubmissionSuccess: false,
    })

  render() {
    const {
      firstName,
      lastName,
      isFirstNameEmpty,
      isLastNameEmpty,
      isSubmissionSuccess,
    } = this.state

    return (
      <div className="registration-form-bg-container">
        <h1 className="registration-form-header">Registration</h1>
        {!isSubmissionSuccess ? (
          <form
            className="registration-form-input-content-container"
            onSubmit={this.onRegistrationFormSubmit}
          >
            <div className="registration-form-input-container">
              <label
                className="registration-form-input-label"
                htmlFor="first-name"
              >
                FIRST NAME
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                className={`registration-form-input ${
                  isFirstNameEmpty && 'missing-input'
                }`}
                // value={firstName}
                onBlur={this.onFirstNameInputBlur}
              />
              {isFirstNameEmpty && (
                <p className="missing-input-message">Required</p>
              )}
            </div>
            <div className="registration-form-input-container">
              <label
                className="registration-form-input-label"
                htmlFor="last-name"
              >
                LAST NAME
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className={`registration-form-input ${
                  isLastNameEmpty && 'missing-input'
                }`}
                // value={lastName}
                onBlur={this.onLastNameInputBlur}
              />
              {isLastNameEmpty && (
                <p className="missing-input-message">Required</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="registration-success-content-container">
            <img
              className="submission-success-icon-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="submission-success-message">Submitted Successfully</p>
            <button type="button" className="submit-button">
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
