

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import { SketchPicker,Github ,CirclePicker,ChromePicker,Twitter } from 'react-color';
import {callGetApi,fetchData} from '../../../services/APIservice'
import Switch from '../../Switch'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'


import {
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

class LoginScreenConfig extends React.Component {

  constructor(props){
    super(props);
  }
    render(){
      return (
        <Card>
          <CardHeader>
            <strong>Login Screen Configuration</strong>
          </CardHeader>
          <CardBody>
            <TextField
              label ="Username Placeholder"
              placeholder="Login Placeholder"
              value={this.props.config ? this.props.config.loginScreen.ppr_placeholder : ''}
              action="SET_LOGINSCREEN_USERNAME_PLACEHOLDER" />

            <TextField
              label ="Password Placeholder"
              value={this.props.config ? this.props.config.loginScreen.pass_placeholder : ''}
              placeholder="PAssword Placeholder"
              action="SET_LOGINSCREEN_PASS_PLACEHOLDER" />

            <TextField
              label ="Button Label"
              value={this.props.config ? this.props.config.loginScreen.connBtnLabel : ''}
              placeholder="Button Label"
              action="SET_LOGINSCREEN_BTNLABEL" />

            <ColorPicker
              label ="Button Color"
              placeholder="PlaceHolder"
              action="SET_LOGINSCREEN_BTNCOLOR"
              value={this.props.config ? this.props.config.loginScreen.connBtnColor : ''}
            />

            <TextField
              label ="Login Error Title"
              value={this.props.config ? this.props.config.loginScreen.IDError.title : ''}
              placeholder="Button Label"
              action="SET_LOGINSCREEN_ERROR_TITLE"
            />

            <TextField
              label ="Login Error Body"
              value={this.props.config ? this.props.config.loginScreen.IDError.body : ''}
              placeholder="Button Label"
              action="SET_LOGINSCREEN_ERROR_BODY"
            />

            <TextField
              label ="Login Error Button Label"
              value={this.props.config ? this.props.config.loginScreen.IDError.btn : ''}
              placeholder="Button Label"
              action="SET_LOGINSCREEN_ERROR_BUTTON"
            />
          </CardBody>
        </Card>
      )
    }
}
function mapStateToProps(state) {
    return {
      config : state.config
    };
  }

export default connect(mapStateToProps)(LoginScreenConfig);
