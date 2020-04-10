import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

//Le reducer prend un etat initial (etat precedent du state) + l'action à effectuer. Si cette action correspond
//A une des actions qu'il peut effectuer alors il l'effectue (payload = mise à jour du state)
//Sinon il retourne le state comme il l'a reçu
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
