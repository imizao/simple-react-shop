import React, { Component } from 'react'
import { Slider, Switch, Divider, Icon } from 'antd';

class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sliderValue: 150
     };
    this.sliderChange = this.sliderChange.bind(this)
  }
  sliderChange(value) {
    this.setState({
      sliderValue: value
    })
  }
  render() {
    return (
      <div className={'left-content'}>
        <div className={'sidearea'}>
          <div className={'label'}>最高价格：<span className="small-text">￥{this.state.sliderValue}</span></div>
          <Slider className={'ant-slider-margin'} defaultValue={this.state.sliderValue} step={0.1} min={0} max={400} onChange={this.sliderChange} tipFormatter={null}/>
          <div className={'min'}>￥0</div>
          <div className={'max'}>￥400</div>
        </div>
        <Divider />
        <div className={'sidearea'}>
          <div className={'label'}>仅显示促销</div>
          <Switch className={'ant-switch-size'} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />}/>
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