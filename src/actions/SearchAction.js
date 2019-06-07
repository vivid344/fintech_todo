export const changeValue = (inputValue) => {
  return {
    type: 'CHANGE_VALUE',
    inputValue,
  }
};

export const animeDataRequest = () => {
  return {
    type: 'ANIME_REQUEST',
  }
};

export const animeDataSuccess = (data) => {
  return {
    type: 'ANIME_SUCCESS',
    data
  }
};

export const animeDataFailed = () => {
  return {
    type: 'ANIME_FAILED',
  }
};
