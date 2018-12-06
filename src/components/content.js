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
        <Col xs={24} sm={12} md={6} lg={4} xl={4}>
          <LeftContent></LeftContent>
        </Col>
        <Col xs={24} sm={12} md={18} lg={20} xl={20}>
          <RightContent></RightContent>
        </Col>
      </Row>
    );
  }
}

export default SContent;