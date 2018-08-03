

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'
import Switch from '../../Switch'

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

class AdConfig extends React.Component {

  constructor(props){
    super(props)
  }

    render(){
      const code = this.props.code
      return  (
        <Card>
          <CardHeader>
            <strong>{this.props.label}</strong>
          </CardHeader>
          <CardBody>
            <Switch
              label ="Enable Ad 1  ?"
              value={this.props.enableAd1}
              action={"SET_ENABLE_AD1_"+code} />

            <TextField
              label ="Ad 1 adUnitID"
              value={this.props.ad1adUnitID}
              action={"SET_ADUNITID_AD1_"+code}
            />
            <TextField
              label ="Ad 1 Format"
              value={this.props.ad1Format}
              action={"SET_FORMAT_AD1_"+code}
            />
            <Switch
              label ="Enable Ad 2  ?"
              value={this.props.enableAd2}
              action={"SET_ENABLE_AD2_"+code} />

            <TextField
              label ="Ad 2 adUnitID"
              value={this.props.ad2adUnitID}
              action={"SET_ADUNITID_AD2_"+code}
            />
            <TextField
              label ="Ad 2 Format"
              value={this.props.ad2Format}
              action={"SET_FORMAT_AD2_"+code}
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

export default connect(mapStateToProps)(AdConfig);
