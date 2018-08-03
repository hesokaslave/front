

import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import { SketchPicker,Github,Circle,ChromePicker } from 'react-color';

import {
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
import Teaser from './Teaser'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

    render(){
      return (
        <Card>
          <CardHeader>
            <strong>Home Screen Configuration</strong>
          </CardHeader>
          <CardBody>
            <TextField
              label ="Home Screen Title"
              value={this.props.config ? this.props.config.content.HomeScreen.title : ''}
              placeholder="Home Screen Title"
              action="SET_HOMESCREEN_TITLE" />
            <TextField
              label ="Resume Teaser Header"
              value={this.props.config ? this.props.config.content.HomeScreen.ResumeTeaser.title : ''}
              placeholder="App Ver."
              action="SET_TEASER_TITLE_RESUME" />
            <TextField
              label ="Resume Teaser Footer"
              value={this.props.config ? this.props.config.content.HomeScreen.ResumeTeaser.footer : ''}
              placeholder="Footer"
              action="SET_TEASER_FOOTER_RESUME" />

            <Teaser  label = "Administrative Teaser Config"
                      title = {this.props.config ? this.props.config.content.HomeScreen.AdminTeaser.title : ''}
                      body = {this.props.config ? this.props.config.content.HomeScreen.AdminTeaser.body : ''}
                      code ="ADMIN"
                      btnLabel={this.props.config ? this.props.config.content.HomeScreen.AdminTeaser.btnLabel : ''}
                      color={this.props.config ? this.props.config.content.HomeScreen.AdminTeaser.btnColor : ''}
            />
            <Teaser  label = "Financial Teaser Config"
                      title = {this.props.config ? this.props.config.content.HomeScreen.FinanTeaser.title : ''}
                      body = {this.props.config ? this.props.config.content.HomeScreen.FinanTeaser.body : ''}
                      code ="FINAN"
                      btnLabel={this.props.config ? this.props.config.content.HomeScreen.FinanTeaser.btnLabel : ''}
                      color={this.props.config ? this.props.config.content.HomeScreen.FinanTeaser.btnColor : ''}
            />
            <Teaser  label = "Familly Teaser Config"
                      title = {this.props.config ? this.props.config.content.HomeScreen.FamTeaser.title : ''}
                      body = {this.props.config ? this.props.config.content.HomeScreen.FamTeaser.body : ''}
                      code ="FAM"
                      btnLabel={this.props.config ? this.props.config.content.HomeScreen.FamTeaser.btnLabel : ''}
                      color={this.props.config ? this.props.config.content.HomeScreen.FamTeaser.btnColor : ''}
            />
            <Teaser  label = "Actes Teaser Config"
                      title = {this.props.config ? this.props.config.content.HomeScreen.ActesTeaser.title : ''}
                      body = {this.props.config ? this.props.config.content.HomeScreen.ActesTeaser.body : ''}
                      code ="ACTES"
                      btnLabel={this.props.config ? this.props.config.content.HomeScreen.ActesTeaser.btnLabel : ''}
                      color={this.props.config ? this.props.config.content.HomeScreen.ActesTeaser.btnColor : ''}
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

export default connect(mapStateToProps)(HomeScreen);
