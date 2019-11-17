import moment from 'moment';
import * as types from '../constants/ActionTypes';

export const getMessages = () => {
  // TODO: API getMessages call
  const messages = [
    {
      id: 1,
      date: '05/06/2019',
      username: 'Jackydu51',
      text: 'Ce produit est fabuleux.',
      isPublic: true,
    }, {
      id: 2,
      date: '25/08/2019',
      username: 'MonVoisinTotoro',
      text: 'La description n\'est pas conforme à la réalité. Je suis très déçue...',
      isPublic: true,
    }, {
      id: 3,
      date: '30/09/2019',
      username: 'Rambo',
      text: 'RAS',
      isPublic: true,
    }, {
      id: 4,
      date: '02/10/2019',
      username: 'Chuck',
      text: 'Passable',
      isPublic: false,
    },

  ];

  return {
    type: types.FETCH,
    messages,
  };
};

export const saveMessage = (isPublic, username, text) => {
  // TODO: API saveMessages call

  return {
    type: types.SAVE,
    message: {
      id: Math.floor(Math.random() * 999999), // random ID just for this technical test
      date: moment().format('DD/MM/YYYY'),
      username,
      text,
      isPublic: isPublic === '1',
    }
  }
};