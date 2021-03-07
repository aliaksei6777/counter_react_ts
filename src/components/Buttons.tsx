import React from 'react';

type ButtonsPropsType = {
    onClick: () => void
    disabled: boolean
    buttonTitle: string
}

export function Buttons (props: ButtonsPropsType) {

    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled}>{props.buttonTitle}</button>
        </div>
    )
}