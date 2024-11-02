// test('RESET_COUNT should reset currentValue to startValue', () => {
//     const initialState = {startValue: 5, currentValue: 10, isIncButtonDisabled: false, isResetButtonDisabled: false};
//     const newState = counterReducer(initialState, {type: 'RESET_COUNT'});
//     expect(newState.currentValue).toBe(5);
//     expect(newState.isIncButtonDisabled).toBe(false);
//     expect(newState.isResetButtonDisabled).toBe(false);
// })
import {counterReducer} from "./counterReducer";

test('RESET_COUNT should reset currentValue to startValue', () => {
    const initialState = { startValue: 5, currentValue: 10, isIncButtonDisabled: false, isResetButtonDisabled: false };
    const newState = counterReducer(initialState, { type: 'RESET_COUNT' });
    expect(newState.currentValue).toBe(5);
    expect(newState.isIncButtonDisabled).toBe(false);
    expect(newState.isResetButtonDisabled).toBe(false);
});
