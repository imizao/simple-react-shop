import React, { Component } from 'react'
import { Slider, Switch, Divider, Icon } from 'antd';
import store from '../store';

class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sliderValue: store.getState().sliderValue,
      sale: store.getState().sale
     };
    this.sliderChange = this.sliderChange.bind(this)
    this.switchChange = this.switchChange.bind(this)
  }
  sliderChange(value) {
    var action = {
      type: 'slider_value_change',
      sliderValue: value
    }
    store.dispatch(action)
    this.setState({
      sliderValue: value
    })
  }
  switchChange(e) {
    const action = {
      type: 'switch_change_sale',
      sale: e
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div className={'left-content'}>
        <div className={'sidearea'}>
          <div className={'label'}>最高价格：<span className={'small-text'}>￥{this.state.sliderValue}</span></div>
          <Slider className={'ant-slider-margin'} defaultValue={this.state.sliderValue} step={0.1} min={0} max={400} onChange={this.sliderChange} tipFormatter={null}/>
          <div className={'min'}>￥0</div>
          <div className={'max'}>￥400</div>
        </div>
        <Divider />
        <div className={'sidearea'}>
          <div className={'label'}>仅显示促销</div>
          <Switch 
          className={'ant-switch-size'} 
          checkedChildren={<Icon type="check" />} 
          unCheckedChildren={<Icon type="close" />}
          onChange={this.switchChange}/>
        </div>
        <Divider />
        <div className={'sidearea'}>
          <div className={'label'}>特价销售！</div>
          <p>欢迎现在抢购，因为我们的物品价格大大减少了一半。</p>
        </div>
        <Divider />
        <div className={'sidearea'}>
          <div className={'label'}>联系我们！</div>
          <p>如有问题？欢迎致电135****2375，我们很乐意为您服务。</p>
        </div>
      </div>
    );
  }
}

export default LeftContent;