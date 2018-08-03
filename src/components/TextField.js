import React, { Component } from 'react';
import {
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'


class TextField extends Component {
  constructor(props){
    super(props)
    this.state={
      text : this.props.value
    }
  }

render(){
  const action = this.props.action;
  return (
    <FormGroup row>
      <Col md="5">
        <Label>{this.props.label}</Label>
      </Col>
      <Col xs="12" md="7">
        <Input  type="text"
                id={this.props.inputID}
                name={this.props.inputID}
                placeholder={this.props.placeholder}
                onChange={
                  (evt)=>{
                    this.setState({text :evt.target.value })
                    this.props.dispatch({type : action, data : evt.target.value})
                  }
                }
                value={this.props.value == '' ? this.state.text : this.props.value}
         />
      </Col>
    </FormGroup>
  )
}
}
function mapStateToProps(state) {
    return {
      config : state.config
    };
  }

export default connect(mapStateToProps)(TextField);
