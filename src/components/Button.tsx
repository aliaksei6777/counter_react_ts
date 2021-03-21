import React from 'react';

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    buttonTitle: string
}

export function Button (props: ButtonPropsType) {
    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled}>{props.buttonTitle}</button>
        </div>
    )
}