import { setErrorAC, setIsFetchingDataAC } from '../actions/appActions';

const initialState = {
  isFetchingData: false,
  error: null as string | null,
};

type InitialStateType = typeof initialState;

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-IS-FETCHING-DATA':
      return { ...state, isFetchingData: action.isFetchingData };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

type AppActionsType = ReturnType<typeof setIsFetchingDataAC> | ReturnType<typeof setErrorAC>;
