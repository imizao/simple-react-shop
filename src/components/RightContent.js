import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import store from '../store'


class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      goodsList: store.getState().goodsList,
      highprice: store.getState().sliderValue
    };
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange(){
    var goodsList = store.getState().goodsList.filter(el => 
      store.getState().sale
        ? el.price < store.getState().sliderValue && el.sale
        : el.price < store.getState().sliderValue
    )
    this.setState({
      goodsList
    })
  }

  render() {
    return (
      <Row gutter={10} >
        {this.state.goodsList.map((item,index) => {
          return (
            <Col  key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className={'right-content'}>
                <p>{item.name}</p>
                {
                  item.sale ? <span className={'salepill'}>促销</span> : null
                }
                <img src={item.img} alt={'Image of '+ item.name}></img>
                <p>￥{item.price}</p>
                <Button type="primary">加入购物车</Button>
              </div>
            </Col>
          )
        })}
      </Row>
    );
  }
}

export default RightContent;