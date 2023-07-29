import React, { useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { RouteType } from '../businesLogicLayer/reducers/logisticsReducer';
import { ROUTES } from '../constants/routes';
import { selectRouteMarkers } from '../selectors/selectors';
import { fetchPolyline, setCurrentRouteAC, setPolylineDataAC } from '../businesLogicLayer/actions/actions';

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

  const markers = useSelector(selectRouteMarkers);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: RouteType[]) => {
      dispatch(setCurrentRouteAC(selectedRows[0]));
      dispatch(setPolylineDataAC(null));
    },
    getCheckboxProps: (record: RouteType) => ({
      disabled: record.routeName === 'Disabled Route',
      route: record.routeName,
    }),
  };

  useEffect(() => {
    if (!markers || !markers.length) return;
    const coords = markers.map((marker) => [marker.point.lng, marker.point.lat]);
    // @ts-ignore
    dispatch(fetchPolyline(coords));
  }, [markers]);

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
