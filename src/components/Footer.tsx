import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const Footer = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title level={5}>&copy; Логистические маршруты 2023</Title>
    </div>
  );
};
