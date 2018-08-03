

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'
import {
  Alert,
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';


class NotConnectedConfig extends React.Component {

  constructor(props){
    super(props)
}

    render(){
      const code = this.props.code
      return  (
        <Card>
          <CardHeader>
            <strong>Not Connected View Config</strong>
          </CardHeader>
          <CardBody>
            <TextField
              label ="Message 1"
              value={this.props.config ? this.props.config.notConnected.msg1 : ''}
              action={"SET_NOTCONNECTED_MSG1"}
            />
            <TextField
              label ="Message 2"
              value={this.props.config ? this.props.config.notConnected.msg2 : ''}
              action={"SET_NOTCONNECTED_MSG2"}
            />
            <TextField
              label ="Button Label"
              value={this.props.config ? this.props.config.notConnected.btn : ''}
              action={"SET_NOTCONNECTED_BTNLABEL"}
            />
            <ColorPicker
              label ="Button Color"
              action={"SET_NOTCONNECTED_BTNCOLOR"}
              value={this.props.config ? this.props.config.notConnected.btnColor : ''}
            />
          </CardBody>
        </Card>
      )
    }
}
function mapStateToProps(state) {
    return {
        config : state.config,
    };
  }

export default connect(mapStateToProps)(NotConnectedConfig);
