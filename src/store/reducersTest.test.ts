// test('RESET_COUNT should reset currentValue to startValue', () => {
//     const initialState = {startValue: 5, currentValue: 10, isIncButtonDisabled: false, isResetButtonDisabled: false};
//     const newState = counterReducer(initialState, {type: 'RESET_COUNT'});
//     expect(newState.currentValue).toBe(5);
//     expect(newState.isIncButtonDisabled).toBe(false);
//     expect(newState.isResetButtonDisabled).toBe(false);
// })
import {counterReducer, CounterStateType} from "./counterReducer";
import {error} from "../App";
let initialState: CounterStateType;
beforeEach(() => {
    initialState = {
        startValue: 0,        // начальное значение счетчика
        currentValue: 0,      // текущее значение счетчика
        maxValue: 10,          // максимальное значение счетчика
        isSetButtonDisabled: true,   // состояние кнопки "set"
        errorMessage: '',            // сообщение об ошибке
        settingMessage: '',          // сообщение для настройки значений
        isIncButtonDisabled: true,  // состояние кнопки "inc"
        isResetButtonDisabled: true // состояние кнопки "reset"
    };
})
test('RESET_COUNT should reset currentValue to startValue', () => {

    const newState = counterReducer(initialState, { type: 'RESET_COUNT' });
    expect(newState.currentValue).toBe(0);
    expect(newState.isIncButtonDisabled).toBe(false);
    expect(newState.isResetButtonDisabled).toBe(false);
});

test('CLICK_SET should set currentValue to startValue', () => {
    const newState = counterReducer(initialState, {type: 'CLICK_SET'});
    expect(newState.settingMessage).toBe('');
    expect(newState.currentValue).toBe(0);
    expect(newState.isSetButtonDisabled).toBe(false);
    expect(newState.isIncButtonDisabled).toBe(false);
    expect(newState.isSetButtonDisabled).toBe(false)

});

test('ADD_COUNT should increase currentValue by 1', () => {
    initialState = {
        ...initialState,
        currentValue: 9,    // меньше maxValue для начала
        maxValue: 10,       // задаем maxValue для проверки
        isIncButtonDisabled: false, // кнопка активна в начале
    };
    let newState = counterReducer(initialState, {type: 'ADD_COUNT'});
    expect(newState.currentValue).toBe(10);
    expect(newState.isIncButtonDisabled).toBe(true);// кнопка должна стать неактивной

// Тестируем случай, когда currentValue меньше maxValue
    initialState = { ...initialState, currentValue: 8, maxValue: 10 };
    newState = counterReducer(initialState, { type: 'ADD_COUNT' });
    expect(newState.currentValue).toBe(9); // currentValue увеличивается на 1
    expect(newState.isIncButtonDisabled).toBe(false); // кнопка остается активной
})

test('SET_MAX_VALUE should set max value if it is positive and greater than start value', () => {
    //случай, когда
    let newState = counterReducer(initialState, {type: 'SET_MAX_VALUE', payload: 1});
    expect(newState.settingMessage).toBe("enter values and press 'set'");
    expect(newState.isSetButtonDisabled).toBe(false);
    expect(newState.errorMessage).toBe('');
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);

    // тестируем случай, когда maxValue < 0 (ошибка) ;
    initialState = { ...initialState, startValue: 0, maxValue: 0 };
     newState = counterReducer(initialState, {type: 'SET_MAX_VALUE', payload: -1});
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe(error);
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);

// Случай, когда maxValue = startValue (ошибка)
    let testState = { ...initialState, startValue: 1, maxValue: 2 };
    newState = counterReducer(initialState, { type: 'SET_MAX_VALUE', payload: 1 });
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe(error);
    // Cлучай, когда maxValue < startValue
    initialState = { ...initialState, startValue: 3, maxValue: 3 };
    newState = counterReducer(initialState, { type: 'SET_MAX_VALUE', payload: 2 });
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe('');
})

test('SET_START_VALUE should set start value if it is positive and smaler than max value', () => {
    let newState = counterReducer(initialState, {type: 'SET_START_VALUE', payload: 1})
    expect(newState.settingMessage).toBe("enter values and press 'set'");
    expect(newState.isSetButtonDisabled).toBe(false);
    expect(newState.errorMessage).toBe('');
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);
    // тестируем случай, когда maxValue < 0 ;
    newState = counterReducer(initialState, {type: 'SET_START_VALUE', payload: -1});
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe(error);
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);
    // Случай, когда maxValue = startValue
    let testState = { ...initialState, startValue: 3, maxValue: 4 };
    newState = counterReducer(testState, { type: 'SET_START_VALUE', payload: 4 });
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe(error);
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);
    //Случай, когда startValue > maxValue
    testState = { ...initialState, startValue: 4, maxValue: 5};
    newState = counterReducer(testState, { type: 'SET_START_VALUE', payload: 6 });
    expect(newState.settingMessage).toBe("");
    expect(newState.isSetButtonDisabled).toBe(true);
    expect(newState.errorMessage).toBe(error);
    expect(newState.isIncButtonDisabled).toBe(true);
    expect(newState.isResetButtonDisabled).toBe(true);
})