

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'

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
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'

class DetailsScreen extends React.Component {

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
            value={this.props.titleValue}
            placeholder={this.props.titlePlaceholder}
            action={"SET_DETAILS_SCREEN_TITLE_"+code} />

          <ColorPicker
            label ="Header Color"
            value={this.props.color}
            action={"SET_DETAILS_SCREEN_HEADER_COLOR_" + code} />

          <TextField
            label ="First Header Title "
            value={this.props.firstHeaderTitle}
            placeholder="First Header Title"
            action={"SET_DETAILS_SCREEN_FIRST_HEADER_" + code} />

          <TextField
            label ="Second Header Title"
            value={this.props.secondHeaderTitle}
            placeholder="Second Header Title"
            action={"SET_DETAILS_SCREEN_SECOND_HEADER_" + code} />

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

export default connect(mapStateToProps)(DetailsScreen);
