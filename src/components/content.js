import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LeftContent from './LeftContent'
import RightContent from './RightContent'

class SContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     };
  }
  render() {
    return (
      <Row gutter={10}>
        <Col xs={24} sm={8} md={5} lg={5} xl={5} className={'active-margin'}>
          <LeftContent></LeftContent>
        </Col>
        <Col xs={24} sm={16} md={19} lg={19} xl={19}>
          <RightContent></RightContent>
        </Col>
      </Row>
    );
  }
}

export default SContent;