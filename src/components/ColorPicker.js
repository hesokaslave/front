import React, { Component } from 'react';
import {
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { connect } from 'react-redux'
import { SketchPicker } from 'react-color';


class ColorPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      pickerVisible : false,
      color : ''
    };
  }

  handleChangeComplete = (color) => {
    const action = this.props.action;
    this.setState({ color: color.hex });
    this.props.dispatch({type : action, data : color.hex});
  };

  handleInputChange = (color) => {
    const action = this.props.action;
    this.setState({ color: color });
    this.props.dispatch({type : action, data : color});
  };

  togglePicker = () => {
    this.setState({pickerVisible : !this.state.pickerVisible})
  }

  componentDidMount(){
    this.setState({color : this.props.value})
  }

render(){
  const popover = {
    position: 'absolute',
    zIndex: '2',
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }
  const action = this.props.action;

  return (
    <FormGroup row>
      <Col md="5">
        <Label>{this.props.label}</Label>
      </Col>

      <Col xs="5" md="3">
        <Input style={{backgroundColor : this.props.value, color : 'white'}}
          onChange= {(evt)=>this.handleInputChange(evt.target.value)}
         value={this.props.value} type="text" id={this.props.inputID} name={this.props.inputID}/>
      </Col>
      <Col xs="3" md="2">
        <Button onClick={this.togglePicker} color={'primary'} >Pick Color</Button>
        {
          this.state.pickerVisible ? <div style={ popover }>
            <div style={ cover } onClick={()=>this.setState({pickerVisible : false})}/>
            <SketchPicker color={this.state.color} onChangeComplete={(color) => this.handleChangeComplete(color)} />
          </div> : null
        }
      </Col>
    </FormGroup>
  )
}
}
function mapStateToProps(state) {
    return {
      config : state.config
    };
  }

export default connect(mapStateToProps)(ColorPicker);
