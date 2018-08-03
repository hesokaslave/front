

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

class ListScreen extends React.Component {

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
              action={"SET_LIST_SCREEN_TITLE_"+code} />

            <ColorPicker
              label ="Header Color"
              value={this.props.color}
              action={"SET_LIST_SCREEN_HEADER_COLOR_" + code} />
          </CardBody>
        </Card>
      )
    }
}
function mapStateToProps(state) {
    return {
        config : state.general,
    };
  }

export default connect(mapStateToProps)(ListScreen);
