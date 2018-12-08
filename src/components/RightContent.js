import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import shoe1 from '../static/shoe1.png';
import jacket1 from '../static/jacket1.png';
import jacket2 from '../static/jacket2.png';
import jacket3 from '../static/jacket3.png';
import jacket4 from '../static/jacket4.png';
import jacket5 from '../static/sweater4.png';
import jacket6 from '../static/sweater5.png';
import hat1 from '../static/hat1.png';
import shirt1 from '../static/shirt1.png';
import shirt2 from '../static/shirt2.png';
import sweater1 from '../static/sweater1.png';
import sweater2 from '../static/sweater2.png';
import sweater3 from '../static/sweater3.png';
const goods = [
  {
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    category: 'women',
    sale: true,
    article: 'shoe',
    img: shoe1
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    category: 'women',
    sale: false,
    article: 'jacket',
    img: jacket1
  },
  {
    name: 'Parka and Quilted Liner Jacket',
    price: 49.99,
    category: 'men',
    sale: true,
    article: 'jacket',
    img: jacket2
  },
  {
    name: 'Cotton Black Cap',
    price: 12.99,
    category: 'men',
    sale: true,
    article: 'hats',
    img: hat1
  },
  {
    name: 'Knit Sweater with Zips',
    price: 29.99,
    category: 'women',
    sale: false,
    article: 'sweater',
    img: sweater1
  },
  {
    name: 'Long Linen-blend Shirt',
    price: 18.99,
    category: 'men',
    sale: false,
    article: 'shirt',
    img: shirt1
  },
  {
    name: 'Knit Orange Sweater',
    price: 28.99,
    category: 'men',
    sale: false,
    article: 'sweater',
    img: sweater2
  },
  {
    name: 'Cotton Band-collar Blouse',
    price: 49.99,
    category: 'men',
    sale: false,
    article: 'shirt',
    img: shirt2
  },
  {
    name: 'Camo Fang Backpack Jungle',
    price: 59.99,
    category: 'women',
    sale: true,
    article: 'jacket',
    img: jacket3
  },
  {
    name: 'Golden Pilot Jacket',
    price: 129.99,
    category: 'women',
    sale: false,
    article: 'jacket',
    img: jacket4
  },
  {
    name: 'Spotted Patterned Sweater',
    price: 380.99,
    category: 'women',
    sale: false,
    article: 'jacket',
    img: jacket5
  },
  {
    name: 'Double Knit Sweater',
    price: 59.99,
    category: 'men',
    sale: true,
    article: 'jacket',
    img: jacket6
  }
]

class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      goodsList: goods,
      sale: false,
      highprice: 300
     };
     this.goodsListFilter = this.goodsListFilter.bind(this)
  }
  goodsListFilter(){
    this.setState({
      sale: !this.state.sale
    })
    var goodsList = this.state.goodsList.filter(el => 
      this.state.sale
        ? el.price < this.state.highprice && el.sale
        : el.price < this.state.highprice
    )
    this.setState({
      goodsList
    })
  }
  render() {
    return (
      <Row gutter={10} onClick={this.goodsListFilter}>
        {this.state.goodsList.map((item,index) => {
          return (
            <Col  key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
              <div className={'right-content'}>
                <p>{item.name}</p>
                {
                  item.sale ? <span className={'salepill'}>sale</span> : null
                }
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