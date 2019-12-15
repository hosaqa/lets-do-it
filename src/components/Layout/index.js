import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Schedule from '../Schedule';
import './Layout.css';

const { Content } = Layout;

const LayoutApp = () => (
  <Layout className="layout">
    <div className="container-wide">
      <Content>
        <div className="layout__content">
          <Schedule />
        </div>
      </Content>
    </div>
  </Layout>
);

export default LayoutApp;
