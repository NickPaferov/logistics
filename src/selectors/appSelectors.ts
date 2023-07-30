export const selectDataFetchingStatus = (state: any): boolean => state.app.isFetchingData;
export const selectError = (state: any): string | null => state.app.error;
