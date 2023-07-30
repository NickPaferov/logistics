import React from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RecenterAutomatically } from './RecenterAutomatically';
import { ZOOM } from '../constants/zoom';
import { PointType } from '../businesLogicLayer/reducers/routeReducer';
import { MAP_CENTER } from '../constants/mapCenter';
import { findCenter } from '../helpers/center-finder';
import markerImg from '../assets/marker.png';
import { selectPolylineData, selectRouteMarkers } from '../selectors/routeSelectors';
import { selectError } from '../selectors/appSelectors';
import { setPolylineDataAC } from '../businesLogicLayer/actions/routeActions';

export const Map = () => {
  const dispatch = useDispatch();

  const markers = useSelector(selectRouteMarkers);
  const polylineData = useSelector(selectPolylineData);
  const error = useSelector(selectError);

  let polyline;
  let routeCenter;

  if (polylineData) {
    polyline = [...polylineData];
    routeCenter = findCenter([...polylineData]);
  }

  if (error) {
    dispatch(setPolylineDataAC(null));
  }

  const customIcon = new Icon({
    iconUrl: `${markerImg}`,
    iconSize: [35, 35],
  });

  return (
    <MapContainer center={MAP_CENTER} zoom={ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.map((marker: PointType) => (
          <Marker key={marker.key} position={[marker.point.lat, marker.point.lng]} icon={customIcon}>
            <Popup>{`Точка${marker.key} (${marker.point.lat}, ${marker.point.lng})`}</Popup>
          </Marker>
        ))}
      {routeCenter && <RecenterAutomatically lat={routeCenter[0]} lng={routeCenter[1]} />}
      {polyline && <Polyline pathOptions={{ color: '#0078a8', weight: 5 }} positions={polyline} />}
    </MapContainer>
  );
};
