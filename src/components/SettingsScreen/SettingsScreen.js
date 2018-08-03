

import React from 'react';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import AdsConfig from './configs/AdsConfig'
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
  TextInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import GeneralConfig from './configs/GeneralConfig'
import DrawerConfig from './configs/DrawerConfig'
import HomeScreen from './configs/HomeScreen'
import LoginScreen from './configs/LoginScreen'
import ContactScreen from './configs/ContactScreen'


import DetailsScreen from './configs/DetailsScreen'
import ListScreen from './configs/ListScreen'
import NotConnectedConfig from './configs/NotConnectedConfig'
import {callGetApi,callPostApi,callPatchApi,fetchData,fetchConfig} from '../../services/APIservice'
import Switch from '../Switch'
import TextField from '../TextField'
import ColorPicker from '../ColorPicker'
import Teaser from './configs/Teaser'

class SettingsScreen extends React.Component {
  constructor(props){
    super(props)
    this.saveConfig = this.saveConfig.bind(this)
    this.state ={ isVisible : false }
    fetchConfig('MobAppConfig','prod').then((res)=>{
      this.props.dispatch({type : 'SET_CONFIG', data : res.value})
    }).catch(err => console.log(err))
  }

  check = () => {
    console.log('checkx')
      console.log(this.props.config)
  }

  onDismiss = () => {
    this.setState({isVisible : ! this.state.isVisible})
  }

  saveConfig = () => {
    var conf = {
      uuid : 'MobAppConfig',
      env : 'prod',
      value : this.props.config
    };
    callPatchApi(`http://pixelprice.co.uk/config/${conf.uuid}/${conf.env}`,{
      env: conf.env,
      value : conf.value
    }).then(()=>{
    this.setState({isVisible : true})
    setTimeout(() => this.setState({isVisible : false}), 1500);
    }).catch(err=>console.log(err))
  }

  render() {
    const settings =  (
      <div className="animated fadeIn">
        <Row>
          <Col md="6" xs="12" sm="6">
            <HomeScreen />
            <Card>
              <CardHeader>
                <strong>Quit Confirmation Config </strong>
              </CardHeader>
              <CardBody>
                <TextField
                      label ="Title"
                      value={this.props.config ? this.props.config.content.QuitMessage.title : ''}
                      placeholder="Popup Title"
                      action="SET_QUIT_TITLE" />

                    <TextField
                      label ="Body"
                      value={this.props.config ? this.props.config.content.QuitMessage.body: ''}
                      placeholder="Popup Body"
                      action="SET_QUIT_BODY" />

                      <TextField
                        label ="Button Label"
                        value={this.props.config ? this.props.config.content.QuitMessage.OKbtn : ''}
                        placeholder="Button Label"
                        action="SET_QUIT_OKBTN" />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <strong>Server Configuration</strong>
              </CardHeader>
              <CardBody>
                <TextField
                      label ="URL"
                      value={this.props.config ? this.props.config.server.url : ''}
                      action="SET_SERVER_URL" />

                    <TextField
                      label ="Port"
                      value={this.props.config ? this.props.config.server.port : ''}
                      action="SET_SERVER_PORT" />

                      <TextField
                        label ="Backup Server URL"
                        value={this.props.config ? this.props.config.server.backupURL : ''}
                        action="SET_SERVER_BACKUPURL" />
              </CardBody>
            </Card>
            <DetailsScreen
              label = "Administrative Situation Config"
              titleValue={this.props.config ? this.props.config.content.AdminScreen.title : ''}
              color={this.props.config ? this.props.config.content.AdminScreen.headerColor : ''}
              firstHeaderTitle = { this.props.config ? this.props.config.content.AdminScreen.header1Title : '' }
              secondHeaderTitle = { this.props.config ? this.props.config.content.AdminScreen.header2Title : '' }
              code = "ADMIN"
            />

            <DetailsScreen
              label = "Financial Situation Config"
              titleValue={this.props.config ? this.props.config.content.FinanScreen.title : ''}
              color={this.props.config ? this.props.config.content.FinanScreen.headerColor : ''}
              firstHeaderTitle = { this.props.config ? this.props.config.content.FinanScreen.header1Title : '' }
              secondHeaderTitle = { this.props.config ? this.props.config.content.FinanScreen.header2Title : '' }
              code = "FINAN"
            />
            <ListScreen
              label = "Familly Situation Config"
              titleValue={this.props.config ? this.props.config.content.FamScreen.title : ''}
              color={this.props.config ? this.props.config.content.FamScreen.headerColor : ''}
              code = "FAM"
            />

            <ListScreen
              label = "Actes Situation Config"
              titleValue={this.props.config ? this.props.config.content.ActesScreen.title : ''}
              color={this.props.config ? this.props.config.content.ActesScreen.headerColor : ''}
              code = "ACTES"
            />
            <DrawerConfig />
            <NotConnectedConfig />
          </Col>

          <Col md="6" xs="12" sm="6">
            <GeneralConfig />
            <AdsConfig label = "Global Ads Config " />
            <LoginScreen />
            <Card>
              <CardHeader>
                <strong>Rate us Popup Config </strong>
              </CardHeader>
              <CardBody>
                <TextField
                      label ="Title"
                      value={this.props.config ? this.props.config.content.Rate.title : ''}
                      placeholder="Popup Title"
                      action="SET_RATE_TITLE" />

                    <TextField
                      label ="Body"
                      value={this.props.config ? this.props.config.content.Rate.body: ''}
                      placeholder="Popup Body"
                      action="SET_RATE_BODY" />

                      <TextField
                        label ="Button Label"
                        value={this.props.config ? this.props.config.content.Rate.OKbtn : ''}
                        placeholder="Button Label"
                        action="SET_RATE_OKBTN" />
              </CardBody>
            </Card>
            <ContactScreen label = "Contact Screen Config" />


          </Col>
        </Row>
      </div>
    )

    const alert = (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        Successfully Saved. Well Done !
      </Alert>
    )

    const btn = (
        <Button color ="success" onClick={this.saveConfig}>
            Save Configuration
        </Button>
    )

    return (
      <div>
      <div className="animated fadeIn" style={{margin : '20px'}} >
        <Row>
              {btn}
        </Row>
      </div>
      <div className="animated fadeIn" style={{marginLeft : '20px'}} >
        <Row>
            {(!this.state.isVisible) ? settings : alert}
        </Row>
      </div>
    </div>




    )
  }
}

function mapStateToProps(state) {
    return {
      config : state.config
    };
  }

export default connect(mapStateToProps)(SettingsScreen);
