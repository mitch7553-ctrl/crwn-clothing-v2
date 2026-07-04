import { createContext,  useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reducer.utils';

import {USER_ACTION_TYPES} from './user.types'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});



export const userReducer = (state= INITIAL_STATE, action) => {
  console.log('dispatched');
  console.log(action);
  const {type, payLoad} = action;

  switch(type) {
    case  USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payLoad
      }
    default:
      return state;
  }
}


const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch( createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user) );
  }

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


/*
const userReducer =(state, action) => {
  return{
    currentUser: null,
    }
  }
*/