import * as types from '../constants/ActionTypes';

export const setFileSizeFormat = format => ({
  type: types.SET_FILE_SIZE_FORMAT,
  format
});

export const setDownloadSplit = split => ({
  type: types.SET_DOWNLOAD_SPLIT,
  split
});

export const setSynchronizeDir = dir => ({
  type: types.SET_SYNCHRONIZE_DIR,
  dir
});