import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import img1 from '../static/shoe1.png';
import img2 from '../static/jacket1.png';
import img3 from '../static/jacket2.png';
import img4 from '../static/jacket3.png';
import img5 from '../static/jacket4.png';
import img6 from '../static/sweater1.png';
import img7 from '../static/sweater2.png';
const goods = [
  {
    name: 'Khaki Suede Polish Work Boots',
    class: 'Sale',
    img: img1,
    price: '149.99'
  },
  {
    name: 'Camo Fang Backpack Jungle',
    class: 'Sale',
    img: img2,
    price: '149.99'
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    class: 'Sale',
    img: img3,
    price: '149.99'
  },
  {
    name: 'Knit Sweater with Zips',
    class: 'Sale',
    img: img4,
    price: '149.99'
  },
  {
    name: 'Long Linen-blend Shirt',
    class: 'Sale',
    img: img5,
    price: '149.99'
  },
  {
    name: 'Knit Orange Sweater',
    class: 'Sale',
    img: img6,
    price: '149.99'
  },
  {
    name: 'Cotton Band-collar Blouse',
    class: 'Sale',
    img: img7,
    price: '149.99'
  },
]

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      goodsList: goods
     };
  }
  render() {
    return (
      <Row gutter={10} >
        {this.state.goodsList.map((item,index) => {
          return (
            <Col  key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className={'right-content'}>
                <p>{item.name}</p>
                <span className={'salepill'}>{item.class}</span>
                <img src={item.img} alt={'Image of '+ item.name}></img>
                <p>￥{item.price}</p>
                <Button type="primary">Add Item</Button>
              </div>
            </Col>
          )
        })}
      </Row>
    );
  }
}

export default RightContent;