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
    name: '卡其布波兰工作靴',
    price: 149.99,
    category: 'women',
    sale: true,
    article: 'shoe',
    img: shoe1
  },
  {
    name: 'camo毛衫',
    price: 39.99,
    category: 'women',
    sale: false,
    article: 'jacket',
    img: jacket1
  },
  {
    name: '派克大衣和填充衬垫夹克',
    price: 379.99,
    category: 'men',
    sale: true,
    article: 'jacket',
    img: jacket2
  },
  {
    name: '棉黑帽',
    price: 12.99,
    category: 'men',
    sale: true,
    article: 'hats',
    img: hat1
  },
  {
    name: '针织毛衫',
    price: 29.99,
    category: 'women',
    sale: false,
    article: 'sweater',
    img: sweater1
  },
  {
    name: '长线衬衣',
    price: 18.99,
    category: 'men',
    sale: false,
    article: 'shirt',
    img: shirt1
  },
  {
    name: '针织橙毛衫',
    price: 128.99,
    category: 'men',
    sale: false,
    article: 'sweater',
    img: sweater2
  },
  {
    name: '棉领衬衫',
    price: 69.99,
    category: 'men',
    sale: false,
    article: 'shirt',
    img: shirt2
  },
  {
    name: '迷彩芳丛林衬衫',
    price: 259.99,
    category: 'women',
    sale: true,
    article: 'jacket',
    img: jacket3
  },
  {
    name: '黄金飞行员夹克',
    price: 129.99,
    category: 'women',
    sale: false,
    article: 'jacket',
    img: jacket4
  },
  {
    name: '春意斑点毛衣',
    price: 58.99,
    category: 'women',
    sale: true,
    article: 'jacket',
    img: jacket5
  },
  {
    name: '双针织毛衫',
    price: 59.99,
    category: 'men',
    sale: true,
    article: 'jacket',
    img: jacket6
  }
]
const defaultState ={
  sliderValue: 300,
  goodsList: goods,
  sale: false
}

export default (state = defaultState, action) => {
  if(action.type === 'change_sale'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sale = action.sale
    return newState
  }

  if(action.type === 'switch_change_sale') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sale = action.sale
    return newState
  }

  if(action.type === 'slider_value_change') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.sliderValue = action.sliderValue
    return newState
  }
  return state;
}