import React, { Component } from 'react';
import { Alert,Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup,Image, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {  isVisible : false  }
  }

  login =  () => {
    if(this.props.state.username === 'admin' &&  this.props.state.password === '06038' )
    {
      this.props.dispatch({type : 'SET_LOGGED_IN', data : true })
    }
    else {
      this.setState({isVisible : true})
      this.props.dispatch({type : 'SET_LOGGED_IN', data : false })
    }
  }

  onDismiss = () => {
    this.setState({isVisible : ! this.state.isVisible})
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Hi, Aissam !</h1>
                      <p className="text-muted">Sign In to your App</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username"
                            onChange={(evt) => this.props.dispatch({type : 'SET_USERNAME' , data : evt.target.value})}
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password"
                            onChange={(evt) => this.props.dispatch({type : 'SET_PASSWORD' , data : evt.target.value})}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button onClick={this.login} color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="6">
                          <Alert style={{marginTop : '50px',width : '300px'}} color="danger" isOpen={this.state.isVisible} toggle={this.onDismiss}>

                              <div>Login Failed</div>
                          </Alert>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                        <img src={require('./Images/logoApp.png')} />
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      config : state.config,
      state : state
    };
  }

export default connect(mapStateToProps)(Login);
