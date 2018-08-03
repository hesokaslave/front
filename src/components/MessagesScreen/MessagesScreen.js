import React, { Component } from 'react';
import { SketchPicker,Github,Circle,ChromePicker } from 'react-color';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {callGetApi} from '../../services/APIservice'

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = { msgs : [] }
    callGetApi('http://pixelprice.co.uk/message')
    .then( res => this.setState({msgs : res}) ).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="animate fadeOut">
        <Card>
          <CardHeader>
            <strong>List Of Received Messages </strong>
          </CardHeader>
          <CardBody>
        <Table responsive striped>
          <thead>
          <tr>
            <th>Nom complet</th>
            <th>Telephone</th>
            <th>E-mail</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody>
            {
              this.state.msgs.map(row => {
                return (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.telephone}</td>
                <td>{row.email}</td>
                <td>{row.body}</td>
                <td>{row.createdAt}</td>
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

export default Messages
