import React, { Component } from 'react'
import { Row, Col } from 'antd';

class SHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nav: ['女人装','男人装','促销']
     };
  }
  render() {
    return (
      <Row type="flex" justify="center" className={'text-center'}>
        {
          this.state.nav.map((item, index) => {
            return (
              <Col span={4} key={index}>{item}</Col>
            )
          })
        }
      </Row>
    );
  }
}

export default SHeader;