import { AppRootStateType } from '../store/store';

export const selectCurrentRoute = (state: AppRootStateType): any => state.route;
