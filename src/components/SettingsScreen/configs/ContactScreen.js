

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

class ContactScreen extends React.Component {

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
            <TextField
              label ="Title"
              value={this.props.config ? this.props.config.content.ContactScreen.title : ''}
              placeholder="Name Placeholder"
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Name Placeholder"
              value={this.props.config ? this.props.config.content.ContactScreen.namePlaceholder : ''}
              placeholder={"Name Placeholder"}
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Telephone Placeholder"
              value={this.props.config ? this.props.config.content.ContactScreen.telPlaceholder : ''}
              placeholder="Telephone Placeholder"
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="E-mail Placeholder"
              value={this.props.config ? this.props.config.content.ContactScreen.emailPlaceholder : ''}
              placeholder={"E-mail Placeholder"}
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Message Placeholder"
              value={this.props.config ? this.props.config.content.ContactScreen.messagePlaceholder : ''}
              placeholder="Message/Suggestion"
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Confirmation Popup Title"
              value={this.props.config ? this.props.config.content.ContactScreen.confirmation.title : ''}
              placeholder="Popup Title"
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Confirmation Popup Body"
              value={this.props.config ? this.props.config.content.ContactScreen.confirmation.body : ''}
              placeholder="Popup Body"
              action={"SET_LIST_SCREEN_TITLE_"+code}
            />
            <TextField
              label ="Confirmation Popup Button"
              value={this.props.config ? this.props.config.content.ContactScreen.confirmation.OKbtn : ''}
              placeholder="Popup Button Label"
              action={"SET_LIST_SCREEN_TITLE_"+code}
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

export default connect(mapStateToProps)(ContactScreen);
