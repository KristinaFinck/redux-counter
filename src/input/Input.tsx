import React, {ChangeEvent} from 'react';
import {StyledInput} from "../styles/Styles";

type InputType = {
    type: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    hasError: boolean
}
export const Input = (props: InputType) => {
    return (
        <StyledInput type={props.type} value={props.value} onChange={props.onChange}
                     hasError={props.hasError} />
    )
}