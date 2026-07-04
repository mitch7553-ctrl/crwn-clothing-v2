import {CATEGORIES_ACTION_TYPES} from './category.type';
import {createAction} from '../../utils/reducer/reducer.utils';


export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES, categoriesMap);



