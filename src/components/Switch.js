import React, { Component } from 'react';
import {
  Col,
  FormGroup,
  Label,
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import {fetchData} from '../services/APIservice'


class Switch extends Component {
  constructor(props){
    super(props)
  }

  toggle = () => {
    this.props.dispatch({
        type : this.props.action,
        data : ! this.props.value
      });
  }

render(){
  return (
    <FormGroup row>
      <Col md="5">
        <Label>{this.props.label}</Label>
      </Col>
      <Col xs="12" md="7">
        <AppSwitch
          onChange={this.toggle.bind(this)}
          className={'mx-1'}
          color={this.props.color ? this.props.color : 'success'}
          checked ={ this.props.value }
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

export default connect(mapStateToProps)(Switch);
