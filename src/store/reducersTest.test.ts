// test('RESET_COUNT should reset currentValue to startValue', () => {
//     const initialState = {startValue: 5, currentValue: 10, isIncButtonDisabled: false, isResetButtonDisabled: false};
//     const newState = counterReducer(initialState, {type: 'RESET_COUNT'});
//     expect(newState.currentValue).toBe(5);
//     expect(newState.isIncButtonDisabled).toBe(false);
//     expect(newState.isResetButtonDisabled).toBe(false);
// })
import {counterReducer, CounterStateType} from "./counterReducer";
let initialState: CounterStateType;
beforeEach(() => {
    initialState = {
        startValue: 0,        // начальное значение счетчика
        currentValue: 0,      // текущее значение счетчика
        maxValue: 10,          // максимальное значение счетчика
        isSetButtonDisabled: true,   // состояние кнопки "set"
        errorMessage: '',            // сообщение об ошибке
        settingMessage: '',          // сообщение для настройки значений
        isIncButtonDisabled: false,  // состояние кнопки "inc"
        isResetButtonDisabled: false // состояние кнопки "reset"
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