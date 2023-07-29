import React from 'react';
import { Typography } from 'antd';
import { RouteList } from './RouteList';

const { Title } = Typography;

export const NavBar = () => {
  return (
    <div style={{ minWidth: '35%' }}>
      <Title level={3}>Выберите маршрут</Title>
      <RouteList />
    </div>
  );
};
