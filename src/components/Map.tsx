import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useSelector } from 'react-redux';
import { selectCurrentRoute } from '../selectors/selectors';
import { RecenterAutomatically } from './RecenterAutomatically';

export const Map = () => {
  const currenRoute = useSelector(selectCurrentRoute);

  const markers = currenRoute?.points;

  const customIcon = new Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [35, 35],
  });

  return (
    <MapContainer center={[55.75222, 37.61556]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.map((marker: any) => (
          <Marker key={marker.key} position={[marker.point.lat, marker.point.lng]} icon={customIcon}>
            <Popup>{marker.key}</Popup>
          </Marker>
        ))}
      {markers && <RecenterAutomatically lat={markers[0].point.lat} lng={markers[0].point.lng} />}
    </MapContainer>
  );
};
