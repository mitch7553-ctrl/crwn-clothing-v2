import { compose, createStore, applyMiddleware } from 'redux';

import { rootReducer } from './root-reducer';
import { loggerMiddleware } from './middlewares/logger';

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
