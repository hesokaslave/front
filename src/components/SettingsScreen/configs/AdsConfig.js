

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
import AdConfig from './AdConfig'
class AdsConfig extends React.Component {

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
              label ="Enable Ads App-Wide ?"
              value={this.props.config ? this.props.config.ads.enable : false}
              action="SET_ADS_ENABLED" />

            <AdConfig code="HOME" label="Ads Config on HomeScreen"
                      enableAd1={this.props.config ? this.props.config.ads.HomeScreen.ad1 : true}
                      enableAd2= {this.props.config ? this.props.config.ads.HomeScreen.ad2 : false}
                      ad1adUnitID = {this.props.config ? this.props.config.ads.HomeScreen.ad1UnitID : ''}
                      ad2adUnitID = {this.props.config ? this.props.config.ads.HomeScreen.ad2UnitID : ''}
                      ad1Format = {this.props.config ? this.props.config.ads.HomeScreen.ad1Format : ''}
                      ad2Format = {this.props.config ? this.props.config.ads.HomeScreen.ad2Format : ''}
            />
            <AdConfig code="ADMIN" label="Ads Config on AdminScreen"
              enableAd1={this.props.config ? this.props.config.ads.AdminScreen.ad1 : false}
              enableAd2= {this.props.config ? this.props.config.ads.AdminScreen.ad2 : false}
              ad1adUnitID = {this.props.config ? this.props.config.ads.AdminScreen.ad1UnitID : ''}
              ad2adUnitID = {this.props.config ? this.props.config.ads.AdminScreen.ad2UnitID : ''}
              ad1Format = {this.props.config ? this.props.config.ads.AdminScreen.ad1Format : ''}
              ad2Format = {this.props.config ? this.props.config.ads.AdminScreen.ad2Format : ''}
            />
            <AdConfig code="FINAN" label="Ads Config on Finance Screen"
              enableAd1={this.props.config ? this.props.config.ads.FinanScreen.ad1 : false}
              enableAd2= {this.props.config ? this.props.config.ads.FinanScreen.ad2 : false}
              ad1adUnitID = {this.props.config ? this.props.config.ads.FinanScreen.ad1UnitID : ''}
              ad2adUnitID = {this.props.config ? this.props.config.ads.FinanScreen.ad2UnitID : ''}
              ad1Format = {this.props.config ? this.props.config.ads.FinanScreen.ad1Format : ''}
              ad2Format = {this.props.config ? this.props.config.ads.FinanScreen.ad2Format : ''}
            />
            <AdConfig code="FAM" label="Ads Config on Familly Screen"
              enableAd1={this.props.config ? this.props.config.ads.FamScreen.ad1 : true}
              enableAd2= {this.props.config ? this.props.config.ads.FamScreen.ad2 : true}
              ad1adUnitID = {this.props.config ? this.props.config.ads.FamScreen.ad1UnitID : ''}
              ad2adUnitID = {this.props.config ? this.props.config.ads.FamScreen.ad2UnitID : ''}
              ad1Format = {this.props.config ? this.props.config.ads.FamScreen.ad1Format : ''}
              ad2Format = {this.props.config ? this.props.config.ads.FamScreen.ad2Format : ''}
            />
            <AdConfig code="ACTES" label="Ads Config on Actes Screen"
              enableAd1={this.props.config ? this.props.config.ads.ActesScreen.ad1 : true}
              enableAd2= {this.props.config ? this.props.config.ads.ActesScreen.ad2 : true}
              ad1adUnitID = {this.props.config ? this.props.config.ads.ActesScreen.ad1UnitID : ''}
              ad2adUnitID = {this.props.config ? this.props.config.ads.ActesScreen.ad2UnitID : ''}
              ad1Format = {this.props.config ? this.props.config.ads.ActesScreen.ad1Format : ''}
              ad2Format = {this.props.config ? this.props.config.ads.ActesScreen.ad2Format : ''}
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

export default connect(mapStateToProps)(AdsConfig);
