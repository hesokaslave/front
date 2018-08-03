

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
import {callGetApi,fetchData} from '../../../services/APIservice'
import Switch from '../../Switch'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'

class Teaser extends React.Component {
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
              placeholder="Teaser Title"
              value={this.props.title}
              action={'SET_TEASER_TITLE_'+ code }
            />

            <TextField
              label ="Body"
              placeholder="Teaser Body"
              value={this.props.body}
              action={'SET_TEASER_BODY_'+code}
            />

            <TextField
              label ="Button Label"
              placeholder="Button Label"
              value={this.props.btnLabel}
              action={'SET_TEASER_BTNLABEL_'+code}
            />

            <ColorPicker
              label ="Button Color"
              action={"SET_TEASER_BTNCOLOR_"+code}
              value={this.props.color}
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

export default connect(mapStateToProps)(Teaser);
