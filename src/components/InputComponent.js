import React from 'react'
import {Label, Input} from "reactstrap";

const InputComponent = ({label, id, value, onChange, type}) => {

    return (
        <>
            <Label htmlFor={id}>
                {label}:
            </Label>
            <Input
                type={type || 'text'}
                id={id}
                value={value}
                onChange={onChange}
            />
        </>
    )

}

export default InputComponent;