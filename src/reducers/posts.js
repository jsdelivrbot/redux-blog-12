import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    /* 
      The goal of mapKeys is to turn an array
      of objects into an object itself. id is the
      property in the object inside of the array that
      we want to pull off to use as the key in the
      resulting object. This makes it easy to lookup
      a particular record by id.
      
      ex: state['4']

      Using this method, you won't be able to use
      the map array helper. Instead, you can use the
      lodash map helper method that knows how to deal
      with objects.
    */
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data}
    default:
      return state
  }
};