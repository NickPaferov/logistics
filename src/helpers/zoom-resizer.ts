import { ZOOM } from '../constants/zoom';
import { FULL_SCREEN } from '../constants/fullScreen';

export const resizeZoom = (screenWidth: number) => {
  let resizedZoom = ZOOM;
  const screenCoefficient = FULL_SCREEN / screenWidth;

  if (screenCoefficient > 2 && screenCoefficient <= 3.5) {
    resizedZoom = ZOOM - 1;
  }
  if (screenCoefficient > 3.5 && screenCoefficient <= 4) {
    resizedZoom = ZOOM - 1.5;
  }
  if (screenCoefficient > 4) {
    resizedZoom = ZOOM - 2;
  }

  return resizedZoom;
};
