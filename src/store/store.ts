import { createStore, combineReducers } from 'redux';
import {counterReducer} from "./counterReducer";

// export type RootStateType = {
//     startValue: number
//     currentValue: number
//     maxValue: number
//     isSetButtonDisabled: boolean
//     errorMessage: string
//     settingMessage: string
//     isIncButtonDisabled: boolean
//     isResetButtonDisabled: boolean
// }
// Комбинирование редьюсеров
const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer);
export type RootStateType = ReturnType<typeof rootReducer>
export default store;