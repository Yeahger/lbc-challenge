import * as types from '../constants/ActionTypes';

export const getMessages = (value) => {

  // TODO: API getMessages call

  const messages = [
    {
      id: 1,
      date: '05/06/2019',
      text: 'Ce produit est fabuleux.',
      isPublic: true,
    }, {
      id: 2,
      date: '25/08/2019',
      text: 'La description n\'est pas conforme à la réalité. Je suis très déçue...',
      isPublic: true,
    }, {
      id: 3,
      date: '30/09/2019',
      text: 'RAS',
      isPublic: true,
    }, {
      id: 4,
      date: '02/10/2019',
      text: 'Passable',
      isPublic: true,
    },

  ];

  return {
    type: types.FETCH,
    messages,
  };
};