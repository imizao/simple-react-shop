import React, { Component } from 'react'
import { Row, Col } from 'antd'

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Row gutter={10} >
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <div className={'right-content'}></div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <div className={'right-content'}></div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <div className={'right-content'}></div>
        </Col>
      </Row>
    );
  }
}

export default RightContent;