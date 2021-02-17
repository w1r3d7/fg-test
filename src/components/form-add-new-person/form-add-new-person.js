import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {Button, Col, Form} from 'react-bootstrap';
import {EMAIL_REG, NUMBER_REG, PHONE_REG} from '../../consts';
import {setNewPerson} from '../../store/actions';



class FormAddNewPerson extends Component {
  constructor() {
    super();

    this.state = {
      validation: {
        idValid: true,
        emailValid: true,
        phoneValid: true,
      },
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      formValid: false,
      isFormClose: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {validation} = this.state;
    if (prevState.validation !== validation) {
      this.checkFormValidation();
    }
  }

  handleUserInput = ({target: {name, value}}) => {
    this.setState({[name]: value}, () => this.validateField(name, value));
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    const {setNewPersonAction} = this.props;
    const {id, firstName, lastName, email, phone} = this.state;

    const person = {
      id,
      firstName,
      lastName,
      email,
      phone,
      description: 'lorem',
      address: {
        streetAddress: '5078 Ante Ave',
        city: 'Semarang',
        state: 'LA',
        zip: '89833'
      }
    };

    setNewPersonAction(person);
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isFormClose: true,
    });
  }

  checkFormValidation = () => {
    const {validation} = this.state;
    if (Object.values(validation).every((it) => !!it)) {
      return this.setState({formValid: true});
    }

    return this.setState({formValid: false});
  }

  validateField = (name, value) => {
    const {validation} = this.state;
    const {emailValid, phoneValid, idValid} = validation;
    let validateEmail;
    let validatePhone;
    let validateId;

    switch (name) {
      case 'email':
        validateEmail = value.match(EMAIL_REG) !== null;
        if (validateEmail !== emailValid) {
          this.setState({validation: {
            ...validation,
            emailValid: validateEmail
          }});
        }
        break;
      case 'phone':
        validatePhone = value.match(PHONE_REG) !== null;
        if (validatePhone !== phoneValid) {
          this.setState({validation: {
              ...validation,
              phoneValid: validatePhone
            }});
        }
        break;
      case 'id':
        validateId = value.match(NUMBER_REG) !== null;
        if (validateId !== idValid) {
          this.setState({validation: {
              ...validation,
              idValid: validateId
            }});
        }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      id,
      firstName,
      lastName,
      email,
      phone,
      validation,
      formValid,
      isFormClose
    } = this.state;
    const {
      idValid,
      emailValid,
      phoneValid
    } = validation;

    if (isFormClose) {
      return (
          <Button
              className="mx-auto d-block m-5"
              variant="primary"
              onClick={() => this.setState({isFormClose: false})}>
            Add new Person
          </Button>
      );
    }

    return (
      <Form style={{marginBottom: 20}} onSubmit={this.handleFormSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="id">
              <Form.Label>id</Form.Label>
              <Form.Control
                  onChange={this.handleUserInput}
                  type="text"
                  name="id"
                  placeholder="Enter id"
                  isInvalid={!idValid}
                  value={id}
                  required
              />
              <Form.Control.Feedback type="invalid">
                Only number
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                  onChange={this.handleUserInput}
                  type="text"
                  name="firstName"
                  placeholder="Enter First name"
                  value={firstName}

                  required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                  onChange={this.handleUserInput}
                  type="text"
                  name="lastName"
                  placeholder="Enter Last name"
                  value={lastName}
                  required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                  onChange={this.handleUserInput}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  isInvalid={!emailValid}
                  required
              />
              <Form.Control.Feedback type="invalid">
                Wrong email address
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <NumberFormat
                  onChange={this.handleUserInput}
                  className={`form-control ${phoneValid ? '' : 'is-invalid'}`}
                  value={phone}
                  id="phone"
                  name="phone"
                  format="+7 (###) ###-####"
                  mask="_"
                  allowEmptyFormatting
              />
              <Form.Control.Feedback type="invalid">
                Wrong phone number
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Button
            style={{margin: '0 auto'}}
            variant="primary"
            type="submit"
            disabled={!formValid}
          >
            Add Person
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

FormAddNewPerson.propTypes = {
  setNewPersonAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setNewPersonAction: (person) => dispatch(setNewPerson(person))
});


export default connect(null, mapDispatchToProps)(FormAddNewPerson);
