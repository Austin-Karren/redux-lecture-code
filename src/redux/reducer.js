const initialState = {
   user: {}
}

const GET_USER = 'GET_USER';

export function getUser(userObj) {
   return {
      type: GET_USER,
      payload: userObj
   }
}

export default function reducer(state = initialState, action) {
   switch(action.type) {
      case GET_USER:
         // return Object.assign({}, state, {user: action.payload})
         return {...state, user: action.payload}
      default: 
         return state;
   }
}