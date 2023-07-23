import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch } from 'react-redux';
import { setCurrentRouteAC } from '../reducers/routeReducer';
import { ROUTES, RouteType } from '../constants/routes';

const columns: ColumnsType<RouteType> = [
  {
    title: 'Маршрут',
    dataIndex: 'routeName',
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Точка1 (lat, lng)',
    dataIndex: 'points',
    render: (_, { points }) => (
      <>
        {points.map((p) => {
          if (p.key === 1) {
            return <span key={p.key}>{`${p.point.lat}, ${p.point.lng}`}</span>;
          }
        })}
      </>
    ),
  },
  {
    title: 'Точка2 (lat, lng)',
    dataIndex: 'points',
    render: (_, { points }) => (
      <>
        {points.map((p) => {
          if (p.key === 2) {
            return <span key={p.key}>{`${p.point.lat}, ${p.point.lng}`}</span>;
          }
        })}
      </>
    ),
  },
  {
    title: 'Точка3 (lat, lng)',
    dataIndex: 'points',
    render: (_, { points }) => (
      <>
        {points.map((p) => {
          if (p.key === 3) {
            return <span key={p.key}>{`${p.point.lat}, ${p.point.lng}`}</span>;
          }
        })}
      </>
    ),
  },
];

export const RouteList = () => {
  const dispatch = useDispatch();

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: RouteType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      dispatch(setCurrentRouteAC(selectedRows[0]));
    },
    getCheckboxProps: (record: RouteType) => ({
      disabled: record.routeName === 'Disabled Route', // Column configuration not to be checked
      route: record.routeName,
    }),
  };

  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={ROUTES}
      />
    </div>
  );
};
