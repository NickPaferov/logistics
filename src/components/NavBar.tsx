import React from 'react';
import { Typography } from 'antd';
import { RouteList } from './RouteList';
import styles from '../styles/NavBar.module.scss';

const { Title } = Typography;

export const NavBar = () => {
  return (
    <div className={styles.nav}>
      <Title className={styles.title} level={3}>
        Выберите маршрут
      </Title>
      <RouteList />
    </div>
  );
};
