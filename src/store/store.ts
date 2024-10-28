import { createStore } from 'redux';

// Определяем тип действия
interface ActionType {
    type: string;
    payload?: any;
}
const rootReducer = (state = {}, action:ActionType) => state;

const store = createStore(rootReducer);

export default store;