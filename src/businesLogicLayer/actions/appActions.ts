export const setIsFetchingDataAC = (isFetchingData: boolean) =>
  ({
    type: 'APP/SET-IS-FETCHING-DATA',
    isFetchingData,
  }) as const;

export const setErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error }) as const;
