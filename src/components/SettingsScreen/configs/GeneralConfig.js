

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import {callGetApi,fetchData} from '../../../services/APIservice'
import TextField from '../../TextField'
import ColorPicker from '../../ColorPicker'
import Switch from '../../Switch'

class GeneralConfig extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return  (
      <Card>
        <CardHeader>
          <strong>General Configuration</strong>
        </CardHeader>
        <CardBody>
              <Switch
                label ="is App Down ?"
                value={this.props.config ? this.props.config.isDown : false}
                action="SET_APP_IS_DOWN" />

              <TextField
                label ="App is Down Messsage"
                value={this.props.config ? this.props.config.isDownMessage : ''}
                placeholder="PlaceHolder"
                action="SET_APP_IS_DOWN_MESSAGE" />

                <TextField
                  label ="RH Website"
                  value={this.props.config ? this.props.config.websiteRH : ''}
                  placeholder="RH Website URL"
                  action="SET_RH_WEBSITE" />

                <TextField
                  label ="Contact URL"
                  value={this.props.config ? this.props.config.contactURL : ''}
                  placeholder="Messaging URL"
                  action="SET_CONTACT_URL" />

                <Switch
                  label ="Gather Usage Infos ?"
                  value={this.props.config ? this.props.config.getData : false}
                  action="SET_GET_DATA" />
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

export default connect(mapStateToProps)(GeneralConfig);
