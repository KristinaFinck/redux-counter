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
    const initialState = {
        startValue: 0,        // начальное значение счетчика
        currentValue: 0,      // текущее значение счетчика
        maxValue: 0,          // максимальное значение счетчика
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

} )