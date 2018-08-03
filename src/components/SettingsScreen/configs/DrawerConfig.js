

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

class DrawerConfig extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return  (
      <Card>
        <CardHeader>
          <strong>Drawer Configuration</strong>
        </CardHeader>
        <CardBody>
          <TextField
            label ="Title"
            placeholder="App Title"
            value={this.props.config ? this.props.config.content.drawer.appTitle : ''}
            action="SET_DRAWER_APP_TITLE" />

          <TextField
            label ="Home Menu Item"
            value={this.props.config ? this.props.config.content.drawer.home : ''}
            placeholder="Home Label"
            action="SET_DRAWER_HOME_LABEL" />

          <TextField
            label ="Situation Menu Item"
            value={this.props.config ? this.props.config.content.drawer.situation : ''}
            placeholder="Button Label"
            action="SET_DRAWER_SITUATION_LABEL" />

          <TextField
            label ="Finance Menu Item"
            value={this.props.config ? this.props.config.content.drawer.salaire : ''}
            placeholder="Finance Label"
            action="SET_DRAWER_FINANCE_LABEL" />

          <TextField
            label ="Familly Menu Item"
            value={this.props.config ? this.props.config.content.drawer.famille : ''}
            placeholder="Familly Label"
            action="SET_DRAWER_FAMILLY_LABEL" />

          <TextField
            label ="Actes Menu Item"
            value={this.props.config ? this.props.config.content.drawer.actes : ''}
            placeholder="Actes Label"
            action="SET_DRAWER_ACTES_LABEL" />

          <TextField
            label ="Contact Menu Item"
            value={this.props.config ? this.props.config.content.drawer.contact : ''}
            placeholder="Contact Label"
            action="SET_DRAWER_CONTACT_LABEL" />

          <TextField
            label ="Rating Menu Item"
            value={this.props.config ? this.props.config.content.drawer.rateApp : ''}
            placeholder="Rating Label"
            action="SET_DRAWER_RATING_LABEL" />

          <TextField
            label ="App Version"
            value={this.props.config ? this.props.config.content.drawer.appVersion : ''}
            placeholder="App Ver."
            action="SET_DRAWER_APP_VERSION" />
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

export default connect(mapStateToProps)(DrawerConfig);
