import React, { Component } from 'react';
import { Layout } from 'antd';
import SHeader from './components/header'
const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     };
  }
  render() {
    return (
      <div>
        <Layout>
          <Header><SHeader /></Header>
          <Layout className={'capsule'}>
            <Header className={'masthead'} style={styles.header}></Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
          </Layout>
          <Footer className={'text-center'} style={styles.footer}>Made with 🎸 from imizao. This project is open source, visit the repo.</Footer>
        </Layout>
      </div>
    );
  }
}

const styles = {
  header: {
    background: 'rgb(59, 96, 237)'
  },
  footer: {
    background: '#000',
    color: '#fff',
    fontSize: '16px',
    wordSpacing: '1px',
  }
}
export default App;