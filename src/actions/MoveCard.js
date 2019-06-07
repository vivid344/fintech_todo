export const moveCard = (data, place) => {
  return {
    type: 'MOVE_CARD',
    data,
    place,
  }
};

export const removeCard = (data, place) => {
  return {
    type: 'REMOVE_CARD',
    data,
    place,
  }
};
