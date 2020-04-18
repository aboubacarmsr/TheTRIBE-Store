import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

//Le reducer prend un etat initial (etat precedent du state) + l'action à effectuer. Si cette action correspond
//A une des actions qu'il peut effectuer alors il l'effectue (payload = mise à jour du state)
//Sinon il retourne le state comme il l'a reçu
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
