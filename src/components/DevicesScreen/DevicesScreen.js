import React, { Component } from 'react';
import { SketchPicker,Github,Circle,ChromePicker } from 'react-color';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {callGetApi} from '../../services/APIservice'

class Devices extends Component {

  constructor(props){
    super(props)
    this.state = {
      msgs : []
    }
    callGetApi('http://configapp.herokuapp.com/device').then((res)=>{
      console.log(res)
      this.setState({msgs : res})
    })
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <strong>List Of Received Messages </strong>
          </CardHeader>
          <CardBody>
        <Table responsive striped>
          <thead>
          <tr>
            <th>Brand</th>
            <th>isTablet</th>
            <th>Total Memory</th>
            <th>Manufacturer</th>
            <th>API Level</th>
            <th>System Version</th>
          </tr>
          </thead>
          <tbody>
            {
              this.state.msgs.map(row => {
                return (
              <tr key={row.id}>
                <td>{row.brand}</td>
                <td>{row.isTablet ? 'True' : 'False'}</td>
                <td>{row.totalMemory}</td>
                <td>{row.manufacturer}</td>
                <td>{row.apiLevel}</td>
                <td>{row.systemVersion}</td>
              </tr>
            )

              })
            }

          </tbody>
        </Table>
      </CardBody>
    </Card>
      </div>
    )
  }
}

export default Devices
