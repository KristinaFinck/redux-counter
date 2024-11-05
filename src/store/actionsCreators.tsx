
 export const resetCountAC  = () => (
     {type: 'RESET_COUNT'}
 );
 export const onClickSetAC = () => (
     {type: 'CLICK_SET'}
 );
export const addCountAC = () => (
    {type: 'ADD_COUNT'}
)
 export const maxValueAC = (inputMaxValue: number) => (
     {type: 'SET_MAX_VALUE',
     payload: inputMaxValue}
 )
 export const startValueAC = (inputStartValue: number) => (
     {type: 'SET_START_VALUE',
     payload: inputStartValue}
 )